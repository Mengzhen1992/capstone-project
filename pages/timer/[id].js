import { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutSytle from "../../components/LayoutStyle";
import Task from "../../models/Task";
import { displayTime } from "../../utils";
import { useRouter } from "next/router";
import pause from "../../public/images/pause.svg";
import returnButton from "../../public/images/return.svg";
import start from "../../public/images/start.svg";
import Image from "next/image";
import FinishPopup from "../../components/FinishPopup";

export async function getServerSideProps(context) {
  const { id } = await context.query;

  const result = await Task.findById(id).exec();
  const task = {
    id: id,
    name: result.name,
    totalTime: result.totalTime,
    finishedTime: result.finishedTime,
    leftTime: result.totalTime - result.finishedTime,
    start: result.isStarted,
    pause: result.isPause,
    finish: result.isFinished,
  };
  // Pass data to the page via props
  return { props: { task } };
}

export default function Timer({ task }) {
  const router = useRouter();
  const [timer, setTimer] = useState({
    leftTime: task.leftTime,
    pause: task.pause,
  });
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    /* fix NaN when this page reloads with timer.sec === undefined */
    const interval = setInterval(() => {
      setTimer((pre) => {
        if (pre.pause) {
          return { leftTime: pre.leftTime, pause: pre.pause };
        }
        if (pre.leftTime > 0) {
          return { leftTime: pre.leftTime - 1, pause: pre.pause };
        } else {
          clearInterval(interval);
          setPopup(true);
          return { leftTime: pre.leftTime, pause: pre.pause };
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function handleTogglePause() {
    setTimer((pre) => ({ leftTime: pre.leftTime, pause: !pre.pause }));
    const data = {
      id: task.id,
      isPause: !task.pause,
      finishedTime: task.totalTime - timer.leftTime,
    };

    const JSONdata = JSON.stringify(data);
    const url = `/api/tasks/${task.id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    await fetch(url, options);
    router.push(`/timer/${task.id}`);
  }

  async function handleReturn() {
    setTimer((pre) => ({ leftTime: pre.leftTime, pause: true }));
    const data = {
      id: task.id,
      isPause: true,
      finishedTime: task.totalTime - timer.leftTime,
    };

    const JSONdata = JSON.stringify(data);
    const url = `/api/tasks/${task.id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    await fetch(url, options);
    router.push("/");
  }

  async function onFinish() {
    const data = {
      id: task.id,
      isFinished: true,
    };

    const JSONdata = JSON.stringify(data);
    const url = `/api/tasks/${task.id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    await fetch(url, options);
    router.push("/");
  }

  return (
    <LayoutSytle>
      <TimerTitle>{task.name}</TimerTitle>
      <TimerClock>{displayTime(timer.leftTime)}</TimerClock>
      <ReturnButton onClick={handleReturn}>
        <Image src={returnButton} alt="stop button for timer" />
      </ReturnButton>
      <PauseButton onClick={handleTogglePause}>
        {!task.pause ? (
          <Image src={pause} alt="pause button for timer" />
        ) : (
          <Image
            src={start}
            alt="start button for timer"
            style={{
              paddingLeft: 5,
            }}
          />
        )}
      </PauseButton>
      {popup && <FinishPopup onFinish={onFinish}></FinishPopup>}
    </LayoutSytle>
  );
}

const TimerTitle = styled.h2`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  font-size: 3rem;
  justify-self: center;
`;

const TimerClock = styled.div`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  width: 300px;
  height: 300px;
  background: var(--color-task);
  box-shadow: var(--shadow-box);
  border-radius: 150px;
  text-align: center;
  justify-self: center;
  align-self: center;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 300px;
  margin-top: -0.5rem;
`;

const PauseButton = styled.button`
  position: absolute;
  right: 20%;
  bottom: 12%;
  border: none;
  height: 71px;
  width: 71px;
  border-radius: 50%;
  background-color: var(--color-percent);
  cursor: pointer;
`;

const ReturnButton = styled.button`
  position: absolute;
  left: 20%;
  bottom: 12%;
  border: none;
  height: 71px;
  width: 71px;
  border-radius: 50%;
  background-color: var(--color-percent);
  cursor: pointer;
`;

import { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutSytle from "../../components/LayoutStyle";
import Task from "../../models/Task";
import { displayTime } from "../../ultils";
import { useRouter } from "next/router";
import pause from "../../public/images/pause.svg";
import stop from "../../public/images/stop.svg";
import start from "../../public/images/start.svg";
import Image from "next/image";

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
          return { leftTime: pre.leftTime, pause: pre.pause };
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function handleTogglePauseButton() {
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

  return (
    <LayoutSytle>
      <TimerTitle>{task.name}</TimerTitle>
      <TimerClock>{displayTime(timer.leftTime)}</TimerClock>
      <PauseButton onClick={handleTogglePauseButton}>
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
      <StopButton>
        <Image src={stop} alt="stop button for timer" />
      </StopButton>
    </LayoutSytle>
  );
}

const TimerTitle = styled.h2`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  font-size: 2.5rem;
  justify-self: center;
  margin-top: 1.5rem;
`;

const TimerClock = styled.div`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 150px;
  text-align: center;
  justify-self: center;
  align-self: center;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 300px;
`;

const PauseButton = styled.button`
  position: absolute;
  left: 20%;
  bottom: 15%;
  border: none;
  height: 71px;
  width: 71px;
  border-radius: 50%;
  background-color: #df1e7b;
  cursor: pointer;
`;

const StopButton = styled.button`
  position: absolute;
  right: 20%;
  bottom: 15%;
  border: none;
  height: 71px;
  width: 71px;
  border-radius: 50%;
  background-color: #df1e7b;
  cursor: pointer;
`;

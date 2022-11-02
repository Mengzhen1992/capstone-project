import { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutSytle from "../../components/LayoutStyle";
import Task from "../../models/Task";
import { displayTime } from "../../ultils";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { id } = await context.query;

  const result = await Task.findById(id).exec();
  const task = {
    name: result.name,
    totalTime: result.totalTime,
    finishedTime: result.finishedTime,
    leftTime: result.totalTime - result.finishedTime,
    start: result.isStarted,
  };
  // Pass data to the page via props
  return { props: { task } };
}

export default function Timer({ task }) {
  const router = useRouter();
  const [timer, setTimer] = useState(task);

  useEffect(() => {
    /* fix NaN when this page reloads with timer.sec === undefined */
    const interval = setInterval(() => {
      setTimer((pre) => {
        if (pre.leftTime > 0) {
          return { leftTime: pre.leftTime - 1, start: pre.start };
        } else {
          clearInterval(interval);
          return { leftTime: pre.leftTime, start: pre.start };
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LayoutSytle>
      <TimerTitle>{task.name}</TimerTitle>
      <TimerClock>{displayTime(timer.leftTime)}</TimerClock>
      <ReturnButton onClick={() => router.push("/")}>Home</ReturnButton>
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

const ReturnButton = styled.button`
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;
  background: rgba(223, 30, 123, 0.59);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 8rem;
  height: 2.5rem;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: #fff;
  margin: 0rem auto 1rem auto;
  cursor: pointer;
  &:hover {
    background: rgba(223, 30, 123, 0.8);
  }
`;

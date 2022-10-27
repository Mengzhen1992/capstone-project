import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutSytle from "../../components/LayoutStyle";

export default function Timer({ tasks }) {
  const router = useRouter();
  const { id } = router.query;

  const { taskName, duration } = tasks.find((task) => task.id === id);

  const [durationClock, setDurationClock] = useState({
    sec: duration,
    start: true,
  });
  const hour =
    Math.floor(durationClock.sec / 3600) < 10
      ? "0" + Math.floor(durationClock.sec / 3600)
      : Math.floor(durationClock.sec / 3600);
  const minutes =
    durationClock.sec % 3600 === 0
      ? "00"
      : Math.floor(durationClock.sec / 3600) >= 1
      ? Math.floor((durationClock.sec % 3600) / 60)
      : Math.floor(durationClock.sec / 60) < 10
      ? "0" + Math.floor(durationClock.sec / 60)
      : Math.floor(durationClock.sec / 60);
  const seconds =
    durationClock.sec % 60 < 10
      ? "0" + (durationClock.sec % 60)
      : durationClock.sec % 60;

  useEffect(() => {
    let timer;
    if (durationClock.sec > 0) {
      timer = setInterval(() => {
        setDurationClock((pre) => ({ sec: pre.sec - 1, start: pre.start }));
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <LayoutSytle>
      <TimerTitle>{taskName}</TimerTitle>
      <TimerClock>{`${hour}:${minutes}:${seconds}`}</TimerClock>
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

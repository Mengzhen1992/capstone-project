import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import LayoutSytle from "../../components/LayoutStyle";

export default function Timer({ tasks }) {
  const router = useRouter();
  const { id } = router.query;

  const { taskName, duration } = tasks.find((task) => task.id === id);

  console.log("duration", duration);
  let durationHour = 0;
  if (duration.includes("h")) durationHour = duration.split("h")[0];
  console.log("durationHour", durationHour);
  let durationMinute = 0;
  if (duration.includes("min")) durationMinute = duration.split("min")[0];
  console.log("durationMinute", durationMinute);

  const durationInSec =
    Number(durationHour) * 60 * 60 + Number(durationMinute) * 60;
  const [durationClock, setDurationClock] = useState({
    sec: durationInSec,
    start: true,
  });
  function displayDuration() {
    const currentHour =
      Math.floor(durationClock.sec / 3600) < 10
        ? "0" + Math.floor(durationClock.sec / 3600)
        : Math.floor(durationClock.sec / 3600);
    const currentMin =
      durationClock.sec % 3600 < 600
        ? "0" + (durationClock.sec % 60) / 60
        : durationClock.sec % 60;
    return `${currentHour}:${currentMin}:00`;
  }

  function handleTimer() {
    setTimeout(() => {
      setDurationClock({ sec: sec - 1, start: true });
    }, 1000);
  }
  return (
    <LayoutSytle>
      <TimerTitle>{taskName}</TimerTitle>
      <TimerClock>{displayDuration()}</TimerClock>
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

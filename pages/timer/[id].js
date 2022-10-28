import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutSytle from "../../components/LayoutStyle";
import { displayTime } from "../../ultils";

export default function Timer() {
  const router = useRouter();
  const { taskName, sec } = router.query;

  const [timer, setTimer] = useState({ sec: sec, start: true });

  useEffect(() => {
    /* fix NaN when this page reloads with timer.sec === undefined */
    setTimer({ sec: sec, start: true });

    const interval = setInterval(() => {
      setTimer((pre) => {
        if (pre.sec > 0) {
          return { sec: pre.sec - 1, start: pre.start };
        } else {
          clearInterval(interval);
          return { sec: pre.sec, start: pre.start };
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [sec]);

  return (
    <LayoutSytle>
      <TimerTitle>{taskName}</TimerTitle>
      <TimerClock>{displayTime(timer.sec)}</TimerClock>
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
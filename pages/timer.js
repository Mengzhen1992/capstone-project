import styled from "styled-components";
import LayoutSytle from "../components/LayoutStyle";
import { Title } from "./create";

export default function Timer() {
  return (
    <LayoutSytle>
      <TimerTitle>Reading</TimerTitle>
      <TimerClock>00:29:36</TimerClock>
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

import styled from "styled-components";
import DateStyle from "../components/DateStyle";
import Task from "../components/Task";
import Welcome from "../components/Welcome";

export default function Home() {
  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dates = date.getDate();
    const arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = date.getDay();
    return year + "." + month + "." + dates + " " + arr[day];
  }
  return (
    <Wrap>
      <WrapMask>
        <Welcome />
        <DateStyle>{getCurrentDate()}</DateStyle>
        <Task />
      </WrapMask>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(/images/bgImage.png);
  backdrop-filter: blur(2px);
`;

const WrapMask = styled.div`
  display: grid;
  grid-template-columns: 1.5rem auto 1.5rem;
  grid-template-rows: 2rem 2.5rem 1.5rem 1rem repeat(2, 1fr) 2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgba(253, 231, 190, 0.4);
  backdrop-filter: blur(40px);
`;

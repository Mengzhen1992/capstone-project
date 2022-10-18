import styled from "styled-components";
import DateDisplay from "../components/DateDisplay";
import Task from "../components/Task";
import Welcome from "../components/Welcome";

export default function Home() {
  function getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dates = date.getDate();
    let arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = date.getDay();
    return year + "." + month + "." + dates + " " + arr[day];
  }
  return (
    <Wrap>
      <WrapMask>
        <WelcomeStyle>
          <Welcome />
        </WelcomeStyle>
        <DateDisplayStyle>
          <DateDisplay date={getCurrentDate()} />
        </DateDisplayStyle>
        <Task />
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
  width: 100vw;
  min-height: 100vh;
  background: rgba(253, 231, 190, 0.4);
  backdrop-filter: blur(40px);
  padding-bottom: 1.5rem;
`;

const WelcomeStyle = styled.div`
  padding-top: 2rem;
  padding-left: 1.5rem;
`;

const DateDisplayStyle = styled.div`
  margin-top: 0.3rem;
  padding-left: 1.5rem;
`;

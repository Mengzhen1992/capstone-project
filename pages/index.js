import styled from "styled-components";
import DateDisplay from "../components/DateDisplay";
import Task from "../components/Task";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <Wrap>
      <WrapMask>
        <Welcome />
        <DateDisplay />
        <Task />
      </WrapMask>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(/images/bgImage.png);
  backdrop-filter: blur(2px);
`;

const WrapMask = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(253, 231, 190, 0.4);
  backdrop-filter: blur(40px);
`;

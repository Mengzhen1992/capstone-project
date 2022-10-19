import styled from "styled-components";
import uncheckButton from "../public/images/uncheck.svg";
import Image from "next/image";

const TaskItem = ({ taskName, duration }) => {
  return (
    <Item>
      <ImageContainer>
        <Image src={uncheckButton} alt="uncheck button of a task item" />
      </ImageContainer>
      <TaskName>{taskName}</TaskName>
      <TaskDuration>{duration}</TaskDuration>
    </Item>
  );
};

export default TaskItem;

const Item = styled.li`
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0.8rem 0.8rem 0.8rem 0;
  padding-left: 4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
`;

const TaskName = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.9;
`;

const TaskDuration = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
`;

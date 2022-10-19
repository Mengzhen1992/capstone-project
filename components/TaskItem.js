import styled from "styled-components";
import uncheckButton from "../public/images/uncheck.svg";
import checkedButton from "../public/images/checked.svg";
import Image from "next/image";
import { useState } from "react";

const TaskItem = ({ taskName, duration }) => {
  const [checkStatus, setCheckStatus] = useState(false);
  return (
    <Item>
      <ImageContainer onClick={() => setCheckStatus(!checkStatus)}>
        {!checkStatus ? (
          <Image src={uncheckButton} alt="uncheck button of a task item" />
        ) : (
          <Image src={checkedButton} alt="checked button of a task item" />
        )}
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

const ImageContainer = styled.button`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
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

import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";
import addButton from "../public/images/addButton.svg";
import addButtonHover from "../public/images/addButtonHover.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Task({ task, handleToggleTask, appendTask }) {
  const tasks = task.filter((item) => !item.checked);
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <TaskContainer>
      <TaskTitle>Tasks Ongoing</TaskTitle>
      <ul>
        {tasks.map(({ id, taskName, checked, duration }) => (
          <TaskItem
            key={id}
            id={id}
            taskName={taskName}
            duration={duration}
            checked={checked}
            handleToggleTask={handleToggleTask}
          />
        ))}
      </ul>
      <AddButton
        onMouseOver={() => setHover(!hover)}
        onMouseOut={() => setHover(!hover)}
        onClick={() => {
          router.push({
            pathname: "/create",
            query: appendTask,
          });
        }}
      >
        {!hover ? (
          <Image src={addButton} alt="add button for create a new task" />
        ) : (
          <Image src={addButtonHover} alt="add button hover effect" />
        )}
      </AddButton>
    </TaskContainer>
  );
}

export const TaskContainer = styled.div`
  display: relative;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 7 / span 1;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const TaskTitle = styled.h3`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
`;

const AddButton = styled.button`
  position: absolute;
  left: 50%;
  margin-left: -55.5px;
  bottom: 4.05rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-image: url(/images/addButtonClicked.svg);
  }
`;

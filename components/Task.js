import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

export default function Task({ task, handleToggleTask }) {
  const tasks = task.filter((item) => !item.checked);

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
    </TaskContainer>
  );
}

export const TaskContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 7 / span 1;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const TaskTitle = styled.li`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
`;

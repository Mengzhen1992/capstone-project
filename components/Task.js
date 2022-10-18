import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

function generateID() {
  return Math.random().toString(36).substring(2);
}
const initialTasks = [
  {
    id: generateID(),
    taskName: "Reading",
    duration: "30min",
  },
  {
    id: generateID(),
    taskName: "Capstone Project",
    duration: "6h",
  },
  {
    id: generateID(),
    taskName: "Pilates",
    duration: "45min",
  },
  {
    id: generateID(),
    taskName: "Cleaning room",
    duration: "10min",
  },
  {
    id: generateID(),
    taskName: "Update CV",
    duration: "1h",
  },
];

export default function Task() {
  return (
    <TaskWrap>
      <TaskTitle>Ongoing Tasks</TaskTitle>
      {initialTasks.map((item) => (
        <TaskItem
          key={item.id}
          taskName={item.taskName}
          duration={item.duration}
        />
      ))}
    </TaskWrap>
  );
}

const TaskWrap = styled.ul`
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 5 / span 1;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-top: 1rem;
`;

const TaskTitle = styled.li`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
`;

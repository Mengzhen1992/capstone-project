import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

const initialTasks = [
  {
    id: Math.random().toString(36).substring(2),
    taskName: "Reading",
    duration: "30min",
  },
  {
    id: Math.random().toString(36).substring(2),
    taskName: "Capstone Project",
    duration: "6h",
  },
  {
    id: Math.random().toString(36).substring(2),
    taskName: "Pilates",
    duration: "45min",
  },
  {
    id: Math.random().toString(36).substring(2),
    taskName: "Cleaning room",
    duration: "10min",
  },
  {
    id: Math.random().toString(36).substring(2),
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
  margin: 1.5rem;
  padding-bottom: 0.6rem;
`;

const TaskTitle = styled.h3`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  padding-left: 0.8rem;
  padding-top: 0.6rem;
`;

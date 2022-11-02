import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";
import addButton from "../public/images/addButton.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TaskOngoing({ tasks, handleDelete }) {
  const tasksOngoing = tasks.filter((task) => !task.isFinished);
  const router = useRouter();

  return (
    <TaskContainer>
      <TaskTitle>Tasks Ongoing</TaskTitle>
      <ul>
        {tasksOngoing.map(({ id, name, isFinished, totalTime }) => (
          <TaskItem
            key={id}
            id={id}
            name={name}
            totalTime={totalTime}
            isFinished={isFinished}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <AddButton onClick={() => router.push("/create")}>
        <Image src={addButton} alt="add button for create a new task" />
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
  grid-row: 4 / span 1;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-top: 1rem;
  margin-bottom: 4rem;
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
  bottom: 0.1rem;
  background: url(/images/addButton.svg) no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

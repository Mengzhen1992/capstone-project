import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";
import add from "../public/images/add.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TaskOngoing({ tasks, handleDelete }) {
  const tasksOngoing = tasks.filter((task) => !task.isFinished);
  const router = useRouter();

  return (
    <TaskContainer>
      <TaskTitle>Tasks Ongoing</TaskTitle>
      <ul>
        {tasksOngoing.map(
          ({
            id,
            name,
            isFinished,
            isStarted,
            isPause,
            totalTime,
            finishedTime,
          }) => (
            <TaskItem
              key={id}
              id={id}
              name={name}
              totalTime={totalTime}
              finishedTime={finishedTime}
              isFinished={isFinished}
              isStarted={isStarted}
              isPause={isPause}
              handleDelete={handleDelete}
            />
          )
        )}
      </ul>
      <AddButton onClick={() => router.push("/create")}>
        <Image src={add} alt="add button for create a new task" />
      </AddButton>
    </TaskContainer>
  );
}

export const TaskContainer = styled.div`
  display: relative;
  background: var(--color-background);
  box-shadow: var(--shadow-box);
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
  font-size: 1.2rem;
`;

const AddButton = styled.button`
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  width: 71px;
  height: 71px;
  background: var(--color-addbutton);
  box-shadow: var(--shadow-addbutton);
  border-radius: 71px;
  margin-left: -35.5px;
  bottom: 1.6rem;
  border: 2px solid var(--color-addbutton-border);
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

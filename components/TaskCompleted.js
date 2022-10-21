import { TaskTitle } from "./TaskOngoing";
import TaskItem from "./TaskItem";
import styled from "styled-components";

export default function TaskCompleted({ items, handleToggleTask }) {
  /* if (items === undefined || items === null || items.length === 0) return null; */

  const tasksAmountTotal = items.length;
  const tasksAmountCompleted = items.filter((item) => item.checked).length;
  const completedPercent =
    Math.round((tasksAmountCompleted / tasksAmountTotal) * 100) + "%";

  return (
    <TaskCompletedContainer>
      <TaskTextWrap>
        <TaskTitle>
          Tasks Completed ( {tasksAmountCompleted}/{tasksAmountTotal} )
        </TaskTitle>
        <TaskPercent>{completedPercent}</TaskPercent>
      </TaskTextWrap>
      <ul>
        {items
          .filter((item) => item.checked)
          .map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              taskName={item.taskName}
              duration={item.duration}
              checked={item.checked}
              handleToggleTask={handleToggleTask}
            />
          ))}
      </ul>
    </TaskCompletedContainer>
  );
}

const TaskCompletedContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 5 / span 1;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-top: 1rem;
`;

const TaskTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;

const TaskPercent = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: #df1e7b;
`;

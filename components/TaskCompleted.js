import { TaskTitle } from "./TaskOngoing";
import TaskItem from "./TaskItem";
import styled from "styled-components";

export default function TaskCompleted({ tasks, handleDelete }) {
  const tasksAmountTotal = tasks.length;
  const tasksAmountCompleted = tasks.filter((task) => task.isFinished).length;
  const completedPercent =
    tasksAmountTotal === 0
      ? "0%"
      : Math.round((tasksAmountCompleted / tasksAmountTotal) * 100) + "%";

  return (
    <TaskCompletedContainer>
      <TaskTextWrap>
        <TaskTitle>
          Tasks Completed ( {tasksAmountCompleted}/{tasksAmountTotal} )
        </TaskTitle>
        <TaskPercent>{completedPercent}</TaskPercent>
      </TaskTextWrap>
      <ProgressBarWrap>
        <ProgressBarLine
          style={{ width: `${completedPercent}` }}
        ></ProgressBarLine>
      </ProgressBarWrap>
      <ul>
        {tasks
          .filter((task) => task.isFinished)
          .map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.name}
              totalTime={task.totalTime}
              isFinished={task.isFinished}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
    </TaskCompletedContainer>
  );
}

const TaskCompletedContainer = styled.div`
  background: var(--color-background);
  box-shadow: var(--shadow-box);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
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
  font-size: 1.2rem;
  color: var(--color-percent);
`;

const ProgressBarWrap = styled.div`
  background: var(--color-background);
  box-shadow: var(--shadow-box);
  border-radius: 15px;
  margin: 1rem 0.8rem 1rem 0;
`;

const ProgressBarLine = styled.div`
  background: linear-gradient(
    90deg,
    rgba(199, 66, 202, 0.348) 0%,
    rgba(223, 30, 123, 0.4) 100%
  );
  border-radius: 15px;
  height: 20px;
  transition: all 0.5s cubic-bezier(0, 0.64, 0.36, 1);
`;

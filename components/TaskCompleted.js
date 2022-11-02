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
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
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
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: #df1e7b;
`;

const ProgressBarWrap = styled.div`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 1rem 0.8rem 1rem 0;
`;

const ProgressBarLine = styled.div`
  background: linear-gradient(
    90deg,
    rgba(199, 66, 202, 0.348) 0%,
    rgba(223, 30, 123, 0.4) 100%
  );
  backdrop-filter: blur(30px);
  border-radius: 15px;
  height: 20px;
  transition: all 0.5s cubic-bezier(0, 0.64, 0.36, 1);
`;

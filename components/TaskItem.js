import styled from "styled-components";

const TaskItem = ({ taskName, duration }) => {
  return (
    <Item>
      <TaskName>{taskName}</TaskName>
      <TaskDuration>{duration}</TaskDuration>
    </Item>
  );
};

export default TaskItem;

const Item = styled.li`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0.6rem;
`;

const TaskName = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  padding-left: 4rem;
  padding-top: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.9;
`;

const TaskDuration = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  padding-left: 4rem;
  padding-bottom: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
`;

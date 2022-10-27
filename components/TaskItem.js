import styled from "styled-components";
import uncheckButton from "../public/images/uncheck.svg";
import checkedButton from "../public/images/checked.svg";
import deleteButton from "../public/images/deleteButton.svg";
import playButton from "../public/images/playButton.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const TaskItem = ({
  id,
  taskName,
  duration,
  checked,
  handleToggleTask,
  handleDelete,
}) => {
  const router = useRouter();
  function durationDisplay() {
    const hourDisplay = duration / 3600 < 1 ? "" : duration / 3600;
    const minDisplay = duration % 3600 === 0 ? "" : duration / 60;
    if (hourDisplay === "" && minDisplay === "") return "0min";
    if (hourDisplay === "") return `${minDisplay}min`;
    if (minDisplay === "") return `${hourDisplay}h`;
  }
  return (
    <Item>
      <ImageCheckContainer onClick={() => handleToggleTask(id)}>
        {!checked ? (
          <Image src={uncheckButton} alt="uncheck button of a task item" />
        ) : (
          <Image src={checkedButton} alt="checked button of a task item" />
        )}
      </ImageCheckContainer>
      <TaskName>{taskName}</TaskName>
      <TaskDuration>{durationDisplay()}</TaskDuration>
      <ImagePlayContainer>
        {!checked ? (
          <Image
            src={playButton}
            onClick={() => router.push(`/timer/${id}?taskName=${taskName}`)}
            alt="play button of a task item"
          />
        ) : null}
      </ImagePlayContainer>
      <ImageDeleteContainer onClick={() => handleDelete(id)}>
        <Image src={deleteButton} alt="delete button of a task item" />
      </ImageDeleteContainer>
    </Item>
  );
};

export default TaskItem;

const Item = styled.li`
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0.8rem 0.8rem 0.8rem 0;
  padding-left: 3.2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

const ImageCheckContainer = styled.button`
  position: absolute;
  left: 1rem;
  top: 1.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ImagePlayContainer = styled.button`
  position: absolute;
  right: 3rem;
  top: 1.3rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ImageDeleteContainer = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 1.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TaskName = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.9;
`;

const TaskDuration = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
`;

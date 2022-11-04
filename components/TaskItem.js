import styled from "styled-components";
import uncheckButton from "../public/images/uncheck.svg";
import checkedButton from "../public/images/checked.svg";
import deleteButton from "../public/images/deleteButton.svg";
import playButton from "../public/images/playButton.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { displayDuration } from "../ultils";

const TaskItem = ({
  id,
  name,
  totalTime,
  finishedTime,
  isFinished,
  handleDelete,
}) => {
  const router = useRouter();

  async function handleToggleTask() {
    const data = {
      id: id,
      isFinished: !isFinished,
    };

    const JSONdata = JSON.stringify(data);
    const url = `/api/tasks/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    await fetch(url, options);
    router.push("/");
  }

  async function handlePlayButton() {
    const data = {
      id: id,
      isStarted: true,
      isPause: false,
    };

    const JSONdata = JSON.stringify(data);
    const url = `/api/tasks/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    await fetch(url, options);
    router.push(`/timer/${id}`);
  }

  return (
    <Item>
      <ImageCheckContainer onClick={handleToggleTask}>
        {!isFinished ? (
          <Image src={uncheckButton} alt="uncheck button of a task item" />
        ) : (
          <Image src={checkedButton} alt="isFinished button of a task item" />
        )}
      </ImageCheckContainer>
      <TaskName>{name}</TaskName>
      {!isFinished ? (
        <TaskDuration>
          {displayDuration(finishedTime)}/{displayDuration(totalTime)}
        </TaskDuration>
      ) : (
        <TaskDuration>{displayDuration(totalTime)}</TaskDuration>
      )}
      <ImagePlayContainer>
        {!isFinished ? (
          <Image
            src={playButton}
            onClick={handlePlayButton}
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
  transform: scale(0.9);
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

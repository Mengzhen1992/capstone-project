import styled from "styled-components";
import DateStyle from "../components/DateStyle";
import TaskCompleted from "../components/TaskCompleted";
import Welcome from "../components/Welcome";
import { useState } from "react";
import Create from "../components/create";
import TaskOngoing from "../components/TaskOngoing";

const initialTasks = [
  {
    id: generateID(),
    taskName: "Reading",
    duration: "30min",
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Capstone Project",
    duration: "6h",
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Pilates",
    duration: "45min",
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Cleaning room",
    duration: "10min",
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Update CV",
    duration: "1h",
    checked: false,
  },
];

function generateID() {
  return Math.random().toString(36).substring(2);
}

export default function Home() {
  const [task, setTask] = useState(initialTasks);
  const [page, setPage] = useState("home");

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dates = date.getDate();
    const arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = date.getDay();
    return year + "." + month + "." + dates + " " + arr[day];
  }

  function handleToggleTask(id) {
    const updatedTaskList = task.map((item) => {
      if (item.id === id) item.checked = !item.checked;
      return item;
    });
    setTask(updatedTaskList);
  }

  function appendTask(title, durationHour, durationMinute) {
    const durationHourInput = durationHour === "0" ? "" : durationHour + "h";
    const durationMinuteInput =
      durationMinute === "0" ? "" : durationMinute + "min";
    const newTasks = [
      {
        id: generateID(),
        taskName: title,
        duration: durationHourInput + durationMinuteInput,
        checked: false,
      },
      ...task,
    ];
    setTask(newTasks);
  }

  function HomePage() {
    return (
      <>
        <Welcome />
        <DateStyle>{getCurrentDate()}</DateStyle>
        <TaskCompleted task={task} handleToggleTask={handleToggleTask} />
        <TaskOngoing
          task={task}
          handleToggleTask={handleToggleTask}
          setPage={setPage}
        />
      </>
    );
  }

  return (
    <Wrap>
      <WrapMask>
        {page === "home" && <HomePage />}
        {page === "create" && (
          <Create appendTask={appendTask} setPage={setPage} />
        )}
      </WrapMask>
    </Wrap>
  );
}

export const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(/images/bgImage.png);
  backdrop-filter: blur(2px);
`;

const WrapMask = styled.div`
  display: grid;
  grid-template-columns: 1.5rem auto 1.5rem;
  grid-template-rows: 2rem 2.5rem 1.5rem 1rem auto 2rem auto 8rem;
  width: 100vw;
  min-height: 100vh;
  background: rgba(253, 231, 190, 0.4);
  backdrop-filter: blur(40px);
`;

import GlobalStyle from "../components/GlobalStyle";
import { useState } from "react";

const initialTasks = [
  {
    id: generateID(),
    taskName: "Reading",
    duration: 1800,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Capstone Project",
    duration: 21600,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Pilates",
    duration: 2700,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Cleaning room",
    duration: 600,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Update CV",
    duration: 3600,
    checked: false,
  },
];

function generateID() {
  return Math.random().toString(36).substring(2);
}

function MyApp({ Component, pageProps }) {
  const [tasks, setTasks] = useState(initialTasks);

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

  function appendTask(title, durationHour, durationMinute) {
    const newTasks = [
      {
        id: generateID(),
        taskName: title,
        duration: Number(durationHour) * 3600 + Number(durationMinute) * 60,
        checked: false,
      },
      ...tasks,
    ];
    setTasks(newTasks);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        tasks={tasks}
        appendTask={appendTask}
        setTasks={setTasks}
        getCurrentDate={getCurrentDate}
      />
    </>
  );
}

export default MyApp;

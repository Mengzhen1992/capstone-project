import GlobalStyle from "../components/GlobalStyle";
import { useState } from "react";

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

function MyApp({ Component, pageProps }) {
  const [task, setTask] = useState(initialTasks);

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

  console.log("task ", task);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        items={task}
        appendTask={appendTask}
        setTask={setTask}
      />
    </>
  );
}

export default MyApp;

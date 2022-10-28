import GlobalStyle from "../components/GlobalStyle";
import { useState } from "react";
import { getCurrentDate, generateID } from "../ultils";
import { initialTasks } from "../services/db.js";
import { getAllTasks } from "../services/taskService";

export async function getServerSideProps() {
  const tasks = await getAllTasks();

  return {
    props: { tasks: tasks },
  };
}

function MyApp({ Component, pageProps }) {
  const [tasks, setTasks] = useState(initialTasks);

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

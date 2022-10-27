import GlobalStyle from "../components/GlobalStyle";
import { useState } from "react";
import { getCurrentDate, generateID } from "../ultils";
import { initialTasks } from "../services/db.js";

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

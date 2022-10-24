import styled from "styled-components";
import DateStyle from "../components/DateStyle";
import TaskCompleted from "../components/TaskCompleted";
import Welcome from "../components/Welcome";
import TaskOngoing from "../components/TaskOngoing";
import LayoutSytle from "../components/LayoutStyle";

export default function Home({ tasks, setTasks, getCurrentDate }) {
  function handleToggleTask(id) {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === id) task.checked = !task.checked;
      return task;
    });
    setTasks(updatedTaskList);
  }

  return (
    <LayoutSytle>
      <Welcome />
      <DateStyle>{getCurrentDate()}</DateStyle>
      <TaskCompleted tasks={tasks} handleToggleTask={handleToggleTask} />
      <TaskOngoing tasks={tasks} handleToggleTask={handleToggleTask} />
    </LayoutSytle>
  );
}

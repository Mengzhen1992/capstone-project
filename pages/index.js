import styled from "styled-components";
import DateStyle from "../components/DateStyle";
import TaskCompleted from "../components/TaskCompleted";
import Welcome from "../components/Welcome";
import TaskOngoing from "../components/TaskOngoing";
import LayoutSytle from "../components/LayoutStyle";

export default function Home({ tasks, setTasks }) {
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
    const updatedTaskList = tasks.map((task) => {
      if (task.id === id) task.checked = !task.checked;
      return task;
    });
    setTasks(updatedTaskList);
  }

  function deleteTask(id) {
    const updatedDeleteTaskList = tasks.filter((task) => task.id !== id);
    setTasks(updatedDeleteTaskList);
  }

  return (
    <LayoutSytle>
      <Welcome />
      <DateStyle>{getCurrentDate()}</DateStyle>
      <TaskCompleted
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        deleteTask={deleteTask}
      />
      <TaskOngoing
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        deleteTask={deleteTask}
      />
    </LayoutSytle>
  );
}

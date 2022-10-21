import styled from "styled-components";
import DateStyle from "../components/DateStyle";
import TaskCompleted from "../components/TaskCompleted";
import Welcome from "../components/Welcome";
import TaskOngoing from "../components/TaskOngoing";
import LayoutSytle from "../components/LayoutStyle";

export default function Home({ items, setTask }) {
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
    const updatedTaskList = items.map((item) => {
      if (item.id === id) item.checked = !item.checked;
      return item;
    });
    setTask(updatedTaskList);
  }

  return (
    <LayoutSytle>
      <Welcome />
      <DateStyle>{getCurrentDate()}</DateStyle>
      <TaskCompleted items={items} handleToggleTask={handleToggleTask} />
      <TaskOngoing items={items} handleToggleTask={handleToggleTask} />
      {/* <Create appendTask={appendTask} setPage={setPage} /> */}
    </LayoutSytle>
  );
}

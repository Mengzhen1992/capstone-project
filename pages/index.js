import styled from "styled-components";
import DateStyle from "../components/DateStyle";
import TaskCompleted from "../components/TaskCompleted";
import Welcome from "../components/Welcome";
import TaskOngoing from "../components/TaskOngoing";
import LayoutSytle from "../components/LayoutStyle";
import Popup from "../components/Popup";
import { useState } from "react";

export default function Home({ tasks, setTasks, getCurrentDate }) {
  const [popup, setPopup] = useState({ show: false, id: null });
  // this will show the confirmation box
  function handleDelete(id) {
    setPopup({ show: true, id });
  }
  // this will perform the deletion and hide the confirmation Box
  function handleDeleteTrue() {
    if (popup.show && popup.id) {
      const updatedDeleteTaskList = tasks.filter(
        (task) => task.id !== popup.id
      );
      setTasks(updatedDeleteTaskList);
      setPopup({ show: false, id: null });
    }
  }
  // this will just hide the confirmation box when user clicks "Cancel"
  function handleDeleteFalse() {
    setPopup({ show: false, id: null });
  }

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
      <TaskCompleted
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleDelete={handleDelete}
      />
      <TaskOngoing
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleDelete={handleDelete}
      />
      {popup.show && (
        <Popup
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}
    </LayoutSytle>
  );
}

import DateStyle from "../components/DateStyle";
import TaskCompleted from "../components/TaskCompleted";
import Welcome from "../components/Welcome";
import TaskOngoing from "../components/TaskOngoing";
import LayoutSytle from "../components/LayoutStyle";
import DeletePopup from "../components/DeletePopup";
import { useState } from "react";
import Task from "../models/Task";
import dbConnect from "../lib/dbConnect";
import { getCurrentDate } from "../ultils";
import { useRouter } from "next/router";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  await dbConnect();

  if (session) {
    const result = await Task.find({ email: session.user.email });

    const tasks = result.map((item) => ({
      id: item.id,
      name: item.name,
      totalTime: item.totalTime,
      finishedTime: item.finishedTime,
      isFinished: item.isFinished,
    }));

    return { props: { tasks: tasks } };
  }
  return {
    redirect: {
      destination: "/onboarding",
    },
  };
}

export default function Home({ tasks }) {
  const router = useRouter();
  const [popup, setPopup] = useState({ show: false, id: null });

  // this will show the confirmation box
  function handleDelete(id) {
    setPopup({ show: true, id });
  }
  // this will perform the deletion and hide the confirmation Box
  async function onDelete() {
    if (popup.show && popup.id) {
      const id = popup.id;
      const data = {
        id: id,
      };
      const JSONdata = JSON.stringify(data);
      const url = `/api/tasks/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      await fetch(url, options);
      setPopup({ show: false, id: null });
      router.push("/");
    }
  }
  // this will just hide the confirmation box when user clicks "Cancel"
  function onCancelDelete() {
    setPopup({ show: false, id: null });
  }

  return (
    <LayoutSytle>
      <Welcome />
      <DateStyle>{getCurrentDate()}</DateStyle>
      <TaskCompleted tasks={tasks} handleDelete={handleDelete} />
      <TaskOngoing tasks={tasks} handleDelete={handleDelete} />
      {popup.show && (
        <DeletePopup onDelete={onDelete} onCancelDelete={onCancelDelete} />
      )}
    </LayoutSytle>
  );
}

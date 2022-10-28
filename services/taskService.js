import dbConnect from "../lib/dbConnect";
import Task from "../models/Task";

export async function getAllTasks() {
  await dbConnect();

  const tasks = await Task.find();

  const sanitizedTasks = tasks.map((item) => ({
    id: item.id,
    taskName: item.taskName,
    duration: item.duration,
    checked: item.checked,
  }));

  return sanitizedTasks;
}

export async function getTaskById(id) {
  await dbConnect();

  const item = await Task.findById(id);

  const sanitizedTask = {
    id: item.id,
    taskName: item.taskName,
    duration: item.duration,
    checked: item.checked,
  };

  return sanitizedTask;
}

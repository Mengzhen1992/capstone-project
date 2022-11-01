import dbConnect from "../lib/dbConnect";
import Task from "../models/Task";

export async function find() {
  const tasks = await Task.find();
  console.log(tasks);
}

export async function getAllTasks() {
  await dbConnect();

  const tasks = await Task.find();

  const sanitizedTasks = tasks.map((item) => ({
    id: item.id,
    name: item.name,
    totalTime: item.totalTime,
    isFinished: item.isFinished,
  }));

  return sanitizedTasks;
}

export async function getTaskById(id) {
  await dbConnect();

  const item = await Task.findById(id);

  const sanitizedTask = {
    id: item.id,
    name: item.name,
    totalTime: item.totalTime,
    isFinished: item.isFinished,
  };

  return sanitizedTask;
}

export async function updateTask(obj) {
  await dbConnect();

  const item = await Task.updateOne(obj);

  const sanitizedTask = {
    id: item.id,
    name: item.name,
    totalTime: item.totalTime,
    isFinished: false,
  };
  return sanitizedTask;
}

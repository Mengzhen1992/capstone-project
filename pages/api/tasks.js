import dbConnect from "../../lib/dbConnect";
import Task from "../../models/Task";
import { getAllTasks } from "../../services/taskService";

export default async function handler(request, response) {
  await dbConnect();
  const id = request.query.id;

  switch (request.method) {
    case "GET":
      const tasks = await getAllTasks();
      return response.status(200).json(tasks);

    case "POST":
      const postData = JSON.parse(request.body);
      const newTask = await Task.create(postData);

      return response
        .status(201)
        .json({ message: "Data saved", createdId: newTask.id });

    case "DELETE":
      await Task.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ message: "Entry deleted", deletedId: id });
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}

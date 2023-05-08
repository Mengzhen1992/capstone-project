import dbConnect from "../../../lib/dbConnect";
import Task from "../../../models/Task";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "Unanthorized" });

  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find({ email: session.user.email });
        //find all the data in our database
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const task = await Task.create(req.body);
        //create a new model in the database
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: { type: String, required: true },
  totalTime: { type: Number, required: true },
  finishedTime: { type: Number, required: true, default: 0 },
  isStarted: { type: Boolean, required: true, default: false },
  isFinished: { type: Boolean, required: true, default: false },
  isPause: { type: Boolean, required: true, default: false },
  ticoUser: { type: String, required: true },
  email: { type: String, required: true },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;

import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  duration: { type: Number, required: true },
  checked: { type: Boolean, required: true },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;

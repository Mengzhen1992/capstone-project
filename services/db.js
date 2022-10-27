import { generateID } from "../ultils";

const initialTasks = [
  {
    id: generateID(),
    taskName: "Reading",
    duration: 1800,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Capstone Project",
    duration: 21600,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Pilates",
    duration: 2700,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Cleaning room",
    duration: 600,
    checked: false,
  },
  {
    id: generateID(),
    taskName: "Update CV",
    duration: 3600,
    checked: false,
  },
];

export { initialTasks };

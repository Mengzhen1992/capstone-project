import { generateID } from "../ultils";

const initialTasks = [
  {
    id: generateID(),
    name: "Reading",
    totalTime: 1800,
    isFinished: false,
  },
  {
    id: generateID(),
    name: "Capstone Project",
    totalTime: 21600,
    isFinished: false,
  },
  {
    id: generateID(),
    name: "Pilates",
    totalTime: 2700,
    isFinished: false,
  },
  {
    id: generateID(),
    name: "Cleaning room",
    totalTime: 600,
    isFinished: false,
  },
  {
    id: generateID(),
    name: "Update CV",
    totalTime: 3600,
    isFinished: false,
  },
];

export { initialTasks };

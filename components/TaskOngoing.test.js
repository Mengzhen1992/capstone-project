import { render, screen } from "@testing-library/react";
import TaskOngoing from "./TaskOngoing";
import userEvent from "@testing-library/user-event";

const ongoingTasksList = [
  {
    id: "637141361773dc2223fef52c",
    name: "Reading",
    start: "2022-11-13T17:22:00.000+00:00",
    end: "2022-11-13T18:22:00.000+00:00",
    totalTime: 3600,
    finishedTime: 0,
    isStarted: false,
    isFinished: false,
    isPause: false,
    ticoUser: "Mengzhen Liao",
    email: "liaomengzhen@gmail.com",
  },
  {
    id: "637141361773dc2223fef72c",
    name: "Test",
    start: "2022-11-13T19:10:00.000+00:00",
    end: "2022-11-13T21:10:00.000+00:00",
    totalTime: 7200,
    finishedTime: 0,
    isStarted: false,
    isFinished: false,
    isPause: false,
    ticoUser: "Mengzhen Liao",
    email: "liaomengzhen@gmail.com",
  },
  {
    id: "637141361773dc2223fef82c",
    name: "Pilates",
    start: "2022-11-14T23:10:00.000+00:00",
    end: "2022-11-14T23:40:00.000+00:00",
    totalTime: 1800,
    finishedTime: 0,
    isStarted: false,
    isFinished: false,
    isPause: false,
    ticoUser: "Mengzhen Liao",
    email: "liaomengzhen@gmail.com",
  },
];

describe("TaskOngoing", () => {
  it("renders all ongoing tasks", async () => {
    render(<TaskOngoing tasks={ongoingTasksList} />);

    const ongoingTasks = await screen.getAllByRole("listitem");
    const taskPilates = screen.getByText("Pilates");
    const taskReading = screen.getByText("Reading");
    const taskTest = screen.getByText("Test");

    expect(ongoingTasks).toHaveLength(3);

    expect(taskPilates).toBeInTheDocument();
    expect(taskReading).toBeInTheDocument();
    expect(taskTest).toBeInTheDocument();
  });

  it("calls callback, when clicking item delete button", async () => {
    const deleteCallback = jest.fn();
    render(
      <TaskOngoing tasks={ongoingTasksList} handleDelete={deleteCallback} />
    );

    const itemDelete = screen.getAllByRole("button")[2];

    await userEvent.click(itemDelete);
    expect(deleteCallback).toHaveBeenCalledTimes(1);
  });
});

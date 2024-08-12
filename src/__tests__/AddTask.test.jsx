import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import AddTask from "@/components/app-context/AddTask";
import TaskList from "@/components/app-context/TaskList";
import ContextApp from "@/app/ctx-app/page.tsx";

import "@testing-library/jest-dom";

test("Check add task button is in DOM", async () => {
  render(<ContextApp />);

  const addTaskBtn = screen.getByTestId("task-btn");
  const input = screen.getByTestId("task-input");

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: "JEST",
      },
    });

    fireEvent.click(addTaskBtn);
  });

  render(<TaskList />);

  const newestTask = await screen.getByText("JEST");

  
  expect(newestTask).toBeInTheDocument();
  console.log("Newest task is:", newestTask);

  // expect(addTaskBtn && input).toBeInTheDocument();
});

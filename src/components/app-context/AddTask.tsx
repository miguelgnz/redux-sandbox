"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useTaskContext } from "@/context/TaskContext";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");

  const { addTask } = useTaskContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
      }}
    >
      <Input
        data-testid="task-input"
        name="title"
        required
        placeholder="Enter a new task"
        value={taskTitle}
        onChange={(event) => {
          setTaskTitle(event.target.value);
        }}
        />
      <Button
        data-testid="task-btn"
        variant="solid"
        color="secondary"
        disabled={taskTitle === ""}
        onClick={() => {
          addTask(taskTitle);
          setTaskTitle("");
        }}
      >
        Add Task
      </Button>
    </div>
  );
}

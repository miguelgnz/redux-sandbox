"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/features/task-slice";
import { AppDispatch } from "@/redux/store";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");

  const dispatch = useDispatch<AppDispatch>();

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
        name="title"
        required
        placeholder="Enter a new task"
        value={taskTitle}
        onChange={(event) => {
          setTaskTitle(event.target.value);
        }}
      />
      <Button
        variant="solid"
        color="secondary"
        onClick={() => {
          dispatch(
            addTask({
              id: Math.floor(Math.random() * 100).toString(),
              title: taskTitle,
              isCompleted: false,
            })
          );
          setTaskTitle("");
        }}
      >
        Add Task
      </Button>
    </div>
  );
}

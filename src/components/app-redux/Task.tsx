"use client";

import { deleteTask, completeTask } from "@/redux/features/task-slice";
import { AppDispatch } from "@/redux/store";
import { TaskType } from "@/utils/types";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";

export default function Task({ id, title, isCompleted }: TaskType) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        border: "0.5px dotted",
        borderRadius: "16px",
        padding: "12px",
        background: isCompleted ? '#9bf2b2' : '#b3c7c7'
      }}
    >
      <h2 className="text-lg font-bold">{title.toUpperCase()}</h2>
      <h3>Status: {`${isCompleted ? "Completed" : "Pending"}`}</h3>
      <div style={{display: 'flex', gap: '6px'}}>
        <Button
          variant="bordered"
          size="lg"
          color="primary"
          onClick={() => {
            dispatch(completeTask(id));
          }}
        >
          Complete
        </Button>
        <Button
          variant="solid"
          size="lg"
          color="danger"
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

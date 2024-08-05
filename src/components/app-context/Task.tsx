"use client";

import { TaskType } from "@/utils/types";
import { Button } from "@nextui-org/react";
import { useTaskContext } from "@/context/TaskContext";

export default function Task({ id, title, isCompleted }: TaskType) {
  const { deleteTask, completeTask } = useTaskContext();
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
        background: isCompleted ? "#9bf2b2" : "#b3c7c7",
      }}
    >
      <h2 className="text-lg font-bold">{title.toUpperCase()}</h2>
      <h3>Status: {`${isCompleted ? "Completed" : "Pending"}`}</h3>
      <div style={{ display: "flex", gap: "6px" }}>
        <Button
          variant="bordered"
          size="lg"
          color="primary"
          onClick={() => {
            completeTask(id);
          }}
        >
          Complete
        </Button>
        <Button
          variant="solid"
          size="lg"
          color="danger"
          onClick={() => {
            deleteTask(id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

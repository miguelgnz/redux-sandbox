"use client";

import { useTaskContext } from "@/context/TaskContext";
import Task from '@/components/app-context/Task'

export default function TaskList() {
  const { taskList } = useTaskContext();
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {taskList.map((task, index) => { 
        return (
            <Task 
            key={index}
            id={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            />
        )
       })}
    </div>
  );
}

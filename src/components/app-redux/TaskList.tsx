"use client";

import { useReduxSelector } from "@/redux/store";
import Task from "@/components/app-redux/Task";

export default function TaskList() {
  const allTasks = useReduxSelector((state) => {
    return state.taskReducer.value;
  });

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
    }}>
      {allTasks.map((task, index) => {
        return (
          <Task
            key={index}
            id={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
          />
        );
      })}
    </div>
  );
}

"use client";

import { TaskType } from "@/utils/types";
import { createContext, useContext, useState } from "react";

interface TaskContextProps {
  taskList: TaskType[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

const ctx: TaskContextProps = {
  taskList: [],
  addTask: () => {},
  deleteTask: () => {},
  completeTask: () => {},
};

export const TaskContext = createContext(ctx);

export const useTaskContext = () => useContext(TaskContext);

export const TaskContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const addTask = (title: string) => {
    setTaskList((prevState) => {
      return [
        ...prevState,
        {
          id: Math.floor(Math.random() * 100).toString(),
          title: title,
          isCompleted: false,
        },
      ];
    });
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const completeTask = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        return task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task;
      })
    );
  };

  const value = {
    taskList,
    addTask,
    deleteTask,
    completeTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

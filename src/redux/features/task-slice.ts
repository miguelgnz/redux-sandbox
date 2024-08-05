import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "@/utils/types";

interface InitialState {
  value: TaskType[];
}

const initialState = {
  value: [] as TaskType[],
} as InitialState;

export const task = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.value = [
        ...state.value,
        {
          id: action.payload.id,
          title: action.payload.title,
          isCompleted: action.payload.isCompleted,
        },
      ];
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.map((task) => {
        return task.id === action.payload
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task;
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, completeTask, deleteTask } = task.actions;
export default task.reducer;

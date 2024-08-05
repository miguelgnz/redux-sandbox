import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import counterReducer from "@/redux/features/counter-slice";
import taskReducer from '@/redux/features/task-slice'
import characterReducer from '@/redux/features/characters-slice'

export const store = configureStore({
  reducer: {
    counterReducer,
    taskReducer,
    characterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector

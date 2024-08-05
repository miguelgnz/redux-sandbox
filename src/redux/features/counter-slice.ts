import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      //increment by 1
      state.value += 1;
    },
    decrement: (state) => {
      //increment by 1
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;

"use client";

import { useReduxSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { increment, decrement } from "@/redux/features/counter-slice";

import { Button } from "@nextui-org/react";

export default function ReduxCounter() {
  const dispatch = useDispatch();

  const counter = useReduxSelector((state) => {
    return state.counterReducer.value;
  });

  const onClickIncrement = () => {
    dispatch(increment());
  };
  const onClickDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Redux Counter POC</h1>
      <h2>Redux counter {counter}</h2>
      <Button variant="bordered" color="secondary" onClick={onClickIncrement}>
        Increment
      </Button>
      <Button variant="solid" color="primary" onClick={onClickDecrement}>
        Decrement
      </Button>
    </div>
  );
}

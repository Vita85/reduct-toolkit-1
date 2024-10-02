import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
  decrementBy,
  decrementPrompt,
  incrementPrompt,
} from "../redux/counter/counterSlice"

const CounterComponent = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={() => dispatch(increment())}>INCREMENT 1</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT 1</button>
      <br />
      <button onClick={() => dispatch(incrementBy(100))}>INCREMENT 100</button>
      <button onClick={() => dispatch(decrementBy(100))}>DECREMENT 100</button>
      <br />
      <button onClick={() => dispatch(incrementPrompt(Number(prompt())))}>add</button>
      <button onClick={() => dispatch(decrementPrompt(Number(prompt())))}>get</button>
    </div>
  );
};

export default CounterComponent;
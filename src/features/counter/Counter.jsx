import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.Counter.count);
  const token = useSelector((state) => state.Counter.token);
  const dispatch = useDispatch();
  return (
    <>
      <div className="counterdiv">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <span>Count: {count}</span>
        <span>token: {token}</span>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          by amount
        </button>
      </div>
    </>
  );
};
export default Counter;

import React, { useContext } from "react";
import { useSelector } from "react-redux";

const Coin = () => {
  const count = useSelector((state) => state.Counter.count);
  const token = useSelector((state) => state.Counter.token);

  return (
    <>
      <span>Count: {count}</span>
      <span>token Again: {token}</span>
    </>
  );
};
export default Coin;

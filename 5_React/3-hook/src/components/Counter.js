import { useState, useEffect } from "react";
import Btn from "./Btn";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always~~");

  useEffect(() => {
    console.log("useEffect!");
  }, []);

  useEffect(() => {
    console.log("counter change~~");
  }, [counter]);

  useEffect(() => {});

  return (
    <>
      <h1>Total clicks : {counter} </h1>
      <Btn click={plus} text="+1" />
      <Btn click={minus} text="-1" />
    </>
  );
};
export default Counter;

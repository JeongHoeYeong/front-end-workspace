import { useState, useEffect } from "react";
import Btn from "./Btn";

const Converter = () => {
  const [number, setNumber] = useState("");
  const [bool, setBool] = useState(false);
  const [text, setText] = useState("Minutes => Hours");

  const change = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);
  return (
    <>
      <h1>Time Converter</h1>
      Minutes :
      <input
        type="number"
        placeholder="Minutes"
        value={bool ? number * 60 : number}
        onChange={change}
        disabled={bool}
      />
      <br />
      Hours :
      <input
        type="number"
        placeholder="Hours"
        onChange={change}
        disabled={!bool}
        value={bool ? number : Math.floor(number / 60)}
      />
      <br />
      <Btn text="Reset" click={reset} />
      <Btn text={text} click={invert} />
    </>
  );
};

export default Converter;

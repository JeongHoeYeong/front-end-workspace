import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const setCount = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Total Clicks : {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;

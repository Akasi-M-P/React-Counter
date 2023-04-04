import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>FunctionCounter</h1>
      <div>
        <h2>{count}</h2>
      </div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
export default FunctionCounter;

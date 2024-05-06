import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);
  function increaseCount() {
    setCount(count + increment);
  }

  function decreaseCount() {
    setCount(count - increment);
  }

  function increaseIncrement() {
    setIncrement(increment + 2);
  }
  return (
    <div>
      <h1>Count Value is: {count}</h1>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>

      <h2>Incrementing the value by: {increment}</h2>
      <button onClick={increaseIncrement}>Increment</button>
    </div>
  );
};

export default Counter;

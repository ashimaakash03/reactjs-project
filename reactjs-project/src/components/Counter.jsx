import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count-1);
  }
  return (
    <div>
      <h1>Count Value is: {count}</h1>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  );
};

export default Counter;

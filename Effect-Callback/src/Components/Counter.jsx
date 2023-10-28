import { useEffect, useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  //useEffect Syntax: useeffect(callback, [dependencies])
  //will run every update
  useEffect(() => console.log("Count is ${count}"));
  return (
    <>
      <h2>Counter: </h2>
      <p>{count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Add 1
      </button>
    </>
  );
}

export default Counter;

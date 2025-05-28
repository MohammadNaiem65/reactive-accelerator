import { useEffect, useState } from "react";

function StaleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // This 'count' will be whatever 'count' was when this useEffect ran (e.g., 0)
      // and won't get the latest value from subsequent renders.
      console.log("Count inside interval:", count);
      setCount(count + 1);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount
  // and 'count' is captured as 0 in the closure.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default StaleCounter;

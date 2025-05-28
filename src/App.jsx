import { useEffect, useState } from "react";
import getData from "./utils/getData";

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    let isRelevant = true;

    async function fetchData() {
      try {
        const data = await getData(count);
        if (isRelevant) {
          setResult(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    return () => {
      isRelevant = false;
    };
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>

      {result && <p>{result}</p>}

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;

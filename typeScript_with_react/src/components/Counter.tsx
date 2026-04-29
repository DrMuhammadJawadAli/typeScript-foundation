import { useState } from "react";
export default function Counter() {
  const [Count, setCount] = useState<number>(0);
  return (
    <>
      // order one phone
      <div>
        <p>Iphone ordered Single: {Count}</p>
        <button onClick={() => setCount((c) => c + 1)}> Order one More</button>
      </div>
      // order 100 phone
      <div>
        <p>Iphone Ordered 100 </p>
        <button onClick={() => setCount((c) => c + 100)}>
          order 100 Phones
        </button>
      </div>
      // i phone order your custome number with input
      <div>
        <p>Custom number {Count}</p>
        <input
          type="number"
          value={Count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + Count)}>
          Order Custom Number {Count}
        </button>
      </div>
    </>
  );
}

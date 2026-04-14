"use client";
import { useState } from "react";

function Example1() {
  const [count, setCount] = useState("1");

  return (
    <div>
      <h1>Count: {count}</h1>

      <button
        className="bg-white p-2 text-black"
        onClick={() => setCount(count + 5)}
      >
        Increase
      </button>
    </div>
  );
}

export default Example1;

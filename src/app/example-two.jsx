"use client";
import { useState } from "react";

function Example2() {
  const [name, setName] = useState("mazhar");

  return (
    <div>
      <input
        placeholder="enter the text"
        className="mt-10 input border m-7"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>
    </div>
  );
}

export default Example2;

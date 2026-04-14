"use client";
import { useState } from "react";

function Example3() {
  const [isOn, setIsOn] = useState(false);
  //   const [liked, setLiked] = useState(false);
  console.log(isOn ? "light on" : "light off");
  return (
    <div>
      {/* <h1>{isOn ? "Light ON" : "Light OFF"}</h1> */}

      <button
        id=""
        className="p-2 bg-amber-200 text-black"
        onClick={() => setIsOn(!isOn)}
      >
        Switch
      </button>
    </div>
  );
}

export default Example3;

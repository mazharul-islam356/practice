import React from "react";

const AdSection = () => {
  return (
    <div className="max-w-11/12 mx-auto pt-20">
      <div className="bg-slate-800 p-20 rounded-2xl flex flex-col justify-center  items-center space-y-5">
        <h1 className="text-4xl text-white font-semibold lora text-center">
          Ready to elavete your learning?
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aliquid impedit unde voluptates quidem
        </p>
        <button className="bg-teal-700 text-white px-5 py-3 rounded-lg">
          Join now
        </button>
      </div>
    </div>
  );
};

export default AdSection;

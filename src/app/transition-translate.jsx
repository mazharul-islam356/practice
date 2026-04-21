import React from "react";

const TransitionAndTranslate = () => {
  return (
    <div className="m-20 dark:bg-black">
      <div className="h-40 w-40 p-2 flex justify-center items-center border-2">
        <div className="h-40 w-40 transform  bg-amber-500 dark:bg-red-500 transition-colors border border-amber-500 "></div>
      </div>
      <h1 className="text-xl font-semibold primary-color">hello world</h1>
    </div>
  );
};

export default TransitionAndTranslate;

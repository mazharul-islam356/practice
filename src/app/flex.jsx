import React from "react";

const Flex = () => {
  return (
    <div>
      <div className="border border-gray-600 p-4 m-5 flex overflow-visible">
        <div className="w-52 bg-red-500 shadow h-32 rounded hidden p-4 mb-4 z-10">
          Card 1
        </div>
        <div className="w-52 bg-green-500 shadow rounded h-32 p-4 mb-4">
          Card 2
        </div>
        <div className="w-52 bg-blue-500 shadow rounded h-32 p-4 mb-4">
          Card 3
        </div>
        <div className="w-52 bg-teal-500 shadow rounded h-32 p-4 mb-4">
          Card 4
        </div>
        <div className="w-52 bg-teal-500 shadow rounded h-32 p-4 mb-4">
          Card 4
        </div>
        <div className="w-52 bg-teal-500 shadow rounded h-32 p-4 mb-4">
          Card 4
        </div>
        <div className="w-52 bg-teal-500 shadow rounded h-32 p-4 mb-4">
          Card 4
        </div>
        <div className="w-52 bg-teal-500 shadow rounded h-32 p-4 mb-4">
          Card 4
        </div>
      </div>
    </div>
  );
};

export default Flex;

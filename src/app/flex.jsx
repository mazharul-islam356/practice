import React from "react";

const Flex = () => {
  return (
    <div>
      {/* navbar */}
      <div class="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
        <h1 class="text-xl font-bold">MyShop</h1>

        <ul class="flex gap-6">
          <li class="hover:text-yellow-400 cursor-pointer">Home</li>
          <li class="hover:text-yellow-400 cursor-pointer">Shop</li>
          <li class="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        <button class="bg-yellow-400 text-black px-4 py-2 rounded">
          Login
        </button>
      </div>

      {/* card row wrap */}

      {/* <div class="flex flex-wrap gap-6 p-6">
        <div class="w-64 bg-gray-500 shadow rounded p-4">Card 1</div>
        <div class="w-64 bg-gray-500 shadow rounded p-4">Card 2</div>
        <div class="w-64 bg-gray-500 shadow rounded p-4">Card 3</div>
        <div class="w-64 bg-gray-500 shadow rounded p-4">Card 4</div>
      </div> */}

      {/* grid system */}

      {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div class="bg-gray-500 p-4 rounded shadow">Product 1</div>
        <div class="bg-gray-500 p-4 rounded shadow">Product 2</div>
        <div class="bg-gray-500 p-4 rounded shadow">Product 3</div>
        <div class="bg-gray-500 p-4 rounded shadow">Product 4</div>
      </div> */}
    </div>
  );
};

export default Flex;

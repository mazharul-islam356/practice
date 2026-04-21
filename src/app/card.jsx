import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="m-20 ">
      {/* ----image */}
      {/* ----heading */}
      {/* ----description (optional) */}
      {/* ----price */}
      {/* ----button */}

      <div className="border border-gray-300 h-100 w-72 shadow rounded-xl">
        <Image
          className="shadow m-4 aspect-2/2 rounded-xl object-cover"
          width={250}
          height={250}
          src="/clothes-laptop-bed-arrangement-high-angle_23-2149726124.avif"
          alt="product-one"
        />
        {/* card info */}
        <div className="m-4 group">
          <h2 className="text-lg font-medium ">Samsung galaxy s24 ultra</h2>
          <p className="font-bold text-2xl ">$1200</p>
          <button
            disabled
            className="bg-blue-800 text-white  active:bg-amber-500 px-4 py-1 rounded-sm mt-2 container mx-auto group-active:bg-amber-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

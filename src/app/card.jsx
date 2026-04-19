import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="m-20">
      {/* card design */}

      {/* ----image */}
      {/* ----heading */}
      {/* ----description (optional) */}
      {/* ----price */}
      {/* ----button */}

      <div className="border border-gray-300 h-100 w-72 shadow rounded-xl">
        <Image
          className="shadow m-4 rounded-xl"
          width={250}
          height={250}
          src="/Samsung-S24-Ultra-Titanium-Grey (1).jpg"
          alt="product-one"
        />
        {/* card info */}
        <div className="m-4">
          <h2 className="text-lg font-medium ">Samsung galaxy s24 ultra</h2>
          <p className="font-bold text-2xl ">$1200</p>
          <button className="bg-gray-800 text-white  active:bg-amber-500 px-4 py-1 rounded-sm mt-2 container mx-auto hover:bg-gray-500">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

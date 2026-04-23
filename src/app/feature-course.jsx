import Image from "next/image";
import React from "react";

const FeatureCourse = () => {
  return (
    <div className="max-w-11/12 mx-auto pt-20">
      <div className="flex justify-between">
        {/* heding */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold lora">
            Explore feature course
          </h1>
          <p className="poppins text-gray-700">
            Lorem ipsum dolor sit amet dolor.
          </p>
        </div>
        {/* categories */}
        <div className="self-end">
          <p className="underline text-teal-700 font-semibold text-sm poppins">
            Browser all categories
          </p>
        </div>
      </div>

      {/* card */}

      <div className="grid grid-cols-2 md:grid-cols-3 mt-4 md:gap-20 gap-10">
        {/* card 01 */}
        <div className="border border-gray-300 h-100 md:h-115 md:w-96 w-full shadow rounded-xl">
          <Image
            className="object-cover w-full"
            width={500}
            height={250}
            src="/clothes-laptop-bed-arrangement-high-angle_23-2149726124.avif"
            alt="product-one"
          />
          {/* card info */}
          <div className="m-4 group space-y-2">
            {/* categories */}
            <p className="bg-teal-300 px-3 w-fit text-teal-800 font-medium text-sm mb-1">
              Mathmetics
            </p>
            <h2 className="text-2xl md:text-3xl lora font-semibold ">
              Advance Mathmetics
            </h2>
            <p className="poppins text-gray-700">
              Lorem ipsum dolor sit sit amet consectetur adipisicing elit
            </p>

            <button
              disabled
              className="bg-black text-white w-full py-2 rounded-sm mt-2"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="border border-gray-300 h-100 md:h-115 md:w-96 w-full shadow rounded-xl">
          <Image
            className="object-cover w-full"
            width={500}
            height={250}
            src="/clothes-laptop-bed-arrangement-high-angle_23-2149726124.avif"
            alt="product-one"
          />
          {/* card info */}
          <div className="m-4 group space-y-2">
            {/* categories */}
            <p className="bg-teal-300 px-3 w-fit text-teal-800 font-medium text-sm mb-1">
              Mathmetics
            </p>
            <h2 className="text-2xl md:text-3xl lora font-semibold ">
              Advance Mathmetics
            </h2>
            <p className="poppins text-gray-700">
              Lorem ipsum dolor sit sit amet consectetur adipisicing elit
            </p>

            <button
              disabled
              className="bg-black text-white w-full py-2 rounded-sm mt-2"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="border border-gray-300 h-100 md:h-115 md:w-96 w-full shadow rounded-xl">
          <Image
            className="object-cover w-full"
            width={500}
            height={250}
            src="/clothes-laptop-bed-arrangement-high-angle_23-2149726124.avif"
            alt="product-one"
          />
          {/* card info */}
          <div className="m-4 group space-y-2">
            {/* categories */}
            <p className="bg-teal-300 px-3 w-fit text-teal-800 font-medium text-sm mb-1">
              Mathmetics
            </p>
            <h2 className="text-2xl md:text-3xl lora font-semibold ">
              Advance Mathmetics
            </h2>
            <p className="poppins text-gray-700">
              Lorem ipsum dolor sit sit amet consectetur adipisicing elit
            </p>

            <button
              disabled
              className="bg-black text-white w-full py-2 rounded-sm mt-2"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourse;

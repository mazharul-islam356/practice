import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center space-y-5 pt-20">
        <h1 className="text-5xl  font-semibold lora">
          Master Your Studies with Clarity
        </h1>
        <p className="text-lg text-gray-600 poppins">
          Achieve academic excellence through structured learning paths,
          expert-led <br /> modules, and a community dedicated to deep
          understanding.
        </p>

        <div className="space-x-2 poppins">
          <button className="bg-black rounded-sm text-white p-4 px-6">
            Get Started
          </button>
          <button className="p-4 border rounded-sm text-teal-600 border-teal-600">
            View Courses
          </button>
        </div>
      </div>

      {/* image */}

      <div className="max-w-11/12  mx-auto mt-10">
        <div className="relative w-full h-96">
          <Image
            src="/student-portal.jpg"
            alt="hero-image"
            fill
            className="object-cover rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

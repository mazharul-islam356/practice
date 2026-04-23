import { Book } from "lucide";
import React from "react";
import { BiBook } from "react-icons/bi";

const CardSection = () => {
  return (
    <div className="max-w-11/12 mx-auto space-y-5 pt-20">
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-5">
        {/* card 01 */}
        <div className="md:w-100 w-full h-60 bg-white p-6 rounded-md space-y-3">
          <div className="bg-teal-600 w-fit p-2 rounded-md">
            <BiBook size={23} color="white" />
          </div>

          <h1 className="text-2xl font-semibold lora">Interective lesson</h1>
          <p className="text-gray-600 poppins">
            Lorem Debitis, saepe. ipsum dolor sit amet consectetur adipisicing
            elit. Debitis, saepe. ipsum dolor sit amet consectetur adipisicing
            elit. Debitis, saepe.
          </p>
        </div>
        {/* card 02 */}
        <div className="md:w-100 w-full h-60 bg-white p-6 rounded-md space-y-3">
          <div className="bg-teal-600 w-fit p-2 rounded-md">
            <BiBook size={23} color="white" />
          </div>

          <h1 className="text-2xl font-semibold lora">Interective lesson</h1>
          <p className="text-gray-600 poppins">
            Lorem Debitis, saepe. ipsum dolor sit amet consectetur adipisicing
            elit. Debitis, saepe. ipsum dolor sit amet consectetur adipisicing
            elit. Debitis, saepe.
          </p>
        </div>
        {/* card 03 */}
        <div className="md:w-100 w-full h-60 bg-white p-6 rounded-md space-y-3">
          <div className="bg-teal-600 w-fit p-2 rounded-md">
            <BiBook size={23} color="white" />
          </div>

          <h1 className="text-2xl font-semibold lora">Interective lesson</h1>
          <p className="text-gray-600 poppins">
            Lorem Debitis, saepe. ipsum dolor sit amet consectetur adipisicing
            elit. Debitis, saepe. ipsum dolor sit amet consectetur adipisicing
            elit. Debitis, saepe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

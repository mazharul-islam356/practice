"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="shadow pb-2">
      <div className="max-w-11/12 mx-auto ">
        <nav className="flex mt-5 justify-between pb-2 ">
          {/* logo */}
          <div className="font-semibold text-black text-xl">
            AcademiaClarity
          </div>

          {/* list */}
          <div className="md:block hidden">
            <ul className="flex gap-10">
              <li className="text-teal-500 font-semibold underline">Courses</li>
              <li className="hover:text-teal-500 font-semibold ">Program us</li>
              <li className="hover:text-teal-500 font-semibold ">Resources</li>
              <li className="hover:text-teal-500 font-semibold ">About</li>
            </ul>
          </div>

          {/* button */}
          <div>
            <button className="bg-gray-900 poppins py-1 px-4 text-white rounded-sm py-1 hidden md:block">
              Student Portal
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden block"
            >
              <BiMenu size={30} />
            </button>

            {/* Mobile Menu */}
            {isOpen && (
              <>
                {/* Overlay */}
                <div
                  className="fixed inset-0 bg-black/40 z-40"
                  onClick={() => setIsOpen(false)}
                ></div>

                {/* Sidebar */}
                <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300">
                  <div className="">
                    <ul className="p-4 space-y-4">
                      <li className="text-teal-500 font-semibold underline">
                        Courses
                      </li>
                      <li className="hover:text-teal-500 font-semibold ">
                        Program us
                      </li>
                      <li className="hover:text-teal-500 font-semibold ">
                        Resources
                      </li>
                      <li className="hover:text-teal-500 font-semibold ">
                        About
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav className="m-5 flex justify-between shadow pb-2 px-4">
      {/* logo */}
      <div className="font-semibold text-blue-600 text-xl">LOGO</div>

      {/* list */}
      <div className="md:block hidden">
        <ul className="flex gap-10">
          <li className="hover:text-blue-500">Home</li>
          <li className="hover:text-blue-500">About us</li>
          <li className="hover:text-blue-500">Service</li>
          <li className="hover:text-blue-500">Contact</li>
        </ul>
      </div>

      {/* button */}
      <div>
        <button className="bg-blue-500 px-4 text-white rounded-sm py-1 hidden md:block">
          Register
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden block">
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
              <div className="p-4 space-y-4">
                <a href="#" className="block text-gray-700 hover:text-black">
                  Home
                </a>
                <a href="#" className="block text-gray-700 hover:text-black">
                  About
                </a>
                <a href="#" className="block text-gray-700 hover:text-black">
                  Services
                </a>
                <a href="#" className="block text-gray-700 hover:text-black">
                  Contact
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

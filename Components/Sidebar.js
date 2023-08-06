import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-24 bg-gray-800 text-white transform transition-transform ease-in-out duration-300 md:w-56  md:space-y-8  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-0 right-0 m-6 text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="p-4 text-xl  md:text-3xl md:justify-center md:text-center   ">
        <ul className="mt-8">
          <li className="py-2 cursor-pointer hover:underline ">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-2 cursor-pointer hover:underline">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-2 cursor-pointer hover:underline ">
            <Link to="skills" duration={500} smooth={true}>
              Skills
            </Link>
          </li>
          <li className="py-2 cursor-pointer hover:underline ">
            <Link to="contact" duration={500} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

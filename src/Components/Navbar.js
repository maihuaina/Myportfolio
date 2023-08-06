import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";
import Logo from "../Assets/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <button
                  onClick={toggleSidebar}
                  className="text-white hover:text-gray-300 focus:outline-none"
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
              </div>
              <div className="h-30 w-[100px] justify-center lg:h-[60px] lg:mt-10 lg:mb-8 lg:mr-64 lg:text-center">
                <img src={Logo} />
              </div>
              <div className="  logo text-center  flex order-3 text-white  ">
                <div
                  className={
                    isOpen
                      ? "hidden"
                      : "  features space-x-4 flex items-center  font-medium lg:space-x-8 lg:text-xl"
                  }
                >
                  <Link to="home" smooth={true} duration={500}>
                    <div className="ml-7 fitem hover:underline-offset-2 hover:underline cursor-pointer">
                      Home{" "}
                    </div>
                  </Link>
                  <Link to="about" smooth={true} duration={500}>
                    <div className="fitem  hover:underline-offset-2 hover:underline cursor-pointer">
                      About
                    </div>
                  </Link>
                  <Link to="skills" smooth={true} duration={500}>
                    <div className="fitem hover:underline-offset-2 hover:underline cursor-pointer">
                      Skills
                    </div>
                  </Link>
                  <Link to="contact" smooth={true} duration={500}>
                    <div className="fitem hover:underline-offset-2 hover:underline cursor-pointer">
                      Contact
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;

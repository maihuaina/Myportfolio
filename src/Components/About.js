import React, { useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FiMessageCircle } from "react-icons/fi";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import MessageComp from "./MessageComp";

const About = () => {
  const [iscopied, setIsCopied] = useState(false);
  const [copy, setcopy] = useState(true);

  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard.writeText("ainaali408@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, []); // Memoize the function with an empty dependency array

  return (
    <div name="about" className=" mt-32 mb-10 ">
      <div className="flex md:justify-center items-center space-y-6 tracking-widest  mb-10 mx-5 ">
        <h3 className="flex text-4xl font-medium -my-4 pl-5">About</h3>
      </div>

      <main className=" border-t ">
        <h2 className="text-gray-700 dark:text-gray-200 p-8 pb-0">Hi,</h2>

        <p className=" font-mono p-9 pt-2 mt-0 pb-0 text-sm lg:text-lg md:text-lg space-x-4 justify-center text-gray-600 dark:text-gray-300">
          My name is <span style={{ color: "cyan" }}>Aina Ali,</span> I belong
          to Bijnor of UttarPradesh. Eager and enthusiastic recent
          post-graduated in <span style={{ color: "cyan" }}> Computer Applications </span>
          in july 2023. I aim to apply my educational knowledge in a dynamic
          organization that encourages growth and innovation. With a strong
          academic foundation and a passion for learning, I am excited to
          contribute to the success of a forward thinking team. I am pretty much
          interested in<span style={{ color: "cyan" }}>Web Developement</span>
          , I would like to enhance my interest to use and grow my knowledge
          towards web technology. Currently, I am learning frontend technologies
          expereincing<span style={{ color: "cyan" }}> Javascript, React JS, HTML, CSS,Tailwind CSS.
          </span>
        </p>

        <p className=" text-gray-600 dark:text-gray-300 mt-6 pl-8 ">
          Thankyou <br />
        </p>
      </main>

      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/contactainaali/"
              className="flex justify-between items-center w-full text-gray-300 ml-2"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[0px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-2"
              href="https://github.com/maihuaina"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <div className="flex flex-row">
            <button
              className="w-[150px] h-[60px] flex  justify-between items-center ml-[-120px] hover:ml-[0px] duration-300 bg-[#6fc2b0]"
              onClick={handleCopyToClipboard}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300 ml-2"
                href="#"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </button>

            {iscopied && (
              <div className="absolute  bg-blue-500 w-16 h-10 font-medium m-4 text-white p-2 rounded-lg">
                <p>Copied</p>
              </div>
            )}
          </div>

          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[0px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-2"
              href="#"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

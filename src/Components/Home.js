import React from "react";
import AinaImg from "../Assets/aina.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className="slider flex justify-between flex-col-reverse md:flex-row bg-[#828380]"
    >
      <div className="left flex flex-col justify-center items-center h-80 md:items-baseline py-12 ml-32 space-y-5">
        <h1 className="text-4xl mx-5 font-medium md:text-4xl">Aina Ali</h1>
        <p className=" mx-5 text-center font-medium  md:text-xl md:text-left">
          "FrontEnd || React JS"
        </p>
        <div className="md:flex md:xl w-40">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I believe in Learning",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I believe in Hardwork ",
              1000,
              "I believe in Dedication",
              1000,
              "I believe in Enthusiasm",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="">
        <img
          className="w-[14rem] md:w-[14rem]  h-56 lg:h-80 mb-7 mt-5 lg:mr-24 "
          src={AinaImg}
        />
      </div>
    </div>
  );
};

export default Home;

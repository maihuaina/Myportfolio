import React from "react";
import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import JAVASCRIPT from "../Assets/javascript.png";
import MYSQL from "../Assets/mysql.png";
import PYTHON from "../Assets/python.png";
import ReactIMG from "../Assets/reactimage.png";

const Skills = () => {
  return (
    <>
      <div
        name="skills"
        className="flex md:justify-center items-center space-y-6 tracking-widest mt-10 mb-10 mx-5 "
      >
        <h3 className="flex text-4xl font-medium my-4 pl-5">Skills</h3>
      </div>

      <div className="px-3 md:lg:xl:px-40  border-t py-20 bg-opacity-10">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white    ">
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full text-white shadow-lg  shadow-orange-400">
              <img className="h-24 w-24" src={JAVASCRIPT} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Javascript
            </p>
            <p className="mt-2 text-sm md:text-lg  lg:text-lg  text-slate-500 ">
              Enthusiastic about creating dynamic and user-friendly websites.
              Familiar with Synchronous Javascript, Event loop, Call stack,
              Callback queue and Microtask queue.Experienced on ES6 concepts
              such as let and const Keyword, Arrow functions, Classes,Promises,
              advance javascript such as Closures, Hoisting, Callback functions
              ,Array and array methods such as map, reduce, filter, hands on
              practice on Objects and Strings.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-100 space-x-7 cursor-pointer">
            <span className="p-5 rounded-full text-white shadow-lg shadow-blue-400">
              <img className="h-20 w-20" src={ReactIMG} />
            </span>
            <p className="text-xl  font-medium text-slate-700 mt-3">React JS</p>
            <p className="mt-2 text-sm md:text-lg  lg:text-lg  text-slate-500  ">
              Familiar with structure of React application , jsx and importing
              react js libraries such as axios, react-router-dom, formik, yup,
              redux, react-scroll, react-icons, react-bootstrap etc . Practiced
              on creating, reusing and rendering with function based components.
              Experienced on using hooks such as useState, useEffect, useMemo
              useRef etc.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full  text-white shadow-lg  shadow-yellow-400">
              <img className="h-24 w-24" src={HTML} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">HTML</p>
            <p className="mt-2 text-sm md:text-lg  lg:text-lg text-slate-500">
              Proficient in structuring website layouts using HTML5 with
              hands-on experience in building responsive web applications.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full text-white shadow-lg shadow-lime-400">
              <img className="h-28 w-24" src={CSS} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">CSS</p>
            <p className="mt-2 text-sm md:text-lg  lg:text-lg text-slate-500">
              Proficient in writing clean and semantic CSS3 code. Understanding
              of CSS box model, layout, and positioning. Experience with
              responsive web design using media queries and Flexbox. Skilled in
              working with Bootstrap,react-bootstrap to create responsive and
              mobile-friendly websites.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full text-white shadow-lg shadow-teal-400">
              <img className="h-24 w-24" src={PYTHON} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Python</p>
            <p className="mt-2 text-sm md:text-lg  lg:text-lg text-slate-500">
              Proficient in basics concepts of Python, familiar with python
              syntax, primitive and non-primitive datatypes such as int, float,
              string, list, dictionaries, tuples, sets etc, skilled in creating
              functions and OOPS concepts. Growing knowledge towards django
              framework expereincing creating Rest API models, and serializing
              models.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full text-white shadow-lg shadow-indigo-400">
              <img className="h-24 w-24" src={MYSQL} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">MYSQL</p>
            <p className="mt-2 text-sm md:text-lg  lg:text-lg text-slate-500">
              Experience to design and create well-structured databases,
              including tables, relationships, and normalization.Skill in
              writing efficient and optimized SQL queries to retrieve and
              manipulate data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

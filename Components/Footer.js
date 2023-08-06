import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="h-40 mt-4 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800">
        <div className=" p-7 flex px-16 space-x-4">
          <FaFacebook color={" #1877F2"} size={40} />
          <FaTwitter size={40} color={"#1DA1F2"} />
          <FaInstagram size={40} color={"#E4405F"} />
          <FaLinkedin size={40} color={"#0077B5"} />
        </div>
        <div className=" flex pl-28 pt-0  space-x-3 pb-0">
          <FaTelegram size={40} color={" #0088CC"} />
          <FaGoogle size={40} color={"#EA4335"} />
        </div>
      </div>
      <div>
        <p className="mt-3 text-gray-500 text-center dark:text-gray-400">
          © 2023 Aenaki UI. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

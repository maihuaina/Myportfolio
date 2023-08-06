import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="flex md:justify-center items-center space-y-6 tracking-widest mt-10 mb-10 mx-5  "
      >
        <h3 className="flex text-4xl font-medium my-4">Contact</h3>
      </div>
      <div className="border-t">
        <div class="flex mt-16 bg-gray-300 border-t">
          <div class=" flex mx-auto w-48 lg:w-80 mb-3 mt-3 ">
            <form
              method="POST"
              action="https://getform.io/f/f86affce-9050-488c-a451-05e231e2b45d"
            >
              <div class="mb-5 ">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D] "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-sm lg:text-lg font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base lg:text-lg font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="subject"
                  class="mb-3 block text-sm font-medium text-[#07074D]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  class="w-full rounded-md lg:text-lg border border-[#e0e0e0] bg-white py-2 px-2 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-sm font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  class="hover:bg-gray-700 flex justify-center items-center rounded-md bg-gray-800 py-2 px-2 text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="relative w-60 mr-0 ml-5 lg:w-80 mx-auto mt-8 p-2 bg-white rounded shadow  md:mr-5 lg:mr-5 ">
              <h2 className="text-lg lg:text-xl font-bold mb-4">
                Let's Collaberate
              </h2>

              <p className="text-sm lg:text-lg md:text-lg mb-2">
                Email: ainaali408@gmail.com
              </p>
              <p className="text-sm lg:text-lg md:text-lg mb-2">
                Phone: 9837938462
              </p>
              <p className="text-sm lg:text-lg md:text-lg mb-2">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/contactainaali/"
                  className="text-blue-500"
                >
                  www.linkedin.com/in/contactainaali/
                </a>
              </p>
              <p className="text-sm lg:text-lg md:text-lg mb-4">
                Location: Bijnor,UP,India.
              </p>
              <p className="text-sm lg:text-lg md:text-lg">
                Contact me for any further information or collaboration. I look
                forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

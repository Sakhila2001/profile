import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="Contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in
            <span className="text-teal-800"> Touch</span>
          </h1>
          <p className="mb-2">
            Have a project in mind or just want to say hi? My inbox is always
            open. Whether you have a question, a collaboration idea, or just
            want to connect, feel free to drop me a message. I look forward to
            hearing from you!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full border border-zinc-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border border-zinc-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full border border-zinc-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Enter Message"
                className="w-full border border-zinc-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              
              <button className="flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer">
                Send Message
                <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

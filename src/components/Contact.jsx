import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kf9jpip", // from EmailJS dashboard
        "template_az4r248", // from EmailJS
        formRef.current,
        "YeIVJ030wWjgmDJSi" // from EmailJS account
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          alert("Failed to send ❌: " + error.text);
        }
      );
  };

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
            open.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-full border border-zinc-500 rounded px-4 py-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full border border-zinc-500 rounded px-4 py-3"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              className="w-full border border-zinc-500 rounded px-4 py-3"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Message"
              className="w-full border border-zinc-500 rounded px-4 py-3"
            ></textarea>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white"
              >
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

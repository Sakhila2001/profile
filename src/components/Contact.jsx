import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kf9jpip",
        "template_az4r248",
        formRef.current,
        "YeIVJ030wWjgmDJSi"
      )
      .then(
        () => {
          setAlert({
            show: true,
            type: "success",
            message: "Message sent successfully ✅",
          });
          formRef.current.reset(); // Clear form
          setTimeout(
            () => setAlert({ show: false, type: "", message: "" }),
            4000
          );
        },
        (error) => {
          setAlert({
            show: true,
            type: "error",
            message: "Failed to send ❌: " + error.text,
          });
          setTimeout(
            () => setAlert({ show: false, type: "", message: "" }),
            4000
          );
        }
      );
  };

  return (
    <div id="Contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="text-teal-800">Touch</span>
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
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full border border-zinc-500 rounded px-4 py-3"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              className="w-full border border-zinc-500 rounded px-4 py-3"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Message"
              className="w-full border border-zinc-500 rounded px-4 py-3"
              required
            ></textarea>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white transition-all duration-300"
              >
                Send Message <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Fancy Alert Card */}
      <div
        className={`fixed bottom-10 right-10 px-6 py-4 rounded-lg shadow-lg text-white transform transition-all duration-500 ${
          alert.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        } ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}
      >
        {alert.message}
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { assets, profileData } from "../assets/asstes";
import { FaCode } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div id="About" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-teal-800">About</span>
              <span>Me</span>
            </h2>
            <p className="text-md mb-2 leading-8">
              I'm a passionate backend developer with expertise in Laravel, PHP,
              and MySQL. I specialize in building robust and scalable web
              applications that deliver seamless user experiences. With a keen
              eye for detail and a commitment to writing clean, efficient code,
              I strive to create solutions that meet both client needs and
              industry standards.
            </p>
            <p className="text-md mb-2 leading-8">
              When I'm not coding, I enjoy exploring new technologies, reading
              tech blogs, and contributing to open-source projects. I'm always
              eager to learn and grow as a developer, and I look forward to
              collaborating on exciting projects that challenge my skills and
              push the boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
              {profileData.map((data, index) => (
                <div
                  key={index}
                  className="w-full h-55 sm:w-50 p-6 border border-zinc-400 rounded cursor-pointer hover:border-b-4 hover:border-r-4 hover:border-zinc-800 transition duration-300 hover:translate-y-1"
                >
                  {/* Example icon */}
                  <FaCode className="text-3xl mb-4" />

                  <h1 className="text-xl font-bold mb-4">{data.title}</h1>
                  <p>{data.technologies.join(", ")}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/resume")}
              className="px-8 py-4 bg-zinc-700 text-white rounded-full transition duration-300 hover:bg-zinc-900 cursor-pointer"
            >
              Download Resume
            </button>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={assets.profileImg}
                  alr="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

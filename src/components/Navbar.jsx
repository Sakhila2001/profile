import React from "react";
import { navMenu } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full py-4 z-50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-zinc-800">
            <a href="/">
              <span>Sakhila</span>
              <span className="text-teal-800 font-orbitron">Thami</span>
            </a>
          </div>

          {/* Menu */}
          <div className="space-x-8 hidden md:flex border-gray-200 rounded-full px-10 py-4">
            {navMenu.map((item, index) => (
              <a href={`#${item}`} key={index}>
                {item}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div>
            <button
              onClick={() => navigate("/resume")}
              className="px-4 py-2 md:px-8 md:py-4 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-300"
            >
              Resume
              <FaArrowRight className="text-gray-500 text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

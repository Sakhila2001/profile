import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative bg-gray-50">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // go back to previous page
        className="absolute top-16 left-4 z-10 px-5 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 shadow-lg transition flex items-center gap-2 backdrop-blur-sm"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Floating Download Button */}
      {/* <a
        href="/SakhilaThami_Resume.pdf"
        download
        className="absolute top-16 right-4 z-10 px-5 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 shadow-lg transition flex items-center gap-2"
      >
        Download PDF
      </a> */}

      {/* PDF Iframe */}
      <iframe
        src="/SakhilaThami_Resume.pdf"
        title="Resume"
        className="w-full h-full"
      />
    </div>
  );
};

export default Resume;

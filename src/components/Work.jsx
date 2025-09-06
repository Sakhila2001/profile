import React from "react";
import { projectData } from "../assets/asstes";

const Work = () => {
  return (
    <div id="Work" className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
            Feature <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Explore some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative rounded overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-1 transition duration-300"
            >
              <div className="relative w-full h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-slate-900 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((language, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

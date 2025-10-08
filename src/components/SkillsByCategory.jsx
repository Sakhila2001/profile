import React, { useState } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaPhp,
    FaLaravel,
  } from "react-icons/fa";
  import {
    SiTailwindcss,
    SiJavascript,
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiGit,
    SiPostman,
    SiJira,
    SiXampp,
  } from "react-icons/si";

const SkillsByCategory = () => {
  const categories = ["All", "Frontend", "Backend", "Database", "Tool"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = [
    // Frontend
    { name: "HTML", icon: <FaHtml5 color="#E34F26" />, category: "Frontend" },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, category: "Frontend" },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" />, category: "Frontend" },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" />, category: "Frontend" },
    { name: "Javascript", icon: <SiJavascript color="#F7DF1E" />, category: "Frontend" },
    { name: "React", icon: <FaReact color="#61DAFB" />, category: "Frontend" },
  
    // Backend
    { name: "PHP", icon: <FaPhp color="#777BB4" />, category: "Backend" },
    { name: "Laravel", icon: <FaLaravel color="#FF2D20" />, category: "Backend" },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" />, category: "Backend" },
    { name: "Express", icon: <SiExpress color="#000000" />, category: "Backend" },
  
    // Database
    { name: "MongoDB", icon: <SiMongodb color="#47A248" />, category: "Database" },
    { name: "XAMPP", icon: <SiXampp color="#FB7A24" />, category: "Database" },
  
    // Tools
    { name: "Git", icon: <SiGit color="#F05032" />, category: "Tool" },
    { name: "Github", icon: <FaGithub color="#181717" />, category: "Tool" },
    { name: "Postman", icon: <SiPostman color="#FF6C37" />, category: "Tool" },
    { name: "Jira", icon: <SiJira color="#0052CC" />, category: "Tool" },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Technical <span className="text-teal-600">Skills</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300
                ${
                  selectedCategory === cat
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-teal-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-gray-800 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsByCategory;

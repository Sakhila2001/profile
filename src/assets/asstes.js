import {
  FaCode,
  FaDesktop,
  FaMicrochip,
  FaReact,
  FaSchool,
} from "react-icons/fa6";
import profileImg from "../assets/profile1.jpg";
import { FaProjectDiagram } from "react-icons/fa";

export const assets = {
  profileImg,
};

export const navMenu = ["Home", "Work", "Skills", "About", "Contact"];

export const skillsData = [
  {
    icon: FaMicrochip,
    title: "Backend",
    technologies: [
      "Laravel",
      "Node.js",
      "PHP",
      "REST APIs",
      "Multi-tenant Architecture",
    ],
  },
  {
    icon: FaCode,
    title: "Programming Languages",
    technologies: ["C++", "Python", "Java", "PHP", "JavaScript"],
  },
  {
    icon: FaReact,
    title: "Frameworks & Libraries",
    technologies: [
      "Laravel",
      "Node.js",
      "ReactJS",
      "Tailwind CSS",
      "Bootstrap",
      "WordPress",
    ],
  },
  {
    icon: FaDesktop,
    title: "Web & CMS",
    technologies: [
      "WordPress",
      "SEO Optimization",
      "Email Integration",
      "Responsive Design",
    ],
  },
  {
    icon: FaCode,
    title: "DevOps & Tools",
    technologies: ["Linux", "Git", "GitHub", "Docker", "CI/CD"],
  },
];

export const projectData = [
  {
    title: "Techspire Innovation Website",
    description:
      "Corporate website developed with SEO optimization, responsive design, and email integration.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tech: ["PHP", "Bootstrap", "Laravel", "JavaScript"],
    demo: "https://techspireinnovation.com.np/",
    github: "",
  },
  {
    title: "Janata Secondary School Website",
    description:
      "School website with dynamic content management, SEO optimization, and email integration.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tech: ["PHP", "Bootstrap", "Laravel", "JavaScript"],
    demo: "https://janatasecondaryschool.com/",
    github: "",
  },
  {
    title: "Hotel Prime Suite Website",
    description:
      "Hotel website with responsive design, booking features, SEO optimization, and email integration.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tech: ["WordPress", "PHP", "Bootstrap", "HTML", "CSS", "JavaScript"],
    demo: "https://hotelprimesuite.com/",
    github: "",
  },
  {
    title: "School Management System",
    description:
      "Laravel-based system to manage students, teachers, parents, classes, attendance, grades, and notices.",
    image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    demo: "",
    github: "https://github.com/Sakhila2001/School_Management_System",
  },
  {
    title: "Case Management System",
    description:
      "Laravel system for managing court cases with role-based access control, permissions, and case tracking reports.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tech: ["Laravel", "PHP", "MySQL", "REST APIs"],
    demo: "",
    github: "https://github.com/Sakhila2001/court.com",
  },
  {
    title: "Bidyut & ERP Software",
    description:
      "Developed RESTful APIs, backend modules, and optimized multi-tenant architecture for electricity and ERP software with roles and permissions.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tech: ["Laravel", "PHP", "MySQL", "REST APIs", "Multi-tenant Architecture"],
    demo: "",
    github: "",
  },
];

export const profileData = [
  {
    icon: FaSchool,
    title: "Education",
    technologies: ["Bachelor of Information Management (BIM)"],
  },
  {
    icon: FaCode,
    title: "Languages",
    technologies: ["C++", "Python", "Java", "PHP", "JavaScript"],
  },
  {
    icon: FaReact,
    title: "Frameworks & Libraries",
    technologies: [
      "Laravel",
      "Node.js",
      "ReactJS",
      "Tailwind CSS",
      "WordPress",
    ],
  },
  // {
  //   icon: FaDesktop,
  //   title: "Databases",
  //   technologies: ["MySQL", "MongoDB"],
  // },

  // {
  //   icon: FaProjectDiagram,
  //   title: "Projects",
  //   technologies: ["CMS & WordPress Websites", "School Management System", "Case Management System", "Bidyut & ERP Software"],
  // },
];

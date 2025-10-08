import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SkillsByCategory from "../components/SkillsByCategory";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      {/* <Skills /> */}
      <SkillsByCategory />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

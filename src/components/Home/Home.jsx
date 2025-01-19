import React, { useRef } from "react";
import Profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import CV from "../../assets/cv.pdf"; // Path to your PDF file
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Contact from "../contact/contact";

const Home = () => {
  // Create refs for each section
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to each section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif"
            >
              Hi, I am Devsh Magre, a Fullstack Developer
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 leading-7"
            >
              Full Stack Developer with experience in front-end and back-end technologies, including HTML, CSS, JavaScript, React, MongoDB, Express, Node.js, and DevOps, delivering end-to-end web application solutions.
            </motion.p>
            <div className="space-x-4 flex flex-col md:flex-row md:space-x-6">
  {/* Download CV Button */}
  <motion.a
    variants={SlideUp(0.8)}
    initial="initial"
    animate="animate"
    href={CV}
    download="Devsh_Magre_CV.pdf"
    className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] w-full md:w-auto py-2 px-6 text-center"
  >
    Download CV
  </motion.a>
  {/* Connect Button */}
  <motion.a
    variants={SlideUp(1.1)}
    initial="initial"
    animate="animate"
    href="https://www.linkedin.com/in/devesh-magre-003924283"
    target="_blank"
    rel="noopener noreferrer"
    className="primary-btn uppercase w-full md:w-auto py-2 px-6 text-center mt-4 md:mt-0"
  >
    Connect
  </motion.a>
</div>

          </div>
          {/* Image Section */}
          <div className="flex flex-col items-center justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Profile}
              alt="Profile Picture"
              className="w-[80%] md:w-[800px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Render other components (Skills, Projects, etc.) */}
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Experience ref={experienceRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </>
  );
};

export default Home;

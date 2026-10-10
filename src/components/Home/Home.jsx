import React from "react";
import Profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import CV from "../../assets/Devesh-Magre-Resume.pdf";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Contact from "../contact/contact";

const Home = () => {
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
              Hi, I am Devesh Magre, a MERN Stack Developer
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 leading-7"
            >
              Full Stack Developer (MERN) with 2+ years of hands-on experience
              in React.js, Node.js, Express.js, MongoDB, JavaScript, and REST
              APIs. Built SmartLock, E-Seal, LogiSmart, and ProcMart, covering
              JWT authentication, role-based access control, real-time
              dashboards, and database optimization.
            </motion.p>
            <motion.p
              variants={SlideUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-sm text-gray-500"
            >
              Pune, Maharashtra, India · +91-7089002451 · deveshmagre1@gmail.com
            </motion.p>
            <div className="space-x-4 flex flex-col md:flex-row md:space-x-6">
              <motion.a
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                href={CV}
                download="Devesh_Magre_CV.pdf"
                className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] w-full md:w-auto py-2 px-6 text-center"
              >
                Download CV
              </motion.a>
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

      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
};

export default Home;

import React from "react";
import my from "../../assets/my.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const About = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="flex justify-center items-center">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif"
          >
            About Me
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              Hello! I am Devesh Magre, a Full Stack Developer with experience in front-end and back-end technologies, including HTML, CSS, JavaScript, React, MongoDB, Express, Node.js, and DevOps, delivering end-to-end web application solutions.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="space-y-4"
            >
              {/* Address, Education, and Hobbies */}
              <div>
                <p className="text-lg font-bold">Education:</p>
                <ul className="text-gray-500 text-sm space-y-2">
                  <li>
                    <span className="font-medium">Secondary Education:</span> Kendriya Vidhalaya Burhanpur, 72% (2018)
                  </li>
                  <li>
                    <span className="font-medium">Higher Secondary Education:</span> New Vision, 74% (2020)
                  </li>
                  <li>
                    <span className="font-medium">B.Tech:</span> Computer Science, Malwa Institute Of Technology (2024)
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-bold">Hobbies:</p>
                <p className="text-gray-500 text-sm">
                  Coding, Reading, Traveling, and Playing Chess
                </p>
              </div>
            </motion.div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={my}
              alt="Profile"
              className="w-[350x] h-[500px] rounded-3xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

import html from "../../assets/html4.webp";
import next from "../../assets/next.webp";
import react from "../../assets/React.png";
import aws from "../../assets/aws.png";
import pthon from "../../assets/python.png";
import docker from "../../assets/docker.png";
import nodeimg from "../../assets/node.jpg";
import mongoimg from "../../assets/mongo.png";
import mysql from "../../assets/mysql.jpeg";
import expressimg from "../../assets/express.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Context API",
      "React Hooks",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "WebSockets",
      "MQTT",
    ],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Docker",
      "AWS (EC2, S3)",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Concepts",
    items: [
      "MVC Architecture",
      "API Integration",
      "Role-Based Access Control",
      "Agile/Scrum",
      "Debugging & Performance Optimization",
    ],
  },
];

const Skills = () => {
  return (
    <>
      <div className="container py-14">
        <div className=" flex justify-center items-center  mb-12">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            SKILLS
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={SlideUp(0.3)}
              initial="initial"
              whileInView={"animate"}
              className="border border-black/20 p-5"
            >
              <h2 className="text-lg font-bold font-serif mb-3">
                {group.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs border border-black/30 px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6  ">
          <motion.img
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={html}
            alt="HTML"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={react}
            alt="React"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={nodeimg}
            alt="Node.js"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={mongoimg}
            alt="MongoDB"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={expressimg}
            alt="Express"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
        </div>
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6 mt-8  ">
          <motion.img
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={next}
            alt="Next.js"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={mysql}
            alt="MySQL"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={docker}
            alt="Docker"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={aws}
            alt="AWS"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={pthon}
            alt="Python"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;

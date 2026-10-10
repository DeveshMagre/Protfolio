import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import exp from "../../assets/exp.png";

const roles = [
  {
    title: "MERN Stack Developer",
    company: "Aexonic Technologies",
    period: "26 Feb 2025 – Present",
    location: "Pune, Maharashtra, India",
    projects: [
      {
        name: "SmartLock (IoT Smart Lock Management Platform)",
        points: [
          "Developed web application modules using React.js, Node.js, Express.js, and MongoDB/PostgreSQL for managing smart lock devices, users, and access permissions.",
          "Built secure REST APIs with JWT authentication and role-based access control for lock/unlock operations and access logs.",
          "Implemented real-time device status updates and activity dashboards, improving monitoring speed by 45%.",
        ],
      },
      {
        name: "E-Seal (Electronic Seal Tracking System)",
        points: [
          "Designed and developed responsive dashboards for monitoring electronic seal status, tamper alerts, and shipment events.",
          "Created backend APIs and database schemas for seal event data, improving query performance by 30%.",
          "Integrated device data and notifications to improve visibility and reporting for operations teams.",
        ],
      },
      {
        name: "LogiSmart (Logistics & Fleet Management Platform)",
        points: [
          "Built shipment tracking, trip management, and reporting features using the MERN stack.",
          "Optimized API response times and database queries using indexing and pagination, improving performance by 40%.",
          "Collaborated with QA, product, and hardware teams to deliver releases on schedule.",
        ],
      },
    ],
  },
  {
    title: "Software Developer (MERN Stack)",
    company: "Cubexo",
    period: "Feb 2024 – Feb 2025",
    location: "Indore, Madhya Pradesh, India",
    projects: [
      {
        name: "ProcMart (Procurement E-Commerce Platform)",
        points: [
          "Developed frontend and backend features for a procurement marketplace, including catalog, search, cart, and order management, improving order processing speed by 35%.",
          "Built reusable React components and REST APIs with Node.js and Express.js, improving code reusability and maintainability.",
          "Implemented authentication, vendor/buyer role management, and admin panel functionality.",
          "Fixed bugs, wrote clean documented code, and participated in code reviews and sprint planning.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            EXPERIENCE
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={exp}
              alt="Experience"
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          <div className="space-y-10 flex justify-center flex-col xl:max-w-[560px]">
            {roles.map((role) => (
              <div key={role.company} className="space-y-4">
                <motion.h1
                  variants={SlideUp(0.2)}
                  initial="initial"
                  whileInView="animate"
                  className="text-2xl font-bold font-serif"
                >
                  {role.title} – {role.company}
                </motion.h1>
                <motion.p
                  variants={SlideUp(0.2)}
                  initial="initial"
                  whileInView="animate"
                  className="text-sm text-gray-400 font-serif"
                >
                  {role.period} | {role.location}
                </motion.p>
                {role.projects.map((project) => (
                  <div key={project.name} className="space-y-2">
                    <motion.h2
                      variants={SlideUp(0.2)}
                      initial="initial"
                      whileInView="animate"
                      className="text-lg font-bold font-serif"
                    >
                      {project.name}
                    </motion.h2>
                    {project.points.map((point) => (
                      <motion.p
                        key={point}
                        variants={SlideUp(0.4)}
                        initial="initial"
                        whileInView="animate"
                        className="text-gray-500 text-sm leading-7"
                      >
                        {point}
                      </motion.p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

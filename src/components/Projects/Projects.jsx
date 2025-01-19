import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

import chat from "../../assets/chat.png"; // Default image
import ecommerceImg from "../../assets/ecommerce.png"; // Add specific images for projects
import portfolioImg from "../../assets/portfolio.png"; // Add specific images for projects

const ProjectCard = [
  {
    id: 1,
    title: "E-commerce Website",
    TechStack: "React, Node, Express, MongoDB",
    description:
      "Results-driven professional with expertise in managing and delivering projects on time, within scope, and on budget, ensuring high-quality outcomes.",
    icon: <FaVectorSquare />,
    image: ecommerceImg, 
    liveDemoLink: "https://e-commerce-rust-theta-79.vercel.app",
    githubLink: "https://github.com/DeveshMagre/E-commerce", // Replace with the actual GitHub repo link
    delay: 0.2,
  },
  {
    id: 2,
    title: "Real Time Chat Application",
    TechStack: "React, socket.io, Firebase",
    description:
      "A messaging app for seamless communication, real-time chats, and easy sharing of media and files",
    icon: <FaPenToSquare />,
    image: chat, 
    liveDemoLink: "https://astounding-dusk-114565.netlify.app", // Replace with the actual live demo link
    githubLink: "https://github.com/DeveshMagre", // Replace with the actual GitHub repo link
    delay: 0.4,
  },
  {
    id: 3,
    title: "Portfolio",
    TechStack: "React, Framer-motion, Tailwind",
    description:
      "Designed and developed a dynamic, user-friendly web application using React, featuring responsive design, interactive components, and seamless state management for an enhanced user experience.",
    icon: <BiSolidDollarCircle />,
    image: portfolioImg, // New field for project image
    liveDemoLink: "#", // Replace with the actual live demo link
    githubLink: "https://github.com/DeveshMagre/Protfolio", // Replace with the actual GitHub repo link
    delay: 0.6,
  },
];

const Projects = () => {
  return (
    <div>
      <div className="container py-20">
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            PROJECTS
          </motion.h1>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ProjectCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  <img src={card.image} className="w-10 h-10 rounded-full" alt="Project" />
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-sm font-bold font-serif">{card.TechStack}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>

                <div className="space-x-4">
                  <a
                    href={card.liveDemoLink}
                    className="inline-block border-b border-black"
                  >
                    Live Demo
                  </a>
                  <a
                    href={card.githubLink}
                    className="inline-block border-b border-black"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

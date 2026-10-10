import React from "react";
import { FaLock, FaTruck, FaShoppingCart } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ProjectCard = [
  {
    id: 1,
    title: "SmartLock",
    TechStack: "React.js, Node.js, Express.js, MongoDB, PostgreSQL, JWT",
    description:
      "IoT smart lock management platform for devices, users, and access permissions. Secure REST APIs with JWT and RBAC, plus real-time device status and activity dashboards that improved monitoring speed by 45%.",
    icon: <FaLock />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "E-Seal",
    TechStack: "React.js, Node.js, Express.js, MongoDB",
    description:
      "Electronic seal tracking system with responsive dashboards for seal status, tamper alerts, and shipment events. Backend APIs and schemas improved query performance by 30% and notifications for operations teams.",
    icon: <FaShieldHalved />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "LogiSmart",
    TechStack: "MERN, REST APIs, Indexing, Pagination",
    description:
      "Logistics and fleet management platform covering shipment tracking, trip management, and reporting. API and database optimizations improved performance by 40%, delivered with QA, product, and hardware teams.",
    icon: <FaTruck />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "ProcMart",
    TechStack: "React.js, Node.js, Express.js, MongoDB, REST APIs",
    description:
      "Procurement e-commerce platform with catalog, search, cart, and order management. Reusable React components, vendor/buyer roles, admin panel, and authentication improved order processing speed by 35%.",
    icon: <FaShoppingCart />,
    delay: 0.5,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-sm font-bold font-serif">{card.TechStack}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

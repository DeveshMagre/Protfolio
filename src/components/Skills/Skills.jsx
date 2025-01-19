import React from "react";

import html from '../../assets/html4.webp';
import next from '../../assets/next.webp';
import react from '../../assets/React.png';
import aws from '../../assets/aws.png';
import pthon from '../../assets/python.png';
import docker from '../../assets/docker.png';
import nodeimg from '../../assets/node.jpg';
import mongoimg from '../../assets/mongo.png';
import mysql from '../../assets/mysql.jpeg';
import expressimg from '../../assets/express.png';
import { motion } from "framer-motion";
import { SlideLeft , SlideUp } from "../../animation/animate";
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
               </motion.h1></div>
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6  ">
          
 
          <motion.img
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={html}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={react}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
                    <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={nodeimg}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
                    <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={mongoimg}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
                    
                    <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={expressimg}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
     
          
        </div>
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6 mt-8  ">
          
 
          <motion.img
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={next}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={mysql}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
                    <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={docker}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
                    <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={aws}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
                    
 
             <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={pthon}
            alt="brand"
            className="w-[110px] rounded-2xl md:w-[200px]"
          />
          
        </div>
      </div>
    </>
  );
};

export default Skills;

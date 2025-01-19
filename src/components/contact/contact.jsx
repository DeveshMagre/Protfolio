import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
import { SlideLeft } from '../../animation/animate';

const Contact = () => {
  return (
    <div className=" bg-white text-white flex items-center justify-center p-6">
      <motion.div
        variants={SlideLeft(0.6)}
                    initial="initial"
                    whileInView="animate"
       className="bg-gray-800 p-8 rounded-lg shadow-md max-w-lg w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Contact Me</h1>
        <div>
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="mt-2">Feel free to reach out to me via any of the methods below:</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Phone:</h3>
            <p className="mt-1 text-gray-300">+91 70890-02451</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Email:</h3>
            <p className="mt-1 text-gray-300">deveshmagre1@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Address:</h3>
            <p className="mt-1 text-gray-300">
              Malviya Nagar <br /> Indore,  452010           </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Follow Me</h2>
          <div className="mt-4 flex space-x-6 justify-center">
            <a
              href="https://www.instagram.com/devesh_magre?igsh=bGlqd2c2aXJ5MnUz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/devesh-magre-003924283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/DeveshMagre?t=gbVnY9oj5ynXdFz5_8o_iQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/DeveshMagre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

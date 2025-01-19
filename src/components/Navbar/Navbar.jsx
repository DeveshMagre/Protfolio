import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Logo from "../../assets/Logo.svg";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/", 
  },
  {
    id: 2,
    title: "Skills",
    link: "/skills", 
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects", 
  },
  {
    id: 4,
    title: "Experience",
    link: "/experience", 
  },


  {
    id: 5,
    title: "About",
    link: "/about", 
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact", 
  },

];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container flex justify-between items-center py-4"
      >
        {/* Logo Section */}
        <button className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-40 h-32" />
        </button>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-12">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}  // Use Link component with 'to' for routing
              className="inline-block mx-4 text-lg font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Leetcode Button */}
        <div className="hidden md:block">
          <a
            href="https://leetcode.com/u/Deveshmagre123/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-btn bg-black text-white shadow-md px-6 py-2 rounded-lg">
              Leetcode Profile
            </button>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 py-4 px-6 space-y-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link} // Use Link component with 'to' for routing
              className="block text-lg font-semibold"
              onClick={() => setMenuOpen(false)} // Close the menu on click
            >
              {link.title}
            </Link>
          ))}

          <div>
            <a
              href="https://leetcode.com/u/Deveshmagre123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary-btn w-full bg-black text-white shadow-md px-6 py-2 rounded-lg">
                Leetcode Profile
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

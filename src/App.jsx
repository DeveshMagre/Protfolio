import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import React Router components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"; // Home will contain all components
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <Router>  {/* Wrap the whole app in Router */}
      <main className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

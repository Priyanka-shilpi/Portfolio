
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./index.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router basename="/Portfolio">  {/* ✅ Added basename */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Default Home Route */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />  {/* ✅ Redirect unknown routes to Home */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

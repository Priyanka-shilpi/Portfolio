import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

const App = () => {
  return (
  <Router>
    
        <Header />
        <div>
        {/* Fixed Profile Image */}
        <img
          src="/profile.jpeg" // Path to your image in the public folder
          alt="Your Name"
          className="picture"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>&copy; 2023 [Your Name]. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
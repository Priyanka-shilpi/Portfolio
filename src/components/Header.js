import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Add your header specific styles here

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span>&#9776;</span> {/* Hamburger Icon */}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/Portfolio/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

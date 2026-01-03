// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Install: npm install react-icons
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO SECTION */}
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <img src="/trust1.png" alt="Trusto Logo" className="nav-logo-img" />
          </Link>
        </div>

        {/* HAMBURGER ICON - Visible only on Mobile/Tablet */}
        <div className="nav-hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* MENU SECTION */}
        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>

          <div className="nav-actions">
            <Link to="/contact" className="enquire-btn" onClick={closeMenu}>
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
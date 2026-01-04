import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll shadow effect (unchanged) */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/trust1.png"
              alt="Trusto Biotech"
              className="nav-logo-img"
            />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="nav-hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Navigation Menu */}
       <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
  <ul className="nav-links">
    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
    <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
    <li className="nav-dropdown">
      <Link to="/products" className="dropdown-trigger" onClick={closeMenu}>
        Products <span className="arrow-icon">▼</span>
      </Link>

          <ul className="dropdown-menu">

  <li>
    <Link to="/products/aqua" onClick={closeMenu} className="product-item">
      <span className="product-icon">🐟</span>
      Aqua
    </Link>
  </li>

  <li>
    <Link to="/products/poultry" onClick={closeMenu} className="product-item">
      <span className="product-icon">🐔</span>
      Poultry
    </Link>
  </li>
 <li>
    <Link to="/products/poultry" onClick={closeMenu} className="product-item">
      <span className="product-icon">🐷</span>
      Swine (Pig)
    </Link>
  </li>
 

</ul>

            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>

          </ul>

          {/* CTA */}
          <div className="nav-actions">
            <Link
              to="/contact"
              className="enquire-btn"
              onClick={closeMenu}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HiMenuAlt3, 
  HiX, 
  HiHome, 
  HiInformationCircle, 
  HiCube, 
  HiPhone, 
  HiChevronDown, 
  HiChevronUp 
} from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setIsProductsOpen(false);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <img src="/trust1.png" alt="Trusto Biotech" className="nav-logo-img" />
          </Link>
        </div>

        <div className="nav-hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={closeMenu}>
                <HiHome className="mobile-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                <HiInformationCircle className="mobile-icon" /> About Us
              </Link>
            </li>

            <li className={`nav-dropdown ${isProductsOpen ? 'active' : ''}`}>
              <div className="dropdown-trigger" onClick={() => setIsProductsOpen(!isProductsOpen)}>
                <div className="trigger-left">
                  <HiCube className="mobile-icon" /> Products
                </div>
                <span className="arrow-icon">
                  {isProductsOpen ? <HiChevronUp className="green-arrow" /> : <HiChevronDown />}
                </span>
              </div>

              {isProductsOpen && (
                <ul className="dropdown-menu-mobile">
                  <li>
                    <Link to="/products/aqua" onClick={closeMenu} className="product-item">
                      <span className="product-icon">🐟</span> Aqua
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/poultry" onClick={closeMenu} className="product-item">
                      <span className="product-icon">🐔</span> Poultry
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/swine" onClick={closeMenu} className="product-item">
                      <span className="product-icon">🐷</span> Swine (Pig)
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>
                <HiPhone className="mobile-icon" /> Contact Us
              </Link>
            </li>
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
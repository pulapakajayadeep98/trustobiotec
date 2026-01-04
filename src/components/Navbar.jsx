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
                <HiHome className="mobile-only-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                <HiInformationCircle className="mobile-only-icon" /> About Us
              </Link>
            </li>

            {/* CORRECTED DROPDOWN STRUCTURE */}
          <li className={`nav-dropdown ${isProductsOpen ? 'active' : ''}`}>

  {/* Products trigger */}
  <div
    className="dropdown-trigger"
    onClick={(e) => {
      e.stopPropagation();                 // prevent parent/menu close
      setIsProductsOpen(prev => !prev);    // ✅ toggle open/close
    }}
  >
    <div className="trigger-content">
      <HiCube className="mobile-only-icon" />
      <span>Products</span>
    </div>

    <span className={`arrow-icon ${isProductsOpen ? 'active-arrow' : ''}`}>
      {isProductsOpen ? <HiChevronUp /> : <HiChevronDown />}
    </span>
  </div>

  {/* Products dropdown */}
  <ul className={`dropdown-menu ${isProductsOpen ? 'show-mobile' : ''}`}>
    <li>
      <Link
        to="/products/aqua"
        className="product-item"
        onClick={() => {
          setIsProductsOpen(false); // close dropdown
          closeMenu();              // close mobile menu
        }}
      >
        <span className="product-emoji">🐟</span>
        Aqua
      </Link>
    </li>

    <li>
      <Link
        to="/products/poultry"
        className="product-item"
        onClick={() => {
          setIsProductsOpen(false);
          closeMenu();
        }}
      >
        <span className="product-emoji">🐔</span>
        Poultry
      </Link>
    </li>

    <li>
      <Link
        to="/products/swine"
        className="product-item"
        onClick={() => {
          setIsProductsOpen(false);
          closeMenu();
        }}
      >
        <span className="product-emoji">🐷</span>
        Swine (Pig)
      </Link>
    </li>
  </ul>
</li>


            <li>
              <Link to="/contact" onClick={closeMenu}>
                <HiPhone className="mobile-only-icon" /> Contact Us
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
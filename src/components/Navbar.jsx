import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; //
import { 
  HiMenuAlt3, 
  HiX, 
  HiChevronDown, 
  HiOutlineSearch, 
  HiShoppingCart 
} from 'react-icons/hi';
import './Navbar.css';

const Navbar = ({ cartCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); //
  
  const navigate = useNavigate(); //

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  // 🔥 Triggered when user presses 'Enter' in the search bar
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      // Navigates to the products page with the search term as a URL parameter
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); 
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* LEFT: LOGO */}
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <img src="/trust1.png" alt="Trusto Biotech" className="nav-logo-img" />
          </Link>
        </div>

   

        {/* RIGHT: NAVIGATION & ACTIONS */}
        <div className="nav-right-section">
          <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>

              <li className={`nav-dropdown ${isProductsOpen ? 'active' : ''}`}>
                <div
                  className="dropdown-trigger"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Products</span>
                  <HiChevronDown className={`arrow ${isProductsOpen ? 'rotate' : ''}`} />
                </div>

                <ul className={`dropdown-menu ${isProductsOpen ? 'show' : ''}`}>
                  <li><Link to="/products/aqua" onClick={closeMenu}>🐟 Aquaculture</Link></li>
                  <li><Link to="/products/poultry" onClick={closeMenu}>🐔 Poultry</Link></li>
                  <li><Link to="/products/swine" onClick={closeMenu}>🐷 Swine (Pig)</Link></li>
                </ul>
              </li>

              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
     {/* MIDDLE: SEARCH BAR */}
        <div className="nav-search-wrapper">
          <div className="search-bar-inner">
            <HiOutlineSearch className="search-icon-nav" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery} //
              onChange={(e) => setSearchQuery(e.target.value)} //
              onKeyDown={handleSearch} //
            />
          </div>
        </div>
          <div className="nav-actions">
            <Link to="/cart" className="cart-corner-link" onClick={closeMenu}>
              <HiShoppingCart />
              {cartCount > 0 && <span className="cart-badge-nav">{cartCount}</span>}
            </Link>

            {/* 🔥 ADDED 'menu-open' CLASS FOR COLOR TOGGLE */}
            <div
              className={`nav-hamburger ${isMobileMenuOpen ? 'menu-open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
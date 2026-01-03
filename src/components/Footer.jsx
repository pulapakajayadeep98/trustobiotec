import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/919542424508?text=Hi%20Trusto%20Team!%20I’m%20interested%20in%20your%20biotech%20products.";

  return (
    <footer className="tf-main-footer">
      <div className="tf-footer-container">
        {/* Brand Section */}
        <div className="tf-footer-section tf-brand-col">
          <div className="tf-footer-logo-wrapper">
            <img src="/trust1.png" alt="Trusto" className="tf-footer-logo-img" />
           
          </div>
          <p className="tf-footer-description">
        Delivering trusted, antibiotic-free biotech solutions for aqua and animal health—supporting sustainable farming and farmer prosperity for over 35+ years.
          </p>
          <div className="tf-social-icons">
            <a href="#" target="_blank" className="tf-icon-box tf-fb"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" className="tf-icon-box tf-ig"><i className="fab fa-instagram"></i></a>
            <a href="mailto:trustobiotech08@gmail.com" className="tf-icon-box tf-mail"><i className="fas fa-envelope"></i></a>
            <a href={whatsappUrl} target="_blank" className="tf-icon-box tf-wa"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="tf-footer-section">
          <h4 className="tf-footer-title">Quick Links</h4>
          <ul className="tf-footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
     {/* Contact Info */}
<div className="tf-footer-section">
  <h4 className="tf-footer-title">Get In Touch</h4>
  <div className="tf-contact-item">
    <i className="fas fa-envelope tf-contact-icon"></i>
    <a href="mailto:trustobiotech08@gmail.com">trustobiotech08@gmail.com</a>
  </div>
  <div className="tf-contact-item">
    <i className="fas fa-phone-alt tf-contact-icon"></i>
    {/* Wrap the phone number in an 'a' tag */}
    <a href="tel:+919542424508">+91 9542424508</a>
  </div>
  <div className="tf-contact-item">
    <i className="fas fa-map-marker-alt tf-contact-icon"></i>
    <p>16-7-382/18, Azampura, <br />Hyderabad - 500 024.</p>
  </div>
</div>

        {/* Newsletter Section */}
   <div className="tf-footer-section tf-newsletter-col">
  <h4 className="tf-footer-title">Newsletter</h4>
  {/* Ensure this class matches your CSS */}
  <p className="tf-newsletter-text">
    Subscribe to get the latest biotech updates.
  </p>
  <form className="tf-newsletter-form">
    <input type="email" placeholder="Email Address" className="tf-newsletter-input" required />
    <button type="submit" className="tf-newsletter-btn">SUBSCRIBE</button>
  </form>
</div>
      </div>

      <div className="tf-footer-bottom-bar">
        <div className="tf-bottom-container">
          <p>&copy; {currentYear} Trustobiotech. All rights reserved.</p>
          <div className="tf-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a href={whatsappUrl} className="tf-whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;
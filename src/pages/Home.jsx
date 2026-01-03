import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Trustobiotech</h1>
          <p className="hero-tagline">Biotech solutions you can trust</p>
          <button className="cta-button">Explore Our Products</button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="home-content">
        <div className="info-card">
          <h3>Innovation</h3>
          <p>We are working hard to launch a platform focused on innovation and reliability in biotechnology.</p>
        </div>
        <div className="info-card">
          <h3>Quality Solutions</h3>
          <p>Providing high-quality solutions for Aqua, Poultry, and Veterinary health sectors.</p>
        </div>
        <div className="info-card">
          <h3>Our Commitment</h3>
          <p>Delivering trusted biotech products directly to the heart of the industry.</p>
        </div>
      </section>
    </div>
  );
};

// This line is essential to fix the error in your screenshot
export default Home;
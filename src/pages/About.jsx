import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Trustobiotech</h1>
      </div>
      <div className="about-container">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Trustobiotech is dedicated to providing high-quality biotech solutions 
            [cite_start]focused on innovation and reliability[cite: 1]. We specialize in 
            animal health across Aqua, Poultry, and Veterinary sectors.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>Expertise in feed supplements and water probiotics.</li>
            [cite_start]<li>Commitment to sustainable biotechnology[cite: 1].</li>
            <li>Reliable support for farmers and veterinary professionals.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
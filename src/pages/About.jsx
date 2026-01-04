import React from 'react';
import { HiOutlineBadgeCheck, HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineShieldCheck } from 'react-icons/hi';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-header">
        <div className="header-content">
          <span className="trusto-badge">ISO 9001:2015 Certified Company [cite: 5]</span>
          <h1>Empowering Animal Health for Over 35 Years </h1>
          <p>Innovating at the intersection of biotechnology and sustainable farming. [cite: 1]</p>
        </div>
      </div>

      <div className="about-container">
        {/* Legacy Section */}
        <section className="about-section legacy-grid">
          <div className="legacy-text">
            <h2>Our Journey & Legacy</h2>
            <p>
              Trusto Biotech holds a distinguished 35-year presence in the Indian poultry industry, where we have successfully protected livestock from Mycotoxins and diverse diseases through our unique product formulations. [cite: 7, 8]
            </p>
            <p>
              Since 2012, we have expanded our expertise into the aquaculture industry, serving farmers with a specialized range of high-performance products designed to enhance "Aqua Health & Farmers Wealth." [cite: 3, 9, 10]
            </p>
          </div>
          <div className="legacy-stats">
            <div className="stat-card">
              <h3>35+</h3>
              <p>Years of Experience </p>
            </div>
            <div className="stat-card">
              <h3>2012</h3>
              <p>Aqua Sector Launch </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="mv-container">
          <div className="mv-card">
            <div className="mv-icon"><HiOutlineLightBulb /></div>
            <h3>Our Vision</h3>
            <p>
              To be the premier global choice for biotech solutions that harmonize environmental sustainability with maximum farmer profitability. [cite: 3]
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-icon"><HiOutlineGlobeAlt /></div>
            <h3>Our Mission</h3>
            <p>
              Dedicated to providing high-quality biotech solutions focused on innovation and reliability across Aqua, Poultry, and Veterinary sectors. [cite: 1]
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-section">
          <h2 className="section-center">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <HiOutlineShieldCheck className="value-icon" />
              <h4>Safety First</h4>
              <p>Every product is certified and registered as Antibiotic Free, ensuring safe consumption and ecological balance. [cite: 36, 44, 75]</p>
            </div>
            <div className="value-item">
              <HiOutlineBadgeCheck className="value-icon" />
              <h4>Quality Assurance</h4>
              <p>Maintaining ISO 9001:2015 standards to deliver excellence in every feed supplement and probiotic. [cite: 5]</p>
            </div>
            <div className="value-item">
              <HiOutlineBadgeCheck className="value-icon" />
              <h4>Innovation</h4>
              <p>Developing unique solutions like SEEDGEL and GUTGEL to combat modern farming challenges like EMS and EHP. [cite: 22, 181, 216]</p>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="about-section commitment-banner">
          <h2>Commitment to Farmers</h2>
          <p>
            We are more than a manufacturer; we are a reliable partner for farmers and veterinary professionals, committed to sustainable biotechnology that ensures excellent immunity and survival rates. [cite: 1, 20]
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { 
  HiOutlineGlobeAlt, 
  HiOutlineLightBulb, 
  HiOutlineShieldCheck, 
  HiOutlineTrendingUp,
  HiOutlineUserGroup,
  HiOutlineSparkles
} from 'react-icons/hi';
import { GiShrimp, GiChicken, GiPig } from 'react-icons/gi';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
     <section className="about-hero">
  <div className="container hero-content" data-aos="fade-up">
    
    

    <h1>
      About <span className="hero-highlight">Trusto Biotech</span>
    </h1>

    <p className="hero-subtitle">
      Advancing Aquaculture, Poultry & Swine Nutrition through
      science-backed, antibiotic-free solutions.
    </p>
    <span className="badge">35+ Years of Excellence</span>

  </div>
</section>

      {/* 2. WHO WE ARE SECTION */}
     <section className="about-intro section-padding">
  <div className="container grid-2">
    <div className="intro-text" data-aos="fade-right">
      <h2 className="section-heading">Who We Are</h2>
      <div className="intro-description">
        <p>
          <strong className="brand-highlight">Trusto Biotech</strong> is a company specializing in Aquaculture and Poultry nutrition solutions. 
          With over 35 years of industry experience, we are committed to improving animal health, productivity, 
          and farm sustainability through innovative, reliable, and farmer-focused solutions.
        </p>
        <p>
          Built on trust, performance, and consistent results, we partner with farmers and integrators 
          across India to address modern farming challenges using non-antibiotic, nutrition-based technologies.
        </p>
      </div>
    </div>
    <div className="intro-image" data-aos="fade-left">
      <img 
        src="/trustolab.png" 
        alt="Biotech Lab Research" 
        className="styled-img" 
      />
    </div>
  </div>
</section>

      {/* 3. AQUACULTURE - CORE FOCUS */}
      <section className="aqua-section section-padding bg-light">
     <div className="container">
   <div className="section-title text-center" data-aos="fade-up">
      {/* This group handles the icon and text side-by-side */}
      <div className="title-group">
        <GiShrimp className="section-icon aqua-color" />
        <h2>Aquaculture – Our Core Focus</h2>
      </div>
      
      {/* This paragraph stays centered below the group */}
      <p className="section-description">
        Deeply involved since 2012 in supporting shrimp and fish farming through 
        stage-wise nutrition and pond ecosystem management.
      </p>
    </div>

          <div className="growth-stages-grid">
            <div className="stage-card" data-aos="flip-left">
              <h4>🌱 Seed & Early Growth</h4>
              <ul>
                <li>Improves early survival & stress resistance</li>
                <li>Supports hepatopancreas development</li>
                <li>Reduces early-stage mortality</li>
              </ul>
            </div>
            <div className="stage-card" data-aos="flip-left" data-aos-delay="100">
              <h4>🧬 Growth & Development</h4>
              <ul>
                <li>Enhances feed intake and FCR</li>
                <li>Supports uniform growth & moulting</li>
                <li>Improves shell quality and strength</li>
              </ul>
            </div>
            <div className="stage-card" data-aos="flip-left" data-aos-delay="200">
              <h4>🦐 Health & Immunity</h4>
              <ul>
                <li>Supports gut & hepatopancreas function</li>
                <li>Helps manage white gut, EMS & RMS</li>
                <li>Enhances resistance against bacterial stress</li>
              </ul>
            </div>
            <div className="stage-card" data-aos="flip-left" data-aos-delay="300">
              <h4>🌊 Pond & Water Quality</h4>
              <ul>
                <li>Controls ammonia and toxic gases</li>
                <li>Improves microbial balance</li>
                <li>Supports long-term sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POULTRY & SWINE SECTION */}
   {/* 4. POULTRY & SWINE SECTION */}

{/* 4. POULTRY & SWINE SECTION */}
{/* 4. POULTRY & SWINE SECTION */}
<section className="secondary-sectors section-padding">
  <div className="container grid-2 sector-grid-gap">
    
    {/* Poultry Card */}
    <div className="sector-card" data-aos="fade-up">
      <div className="card-bg" style={{ backgroundImage: `url('/poultry.png')` }}></div>
      <div className="card-overlay"></div>
      <div className="card-content">
        <div className="header-inline">
          <GiChicken className="box-icon" />
          <h3>Poultry – A Strong Pillar</h3>
        </div>
        <div className="card-body-text">
          <p>Decades of field expertise delivering antibiotic-free nutrition focused on:</p>
          <ul>
            <li><strong>Chick Health:</strong> Early immunity & skeletal strength.</li>
            <li><strong>Growth:</strong> Maximizing FCR & nutrient absorption.</li>
            <li><strong>Quality:</strong> Superior shell strength & peak production.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Swine Card */}
    <div className="sector-card" data-aos="fade-up" data-aos-delay="200">
      <div className="card-bg" style={{ backgroundImage: `url('/swarn.png')` }}></div>
      <div className="card-overlay"></div>
      <div className="card-content">
        <div className="header-inline">
          <GiPig className="box-icon" />
          <h3>Swine – Rapidly Expanding</h3>
        </div>
        <div className="card-body-text">
          <p>Scientific farming solutions engineered for modern productivity:</p>
          <ul>
            <li><strong>Digestion:</strong> Balancing microflora to prevent stress.</li>
            <li><strong>Performance:</strong> Optimized amino acid profiles.</li>
            <li><strong>Eco-Safe:</strong> Efficient, low-nitrogen waste solutions.</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>

    {/* Swine Box */}

 
      {/* 5. DIFFERENTIATORS */}
      <section className="diff-section section-padding bg-dark text-white">
        <div className="container">
          <h2 className="text-center" data-aos="fade-up">🔬 What Makes Trusto Biotech Different</h2>
          <div className="values-grid">
            <div className="value-card" data-aos="zoom-in">
              <HiOutlineShieldCheck />
              <h4>Antibiotic-Free</h4>
              <p>Based on organic metabolites, probiotics, enzymes, and natural extracts.</p>
            </div>
            <div className="value-card" data-aos="zoom-in" data-aos-delay="100">
              <HiOutlineUserGroup />
              <h4>Farmer-First</h4>
              <p>Practical, field-proven results delivered in collaboration with consultants.</p>
            </div>
            <div className="value-card" data-aos="zoom-in" data-aos-delay="200">
              <HiOutlineSparkles />
              <h4>35+ Years Legacy</h4>
              <p>A trusted partner for farmers across India with deep industry knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISION & MISSION */}
      <section className="vm-section section-padding">
        <div className="container grid-2">
          <div className="vm-card" data-aos="fade-right">
            <HiOutlineLightBulb className="vm-icon" />
            <h3>Our Vision</h3>
            <p>To be a leading biotechnology solutions provider in Aquaculture, Poultry, and Swine nutrition by delivering innovative, safe, and sustainable products that enhance animal health and farm profitability.</p>
          </div>
          <div className="vm-card" data-aos="fade-left">
            <HiOutlineTrendingUp className="vm-icon" />
            <h3>Our Mission</h3>
            <p>To support every stage of animal growth with targeted nutrition, empower farmers with science-backed solutions, and promote antibiotic-free farming practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
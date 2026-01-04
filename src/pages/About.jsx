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
        <div className="hero-overlay"></div>
        <div className="container hero-content" data-aos="fade-up">
          <span className="badge">35+ Years of Biotech Excellence</span>
          <h1>🧬 ABOUT TRUSTO BIOTECH</h1>
          <p>Science-driven biotechnology specializing in Aquaculture and Poultry nutrition, with a rapidly expanding presence in the Swine sector.</p>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="about-intro section-padding">
        <div className="container grid-2">
          <div className="intro-text" data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>Trusto Biotech is a science-driven biotechnology company specializing in Aquaculture and Poultry nutrition solutions. With over 35 years of industry experience, we are committed to improving animal health, productivity, and farm sustainability through innovative, reliable, and farmer-focused solutions.</p>
            <p>Built on trust, performance, and consistent results, we partner with farmers and integrators across India to address modern farming challenges using non-antibiotic, nutrition-based technologies.</p>
          </div>
          <div className="intro-image" data-aos="fade-left">
            <img src="https://plus.unsplash.com/premium_photo-1676325102346-7f0f536d1f2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Biotech Lab" className="styled-img" />
          </div>
        </div>
      </section>

      {/* 3. AQUACULTURE - CORE FOCUS */}
      <section className="aqua-section section-padding bg-light">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <GiShrimp className="section-icon aqua-color" />
            <h2>🌊 Aquaculture – Our Core Focus</h2>
            <p>Deeply involved since 2012 in supporting shrimp and fish farming through stage-wise nutrition and pond ecosystem management.</p>
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
      <section className="secondary-sectors section-padding">
        <div className="container grid-2">
          <div className="sector-box poultry-bg" data-aos="fade-up">
            <div className="content">
              <GiChicken className="box-icon" />
              <h3>🐔 Poultry – A Strong Pillar</h3>
              <p>Decades of field experience in mycotoxin management, gut health, and mineral nutrition for Chick Development, Growth Phase, and Shell Quality.</p>
            </div>
          </div>
          <div className="sector-box swine-bg" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <GiPig className="box-icon" />
              <h3>🐷 Swine – Rapidly Expanding</h3>
              <p>Scientific swine farming solutions focusing on digestive health, growth performance, and antibiotic-free productivity enhancement.</p>
            </div>
          </div>
        </div>
      </section>

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
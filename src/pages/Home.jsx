import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiShrimp, GiChicken, GiPig, GiCow, GiCamel } from 'react-icons/gi';
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineBeaker,
  HiOutlineUserGroup
} from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Fix: Standardized import for React Lenis in Vite environments
import { ReactLenis } from 'lenis/react';

import './Home.css';
import { allProducts, SECTORS, ProductImage } from './Products';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Poultry Nutrition",
      tagline: "Advanced feed solutions for gut health and performance.",
      image: "/poultry2.webp",
      link: "/products/poultry",
      theme: "poultry-theme"
    },
    {
      id: 2,
      title: "Precision Aquaculture",
      tagline: "Science-driven nutrition for healthier shrimp and fish.",
      image: "/shrimp.webp",
      link: "/products/aqua",
      theme: "aqua-theme"
    },
    {
      id: 3,
      title: "Veterinary Health",
      tagline: "Complete care for cattle, sheep, pets, camels, horses and swine.",
      image: "/veterinary-hero.webp",
      link: "/products/cattle",
      theme: "veterinary-theme"
    }
  ];

  // Every product from every division (in division order), each name shown once
  const ourProducts = (() => {
    const seen = new Set();
    const list = [];
    SECTORS.forEach((sector) => {
      allProducts[sector.key].forEach((p) => {
        const key = p.name.trim().toUpperCase();
        if (seen.has(key)) return;
        seen.add(key);
        list.push({ ...p, division: sector.label, link: `/products/${sector.key.toLowerCase()}?id=${p.id}` });
      });
    });
    return list;
  })();

  useEffect(() => {
    // Initialize AOS for synchronized entrance animations
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: 'ease-out-quart'
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="home-wrapper">

        {/* --- PREMIUM HERO SECTION --- */}
        <section className="premium-hero">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`hero-slide ${slide.theme} ${index === currentSlide ? 'active' : ''}`}>
              <div className="hero-split-container">
                <div className="hero-text-side">
                  <div className="hero-content-wrapper" data-aos="fade-right">
                    <div className="status-badge" data-aos="fade-down" data-aos-delay="200">
                      <span className="pulse-dot"></span> 100% Antibiotic Free
                    </div>
                    <h1 data-aos="fade-up" data-aos-delay="400">{slide.title}</h1>
                    <p data-aos="fade-up" data-aos-delay="600">{slide.tagline}</p>
                    <div className="hero-btns" data-aos="zoom-in" data-aos-delay="800">
                      <button className="main-btn" onClick={() => navigate(slide.link)}>
                        Explore Solutions <HiArrowRight />
                      </button>
                      <button className="alt-btn" onClick={() => navigate('/about')}>
                        The Trusto Legacy
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="hero-image-side"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* --- STAGGERED TECHNICAL ADVANTAGE BAR --- */}
        <section className="tech-bar-section">
          <div className="tech-bar-container">
            <div className="tech-item" data-aos="fade-up" data-aos-delay="100">
              <HiOutlineBeaker className="t-icon" />
              <div className="t-text">
                <h4>R&D Driven</h4>
                <p>Formulated with organic metabolites and hydrolyzing enzymes.</p>
              </div>
            </div>
            <div className="tech-item" data-aos="fade-up" data-aos-delay="300">
              <HiOutlineShieldCheck className="t-icon" />
              <div className="t-text">
                <h4>CAA Registered</h4>
                <p>Ensuring 100% compliance, export-quality harvests for global markets.</p>
              </div>
            </div>
            <div className="tech-item" data-aos="fade-up" data-aos-delay="500">
              <HiOutlineChartBar className="t-icon" />
              <div className="t-text">
                <h4>Profit Optimized</h4>
                <p>Significantly lower FCR and higher weight gain across all species.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SCIENCE STORY SECTION --- */}
        <section className="science-story section-padding">
          <div className="container">
            <div className="science-grid">
              <div className="science-content" data-aos="fade-right">
                <span className="overline">Few Words About Us</span>
                <h2>Empowering Farmers with <span className="brand-blue">Trusto Biotech Solutions</span></h2>
                <p>
                  Trusto Biotech develops science-led nutritional and biological solutions that improve
                  animal health, farm efficiency, and long-term sustainability. Our formulations are
                  designed to reduce antibiotic dependency while delivering consistent, high-performance
                  results.
                </p>
                <div className="sector-feats">
                  {[
                    { icon: <GiChicken />, title: "Poultry", text: "Gut-focused nutrition that improves feed efficiency, shell quality and resilience." },
                    { icon: <GiShrimp />, title: "Aquaculture", text: "Bio-rational pond and gut care for survival, stability and export-grade harvests." },
                    { icon: <GiCow />, title: "Cattle, Sheep & Pet", text: "Nutrition and liver care for livestock and companion animals." },
                    { icon: <GiCamel />, title: "Camel & Horse", text: "Performance supplements for stamina, recovery and wellbeing." },
                    { icon: <GiPig />, title: "Swine", text: "Digestive and growth solutions for lean meat and productivity." },
                  ].map((f, i) => (
                    <div className="sector-feat" key={f.title} data-aos="fade-up" data-aos-delay={100 + i * 100}>
                      <span className="sector-feat-icon">{f.icon}</span>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="science-image" data-aos="zoom-in">
                <img src="/our-sectors.webp" loading="lazy" decoding="async" alt="Trusto Biotech divisions: Poultry, Aquaculture, Cattle, Sheep & Pet, Camel & Horse and Swine" className="styled-img" />
              </div>
            </div>
          </div>
        </section>

        {/* --- PILLAR DEEP DIVE SECTION --- */}
        <section className="pillar-deep-dive section-padding">
          <div className="container">

            {/* AQUACULTURE HIGH FIDELITY */}
            <section className="pillar-row high-fidelity aqua-edge-to-edge" data-aos="fade-up">
              <div className="pillar-bg-image aqua-bg-fix" style={{ backgroundImage: `url('/aqqq.webp')` }}></div>
              <div className="card-overlay-dark aqua-gradient"></div>
              <div className="full-width-inner">
                <div className="pillar-content-left" data-aos="fade-right" data-aos-delay="200">
                  <div className="proven-badge aqua-text">
                    <span className="badge-line aqua-line-fix"></span>
                    CORE AQUACULTURE SPECIALIZATION
                  </div>
                  <h2>Premium <span className="brand-blue">Aquaculture Supplements</span> and Pond Health Solutions</h2>
                  <p>Focusing on pond balance, health, and feed efficiency using biological solutions—without antibiotics.</p>
                  <div className="compact-stages-grid">
                    <div className="c-stage"><strong>Pond Health:</strong> Stress & disease protection.</div>
                    <div className="c-stage"><strong>Digestion:</strong> Better feed utilization.</div>
                    <div className="c-stage"><strong>Quality:</strong> Uniform size & shell strength.</div>
                  </div>
                  <button className="story-btn-wrapper aqua-btn-theme" onClick={() => navigate('/products/aqua')}>
                    <span className="watch-text">Explore Aquaculture Range</span>
                  </button>
                </div>
              </div>
            </section>

            {/* OUR PRODUCTS: every product, scrolling continuously (pauses on hover) */}
            <section className="premium-product-carousel aqua-carousel-tight">
              <div className="container">
                <div className="carousel-header text-center" data-aos="fade-down">
                  <span className="overline">Our Products</span>
                  <h2>Trusted <span className="brand-blue">Animal Health Solutions</span></h2>
                </div>
              </div>
              <div className="all-products-marquee">
                <div
                  className="all-products-track"
                  style={{ animationDuration: `${ourProducts.length * 3.5}s` }}
                >
                  {[0, 1].map((copy) =>
                    ourProducts.map((prod) => (
                      <button
                        type="button"
                        className="aqua-product-card all-product-card"
                        key={`${copy}-${prod.id}`}
                        onClick={() => navigate(prod.link)}
                        tabIndex={copy === 0 ? 0 : -1}
                        aria-hidden={copy === 1}
                      >
                        <span className="all-product-division">{prod.division}</span>
                        <ProductImage src={prod.image} name={prod.name} className="all-product-img" lazy />
                        <h4>{prod.name}</h4>
                        <span className="all-product-link">View Specification →</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
              <div className="container">
                <div className="aqua-more-btn-wrapper" data-aos="zoom-in">
                  <button className="aqua-more-btn" onClick={() => navigate("/products")}>
                    View All Products ({ourProducts.length})
                  </button>
                </div>
              </div>
            </section>

            {/* POULTRY PILLAR */}
            <section className="pillar-row high-fidelity edge-to-edge" data-aos="fade-up">
              <div className="pillar-bg-image" style={{ backgroundImage: `url('/poultry1.webp')` }}></div>
              <div className="card-overlay-dark"></div>
              <div className="full-width-inner">
                <div className="pillar-content-left" data-aos="fade-right">
                  <div className="proven-badge">
                    <span className="badge-line"></span>
                    PROVEN NUTRITIONAL EXCELLENCE
                  </div>
                  <h2>Achieving Record Results with <span className="brand-blue">Trusto Poultry Solutions</span></h2>
                  <p>Utilizing prebiotics and advanced enzyme technology to enhance flock health and productivity.</p>
                  <div className="compact-stages-grid">
                    <div className="c-stage"><strong>Immunity:</strong> Pre-starter defenses.</div>
                    <div className="c-stage"><strong>FCR:</strong> Nutrient absorption.</div>
                    <div className="c-stage"><strong>Quality:</strong> Layer production.</div>
                  </div>
                  <button className="story-btn-wrapper" onClick={() => navigate('/products/poultry')}>
                    <span className="watch-text">Explore Poultry Range</span>
                  </button>
                </div>
              </div>
            </section>

            {/* SWINE PILLAR */}
            <div className="pillar-row swine-hide" data-aos="fade-up" style={{ padding: '80px 0' }}>
              <div className="pillar-image" data-aos="zoom-in-right">
                <img src="/swarn2.webp" loading="lazy" decoding="async" alt="Swine Science" className="pillar-main-img" />
              </div>
              <div className="pillar-content" data-aos="fade-left">
                <GiPig className="pillar-icon swine-color" />
                <span className="overline">Rapidly Expanding</span>
                <h2>Scientific <span className="brand-purple">Swine Interventions</span></h2>
                <p>Focusing on digestive health and antibiotic-free productivity through enzyme technology.</p>
                <div className="pillar-stages">
                  <div className="p-stage"><strong>Digestion:</strong> Balance microflora.</div>
                  <div className="p-stage"><strong>Growth:</strong> Amino acid optimization.</div>
                  <div className="p-stage"><strong>Sustainability:</strong> Lower environmental load.</div>
                </div>
                <button className="main-btn" onClick={() => navigate('/products/swine')}>Explore Swine Range</button>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="final-conversion-footer">
          <div className="container">
            <div className="cta-content-card" data-aos="zoom-in">
              <div className="cta-text">
                <span className="overline dark">Get Started Today</span>
                <h2>Partner with <span className="brand-emerald">Trusto Biotech</span></h2>
                <p>Our technical experts are ready to design a science-backed nutrition plan tailored for you.</p>
              </div>
              <div className="cta-actions-row">
                <button className="cta-primary-btn" onClick={() => navigate('/contact')}>
                  Consult an Expert <HiArrowRight />
                </button>
                <div className="cta-support-info">
                  <HiOutlineUserGroup className="support-icon" />
                  <div>
                    <strong>Technical Support</strong>
                    <span>On-field consultations available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Home;
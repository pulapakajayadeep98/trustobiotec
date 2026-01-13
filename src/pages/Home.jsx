import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiShrimp, GiChicken, GiPig } from 'react-icons/gi';
import { 
  HiArrowRight, 
  HiOutlineShieldCheck, 
  HiOutlineLightBulb, 
  HiOutlineChartBar, 
  HiOutlineBeaker, 
  HiOutlineStar,
  HiChevronLeft, 
  HiChevronRight,
  HiOutlineUserGroup 
} from 'react-icons/hi';
import './Home.css';
const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
const slides = [
  {
    id: 1,
    title: "Precision Aquaculture ",

    tagline: "Advancing shrimp and fish health through stage-wise nutrition and pond ecosystem management.",
    image: "/aqua1.png",
    link: "/products/aqua",
    theme: "aqua-theme" // Uses aqua-blue gradient
  },
  {
    id: 2,
    title: "Resilient Poultry Nutrition Systems",

    tagline: "Comprehensive strategies for mycotoxin management, gut integrity, and peak layer performance.",
    image: "/poultry.png", 
    link: "/products/poultry",
    theme: "poultry-theme" // Uses poultry-red/brown gradient
  },
  {
    id: 3,
    title: "Optimized Swine Growth & FCR",

    tagline: "Scientific swine farming solutions focusing on digestive health and antibiotic-free productivity.",
    image: "/swarn.png", 
    link: "/products/swine",
    theme: "swine-theme" // Uses swine-orange/dark gradient
  }
];

  // Product Scroller Data
const productLogos = [
  { name: "SEEDGEL aqua", img: "/seedgel.png", link: "/products/aqua?id=1" },
  { name: "GRO KWIK PLUS", img: "/grokwik.png", link: "/products/aqua?id=2" },
  { name: "MOULTING GEL", img: "/moultinggel.png", link: "/products/aqua?id=3" },
  { name: "GUTGEL", img: "/Gutgel.png", link: "/products/aqua?id=6" },
  { name: "ODO-Q", img: "/odoq.png", link: "/products/aqua?id=8" },
  { name: "T-SHELL", img: "/T-SHELL.png", link: "/products/aqua?id=9" },
  { name: "G-GILL", img: "/ggill.png", link: "/products/aqua?id=10" },
  { name: "Q-POND", img: "/Qpond.png", link: "/products/aqua?id=16" },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-wrapper">
      {/* --- PREMIUM HERO CAROUSEL --- */}
    {/* --- PREMIUM HERO CAROUSEL --- */}
{/* --- PREMIUM HERO CAROUSEL --- */}
{/* --- PREMIUM HERO CAROUSEL --- */}
<section className="premium-hero">
  {slides.map((slide, index) => (
    <div key={slide.id} className={`hero-slide ${slide.theme} ${index === currentSlide ? 'active' : ''}`}>
      
      <div className="hero-split-container">
        
        {/* Matter Side */}
        <div className="hero-text-side">
          <div className="hero-content-wrapper">
            <div className="status-badge">
              <span className="pulse-dot"></span> 100% Antibiotic Free
            </div>
            <span className="hero-sub">{slide.subtitle}</span>
            <h1>{slide.title}</h1>
            <p>{slide.tagline}</p>
            <div className="hero-btns">
              <button className="main-btn" onClick={() => navigate(slide.link)}>
                Explore Solutions <HiArrowRight />
              </button>
              <button className="alt-btn" onClick={() => navigate('/about')}>
                The Trusto Legacy
              </button>
            </div>
          </div>
        </div>

        {/* Image Side - Now perfectly aligned */}
        <div 
          className="hero-image-side" 
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>

      </div>

    </div>
  ))}
</section>
      {/* --- TECHNICAL ADVANTAGE BAR --- */}
      <section className="tech-bar-section">
        <div className="tech-bar-container">
          <div className="tech-item">
            <HiOutlineBeaker className="t-icon" />
            <div className="t-text">
              <h4>R&D Driven</h4>
              <p>Formulated with organic metabolites and hydrolyzing enzymes.</p>
            </div>
          </div>
          <div className="tech-item">
            <HiOutlineShieldCheck className="t-icon" />
            <div className="t-text">
              <h4>CAA Registered</h4>
              <p>Ensuring 100% compliant, export-quality harvests for global markets.</p>
            </div>
          </div>
          <div className="tech-item">
            <HiOutlineChartBar className="t-icon" />
            <div className="t-text">
              <h4>Profit Optimized</h4>
              <p>Significantly lower FCR and higher weight gain across all species.</p>
            </div>
          </div>
        </div>
      </section>
{/* --- NEW: THE SCIENCE STORY SECTION --- */}
<section className="science-story section-padding">
  <div className="container">
    <div className="science-grid">
      <div className="science-content" data-aos="fade-right">
        <span className="overline">The Science of Trust</span>
        <h2>Bridging the Gap Between <span className="brand-blue">Biology & Profitability</span></h2>
        <p>
          At Trusto Biotech, we don't just sell feed additives; we engineer biological 
          interventions. By utilizing <strong>organic metabolites</strong> and <strong>hydrolyzing enzymes</strong>, 
          we strengthen the animal's natural defenses, allowing farmers to eliminate 
          antibiotics while actually <em>increasing</em> their weight gain and FCR.
        </p>
        <div className="science-features">
          <div className="s-feat"><strong>Bio-Availability:</strong> Nutrients absorbed 30% faster for quicker growth cycles.</div>
          <div className="s-feat"><strong>Immune Priming:</strong> Proactive defense against EMS, RMS, and gut-related stress.</div>
        </div>
      </div>
      <div className="science-image" data-aos="fade-left">
        <img 
          src="/trus.png" 
          alt="Biotech Research Lab" 
          className="styled-img" 
        />
      </div>
    </div>
  </div>
</section>
   {/* --- 4. THE PILLAR DEEP DIVE (EXTRAORDINARY VERSION) --- */}
<section className="pillar-deep-dive section-padding">
  <div className="container">
    
    {/* AQUACULTURE PILLAR */}
    <div className="pillar-row" data-aos="fade-up">
      <div className="pillar-image">
        <img src="/aqua.png" alt="Aquaculture Excellence" className="pillar-main-img" />
        <div className="experience-tag">Since 2012</div>
      </div>
      <div className="pillar-content">
        <GiShrimp className="pillar-icon aqua-color" />
        <span className="overline">Core Specialization</span>
        <h2>Aquaculture <span className="brand-blue">Ecosystem Management</span></h2>
        <p>
          We provide stage-wise nutrition and biological pond management to ensure 
          high survival rates and export-quality harvests. Our focus is on the 
          balance between the animal and its environment.
        </p>
        <div className="pillar-stages">
          <div className="p-stage"><strong>01. Seed:</strong> Stress resistance & early survival.</div>
          <div className="p-stage"><strong>02. Growth:</strong> FCR optimization & uniform moulting.</div>
          <div className="p-stage"><strong>03. Health:</strong> Gut & Hepatopancreas protection.</div>
        </div>
        <button className="main-btn" onClick={() => navigate('/products/aqua')}>Explore Aqua Range</button>
      </div>
    </div>

    {/* POULTRY PILLAR (REVERSED) */}
    <div className="pillar-row reverse" data-aos="fade-up">
      <div className="pillar-content">
        <GiChicken className="pillar-icon poultry-color" />
        <span className="overline">35+ Years Experience</span>
        <h2>Poultry <span className="brand-red">Nutritional Resilience</span></h2>
        <p>
          With decades of field experience, we address modern poultry challenges 
          through non-antibiotic strategies that focus on long-term productivity 
          and shell integrity.
        </p>
        <div className="pillar-stages">
          <div className="p-stage"><strong>Pre-Starter:</strong> Chick immunity & bone development.</div>
          <div className="p-stage"><strong>Grower:</strong> Maximize nutrient absorption.</div>
          <div className="p-stage"><strong>Layer:</strong> Shell quality & peak production.</div>
        </div>
        <button className="main-btn" onClick={() => navigate('/products/poultry')}>Explore Poultry Range</button>
      </div>
      <div className="pillar-image">
        <img src="/poultry.png" alt="Poultry Performance" className="pillar-main-img" />
      </div>
    </div>

    {/* SWINE PILLAR */}
    <div className="pillar-row" data-aos="fade-up">
      <div className="pillar-image">
        <img src="/swarn.png" alt="Swine Science" className="pillar-main-img" />
      </div>
      <div className="pillar-content">
        <GiPig className="pillar-icon swine-color" />
        <span className="overline">Rapidly Expanding</span>
        <h2>Scientific <span className="brand-purple">Swine Interventions</span></h2>
        <p>
          Our scientific swine farming solutions focus on digestive health and 
          antibiotic-free productivity enhancement through advanced enzyme 
          technology.
        </p>
        <div className="pillar-stages">
          <div className="p-stage"><strong>Digestion:</strong> Balance microflora & prevent stress.</div>
          <div className="p-stage"><strong>Growth:</strong> Lean meat & amino acid optimization.</div>
          <div className="p-stage"><strong>Sustainability:</strong> Lower nitrogen environmental load.</div>
        </div>
        <button className="main-btn" onClick={() => navigate('/products/swine')}>Explore Swine Range</button>
      </div>
    </div>

  </div>
</section>
{/* --- 5. CONTINUOUS INTERACTIVE PRODUCT CAROUSEL --- */}
<section className="premium-product-carousel section-padding">
  <div className="container">
    <div className="carousel-header text-center" data-aos="fade-up">
      <span className="overline">Our Formulations</span>
      <h2>Precision <span className="brand-blue">Biotech Range</span></h2>
      <p>Scientifically engineered solutions for high-performance farming.</p>
    </div>

    <div className="infinite-scroller">
      <div className="scroller-track">
        {/* We double the array to create a seamless infinite loop */}
        {[...productLogos, ...productLogos].map((prod, i) => (
          <div key={i} className="product-glass-card" onClick={() => navigate(prod.link)}>
            <div className="product-img-wrapper">
              <img src={prod.img} alt={prod.name} className="product-main-img" />
            </div>
            <div className="product-info">
              <h4>{prod.name}</h4>
              <span className="view-details">View Specification <HiArrowRight /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


 

<section className="final-conversion-footer">
  <div className="cta-pattern-overlay"></div>
  <div className="container">
    <div className="cta-content-card" data-aos="zoom-in">
      <div className="cta-text">
        <span className="overline dark">Get Started Today</span>
        <h2>Partner with <span className="brand-emerald">Trusto Biotech</span></h2>
        <p>
          Whether you are an independent farmer or a large-scale integrator, our 
          technical experts are ready to design a science-backed nutrition plan 
          tailored to your farm's specific challenges.
        </p>
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
  );
};

export default Home;
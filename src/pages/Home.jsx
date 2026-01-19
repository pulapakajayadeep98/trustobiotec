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
    title: "Precision Aquaculture",
    tagline: "Science-driven nutrition for healthier shrimp and fish.",
    image: "/shrimp.png",
    link: "/products/aqua",
    theme: "aqua-theme"
  },
  {
    id: 2,
    title: "Poultry Nutrition",
    tagline: "Advanced feed solutions for gut health and performance.",
    image: "/poultry2.png",
    link: "/products/poultry",
    theme: "poultry-theme"
  },
  {
    id: 3,
    title: "Healthy Swine Growth",
    tagline: "Smarter nutrition for better growth and feed efficiency.",
    image: "/swarn1.png",
    link: "/products/swine",
    theme: "swine-theme"
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
        <span className="overline">Few Words About Us</span>

        <h2>
         Empowering Farmers with <span className="brand-blue">Trusto Biotech Solutions</span>

        </h2>
        
        <p>
          Trusto Biotech develops science-led nutritional and biological solutions that improve
          animal health, farm efficiency, and long-term sustainability. Our formulations are
          designed to reduce antibiotic dependency while delivering consistent, high-performance
          results across modern farming systems.
        </p>

        {/* High-level sector positioning (no repetition) */}
        <div className="science-features">
          <div className="s-feat">
            <strong>Aquaculture</strong>
            Bio-rational ecosystem management focused on survival, stability, and export-grade harvests.
          </div>

          <div className="s-feat">
            <strong>Poultry</strong>
            Gut-focused nutritional strategies that enhance feed efficiency, shell quality, and flock resilience.
          </div>

          <div className="s-feat">
            <strong>Swine</strong>
            Enzyme-driven digestive and growth solutions supporting lean meat quality and antibiotic-free productivity.
          </div>
        </div>
      </div>

      <div className="science-image" data-aos="fade-left">
        <img 
          src="/trus.png" 
          alt="Trusto Biotech Research" 
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
 {/* AQUACULTURE + PRODUCTS FLOW */}
<section className="aqua-flow">

  {/* AQUACULTURE PILLAR */}
  <section className="pillar-row high-fidelity aqua-dominance" data-aos="fade-up">
    <div className="pillar-image-half">
      <div
        className="pillar-bg-image aqua-bg"
        style={{ backgroundImage: `url('/shrimp.png')` }}
      ></div>
      <div className="experience-tag-premium">Since 2012</div>
    </div>

    <div className="pillar-content-half">
      <div className="content-inner">
        <div className="proven-badge aqua">
          <span className="badge-line aqua-line"></span>
          CORE AQUACULTURE SPECIALIZATION
        </div>

        <h2>
          Building Healthier Ponds with{" "}
          <span className="brand-blue">Trusto Aquaculture Solutions</span>
        </h2>

        <p>
          Aquaculture is where Trusto Biotech’s approach comes to life. We focus on
          pond balance, animal health, and feed efficiency using biological
          solutions that support survival, growth, and harvest quality—without
          antibiotics.
        </p>

        <div className="technical-grid-aqua">
          <div className="tech-box">
            <GiShrimp className="tech-icon" />
            <div>
              <strong>Pond Health:</strong>
              <span>Protection against stress, disease, and imbalance.</span>
            </div>
          </div>

          <div className="tech-box">
            <HiOutlineBeaker className="tech-icon" />
            <div>
              <strong>Better Digestion:</strong>
              <span>Improved feed utilization and growth.</span>
            </div>
          </div>

          <div className="tech-box">
            <HiOutlineChartBar className="tech-icon" />
            <div>
              <strong>Harvest Quality:</strong>
              <span>Uniform size, shell strength, and survival.</span>
            </div>
          </div>
        </div>

        <button
          className="explore-btn-aqua"
          onClick={() => navigate("/products/aqua")}
        >
          Explore Aquaculture Range
        </button>
      </div>
    </div>
  </section>

  {/* AQUACULTURE PRODUCTS */}
  <section className="premium-product-carousel aqua-carousel">
    <div className="container">
      <div className="carousel-header text-center">
        <span className="overline">Aquaculture Products</span>
        <h2>
          Trusted <span className="brand-blue">Aqua Solutions</span>
        </h2>
      </div>

<div className="aqua-product-scroll">
  <div className="aqua-scroll-track">
    {[...productLogos].map((prod, i) => (
      <div className="aqua-product-card" key={i}>
        <img src={prod.img} alt={prod.name} />
        <h4>{prod.name}</h4>
        <span>View Specification →</span>
      </div>
    ))}
  </div>
</div>
<div className="aqua-more-btn-wrapper">
  <button
    className="aqua-more-btn"
    onClick={() => navigate("/products/aqua")}
  >
    View More Aquaculture Products
  </button>
</div>

    </div>
  </section>

</section>


{/* POULTRY PILLAR - FULL WIDTH EDGE-TO-EDGE */}
{/* POULTRY PILLAR - HIGH FIDELITY EDGE-TO-EDGE */}
<section className="pillar-row high-fidelity edge-to-edge" data-aos="fade-up">
  {/* Full width background image layer */}
  <div className="pillar-bg-image" style={{ backgroundImage: `url('/poultry1.png')` }}></div>
  <div className="card-overlay-dark"></div>

  <div className="full-width-inner">
    <div className="pillar-content-left">
      <div className="proven-badge">
         <span className="badge-line"></span>
         PROVEN NUTRITIONAL EXCELLENCE
      </div>
      
      <h2>Achieving Record Results with <span className="brand-blue">Trusto Poultry Solutions</span></h2>
      
      <p>
        Working with poultry integrators for years, our team utilizes organic acids, 
        prebiotics, and advanced enzyme technology to enhance egg quality and flock health.
      </p>

      {/* Horizontal Compact Stages */}
      <div className="compact-stages-grid">
        <div className="c-stage"><strong>Immunity:</strong> Pre-starter defenses.</div>
        <div className="c-stage"><strong>FCR:</strong> Nutrient absorption.</div>
        <div className="c-stage"><strong>Quality:</strong> Layer production.</div>
      </div>

      {/* Play Button Wrapper */}
      <div className="story-btn-wrapper" onClick={() => navigate('/products/poultry')}>
        <span className="watch-text">Explore Poultry Range</span>
     
      </div>
    </div>
  </div>
</section>
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
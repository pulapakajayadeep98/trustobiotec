import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { HiPlus, HiMinus, HiAdjustments, HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import './Products.css';

const allProducts = {
  AQUA: [
    { id: 1, name: "SEEDGEL aqua", price: 1200, tagline: "Excellent Immunity & Survival", category: "IMMUNITY", benefits: ["Prevents Early Mortality (EMS)", "Improves immunity", "Keeps the Hepatopancreas very healthy"], composition: "Organic Metabolites, Amino acids, Hydrolysing Enzymes, Citric Acid", dosage: "1lt per acre once a week or 20ml/kg feed" },
    { id: 2, name: "GRO KWIK PLUS", price: 1500, tagline: "Excellent Growth Performance", category: "GROWTH", benefits: ["Improves Feed Intake", "Maintains Immunity", "Natural Moulting"], composition: "Organic Metabolites, Amino Acids, Hydrolysing Enzymes", dosage: "20g per kg feed, four meals daily" },
    { id: 3, name: "MOULTING GEL", price: 1100, tagline: "Moulting & Loose Shell Control", category: "GROWTH", benefits: ["Regulates moulting", "Increases feed intake", "Prevents loose shell"], composition: "Digested protein, organic metabolites, Enzymes", dosage: "20ml per kg feed daily" },
    { id: 4, name: "WHITE F", price: 2500, tagline: "Solution for White Faeces", category: "HEALTH", benefits: ["Protects from White Faeces", "Keeps GUT healthy", "Improves FCR"], composition: "Organic Metabolites, Volatile fatty acids", dosage: "5lt per acre for 3 days" },
    { id: 5, name: "SUPERSAFE (SS)", price: 3200, tagline: "EMS & RMS Support", category: "HEALTH", benefits: ["Good Immune booster", "Stress reliever", "Uniform growth"], composition: "Organic metabolites, Liver stimulants, Citric acid", dosage: "1-2lt per acre weekly" },
    { id: 6, name: "GUTGEL", price: 1400, tagline: "White Gut Prevention", category: "HEALTH", benefits: ["Protects from White Gut", "Fast growth", "Improves intake"], composition: "Organic Metabolites, Citric acid", dosage: "20ml per kg feed for 5 days" },
    { id: 7, name: "CONVERTAL PLUS", price: 2800, tagline: "EHP & Feed Utilisation Support", category: "HEALTH", benefits: ["Support against EHP", "Reduce toxins", "Good FCR"], composition: "Liver Stimulants, Hydrolysing Enzymes", dosage: "2lt per acre or 20ml/kg feed" },
    { id: 8, name: "ODO-Q", price: 1100, tagline: "Ammonia Control", category: "POND QUALITY", benefits: ["Controls toxic Ammonia", "Improves water quality", "Healthy pond"], composition: "Probiotics and Natural Extracts", dosage: "1-2lt per acre" },
    { id: 9, name: "T-SHELL", price: 1300, tagline: "Loose Shell & White Muscle Protection", category: "GROWTH", benefits: ["Protects from Loose Shell", "Prevents white muscle"], composition: "Hydrolyzing enzymes, Volatile fatty acids", dosage: "20ml per kg feed for 3-5 days" },
    { id: 10, name: "G-GILL", price: 1600, tagline: "Healthy Gills", category: "HEALTH", benefits: ["Against black/red gill", "Eliminates parasites"], composition: "Antimicrobial agents", dosage: "2lt per acre for 3-5 days" },
    { id: 11, name: "ANTI-GILLFLUK", price: 1700, tagline: "External Parasite Protection", category: "HEALTH", benefits: ["Controls gill fluke", "Eliminates external bacteria"], composition: "Antimicrobial and anti fungal agents", dosage: "2lt per acre for 2-3 days" },
    { id: 12, name: "TRUSTOGARD", price: 1900, tagline: "Growth & Protection for Shrimp", category: "GROWTH", benefits: ["Protects Hepatopancreas", "Anti protozoan", "Better survival"], composition: "Anti microbial, Enzymes, Digested protein", dosage: "20ml per kg feed for 5 days" },
    { id: 13, name: "WELPOND", price: 2200, tagline: "Shrimp Friendly Pond", category: "POND QUALITY", benefits: ["Healthy pond condition", "Reduce toxicity", "Better immunity"], composition: "Microbial Mixtures, Anti fungal properties", dosage: "5lt per acre every 15 days" },
    { id: 14, name: "GUTGEL Improved", price: 1600, tagline: "White Gut Ultimate Solution", category: "HEALTH", benefits: ["Superior gut protection", "Better FCR", "Body weight gain"], composition: "Organic Metabolites, Citric acid", dosage: "5lt per acre for 3 days" },
    { id: 15, name: "TRUSTOGARD Fish", price: 1800, tagline: "Protection & Growth for Fish", category: "GROWTH", benefits: ["Prevents red disease", "Controls argulus/slime", "Stress resistance"], composition: "Anti microbial, anti fungal, enzymes", dosage: "1lt per acre or 2-3lt/ton feed" },
    { id: 16, name: "Q-POND", price: 1400, tagline: "Water Quality Improver", category: "POND QUALITY", benefits: ["Improves water colour", "Promotes plankton", "Reduces Vibrio"], composition: "Microbial Mixture", dosage: "1-3lt per acre" },
    { id: 17, name: "SAN-Q", price: 1200, tagline: "Effective Water Sanitizer", category: "POND QUALITY", benefits: ["Rapid biocidal action", "Algae & fungus control", "Hygienic water"], composition: "Alkylbenzyl dimethyl ammonium chloride", dosage: "As directed by consultant" },
    { id: 18, name: "C-POND", price: 1500, tagline: "Clean & Good Pond", category: "POND QUALITY", benefits: ["Plankton growth", "Reduces bacterial load", "Stress support"], composition: "Microbial mixtures, Anti bacterial agents", dosage: "3lt per acre every 10 days" },
    { id: 19, name: "V-KWIK", price: 1400, tagline: "Support Against Vibrio", category: "HEALTH", benefits: ["Eliminates pond toxicity", "Vibrio support", "Better growth"], composition: "Antimicrobial agents, Pond essentials", dosage: "1-2lt per acre for 3-5 days" },
    { id: 20, name: "ANTITOX PLUS aqua", price: 2300, tagline: "Detoxification & Liver Tonic", category: "HEALTH", benefits: ["Improves Liver/Kidney", "Mycotoxin protection", "Gut absorption"], composition: "Organic Metabolites, Diuretics, Enzymes", dosage: "2-3lt per ton feed" },
    { id: 21, name: "TRUSTO MIN", price: 950, tagline: "Balanced Mineral Mixture", category: "NUTRITION", benefits: ["Moulting frequency", "Shell formation", "Growth rate"], composition: "Calcium, Potassium, Magnesium", dosage: "5-10kg per acre" },
    { id: 22, name: "LIVAR PLUS Aqua", price: 1250, tagline: "Feed Intake Improver", category: "NUTRITION", benefits: ["Liver/Hepatopancreas activity", "Digestibility", "Weight gain"], composition: "Hydrolyzing Enzymes, Citric Acid", dosage: "10ml per kg feed" },
    { id: 23, name: "TRUSTO PS", price: 1150, tagline: "Pond Probiotic", category: "POND QUALITY", benefits: ["Improves water color", "Control H2S gases", "pH balancing"], composition: "Different Microbial Strains", dosage: "5lt per hectare" }
  
  ],
  POULTRY: [
    { id: 101, name: "BROILER-VITA", price: 1800, tagline: "Maximum Weight Gain", category: "GROWTH", benefits: ["Rapid growth", "Bone strength"], composition: "Multivitamins", dosage: "5ml/lt" }
  ],
  SWINE: [
    { id: 201, name: "PIG-GRO", price: 2100, tagline: "Healthy Lean Meat", category: "HEALTH", benefits: ["Better FCR", "Lean meat"], composition: "Organic Acids", dosage: "10g/kg" }
  ]
};

const Products = ({ cart, updateQty }) => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [activeSector, setActiveSector] = useState('AQUA');
  const [view, setView] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Carousel State
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSlides = [
    { id: 1, img: "https://images.unsplash.com/photo-1660680300128-f3436f8fa072?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Aquaculture Excellence", subtitle: "Boost your pond productivity with Seedgel" },
    { id: 2, img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200", title: "Poultry Nutrition", subtitle: "Maximum growth performance for your birds" },
    { id: 3, img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200", title: "Swine Health Solutions", subtitle: "Premium supplements for lean meat production" }
  ];

  // Filters & Sorting
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCat, setSelectedCat] = useState('All');
  const [priceRange, setPriceRange] = useState(5000);
  const searchQuery = searchParams.get('search') || '';

  // Auto-scroll Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (category) {
      const upperCategory = category.toUpperCase();
      if (allProducts[upperCategory]) {
        setActiveSector(upperCategory);
        setView('grid');
      }
    }
  }, [category]);

  const categories = useMemo(() => {
    const cats = allProducts[activeSector].map(p => p.category);
    return ['All', ...new Set(cats)];
  }, [activeSector]);

  const filteredProducts = useMemo(() => {
    const allItems = searchQuery 
      ? [...allProducts.AQUA, ...allProducts.POULTRY, ...allProducts.SWINE] 
      : allProducts[activeSector];
    
    const searchTerm = searchQuery.toLowerCase().trim();

    let results = allItems.filter(p => {
      const matchesSearch = searchTerm ? (p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm)) : true;
      const matchesCat = selectedCat === 'All' ? true : p.category === selectedCat;
      const matchesPrice = p.price <= priceRange;
      return matchesSearch && matchesCat && matchesPrice;
    });

    if (sortBy === 'price-low') results.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') results.sort((a, b) => b.price - a.price);
    if (sortBy === 'name') results.sort((a, b) => a.name.localeCompare(b.name));

    return results;
  }, [activeSector, searchQuery, selectedCat, priceRange, sortBy]);

  return (
    <div className="shop-wrapper ecommerce-layout">
      {/* 1. HERO CAROUSEL */}
      {view === 'grid' && !searchQuery && (
        <div className="hero-carousel">
          <div className="hero-slide" style={{ backgroundImage: `url(${heroSlides[heroIndex].img})` }}>
            <div className="hero-overlay">
              <div className="hero-text-content">
                <h1>{heroSlides[heroIndex].title}</h1>
                <p>{heroSlides[heroIndex].subtitle}</p>
                <button className="hero-cta">Shop Now</button>
              </div>
            </div>
          </div>
          <button className="carousel-control prev" onClick={() => setHeroIndex((heroIndex - 1 + heroSlides.length) % heroSlides.length)}><HiChevronLeft /></button>
          <button className="carousel-control next" onClick={() => setHeroIndex((heroIndex + 1) % heroSlides.length)}><HiChevronRight /></button>
          <div className="carousel-dots">
            {heroSlides.map((_, i) => (
              <span key={i} className={`dot ${i === heroIndex ? 'active' : ''}`} onClick={() => setHeroIndex(i)}></span>
            ))}
          </div>
        </div>
      )}

      {/* 2. REFINED SECTOR NAVIGATION */}
      {view === 'grid' && (
        <div className="sector-header-nav">
          <div className="sector-container">
            {['AQUA', 'POULTRY', 'SWINE'].map(s => (
              <button 
                key={s} 
                className={`sector-btn ${activeSector === s ? 'active' : ''}`} 
                onClick={() => { setActiveSector(s); setSelectedCat('All'); }}
              >
                <span className="icon">{s === 'AQUA' ? '🐟' : s === 'POULTRY' ? '🐔' : '🐷'}</span>
                {s === 'AQUA' ? 'AQUACULTURE' : s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="shop-container">
        {/* 3. SIDEBAR FILTERS */}
        {view === 'grid' && (
          <aside className="filter-sidebar">
            <div className="filter-group">
              <h3><HiAdjustments /> Filters</h3>
              <div className="filter-section">
                <h4>CATEGORIES</h4>
                {categories.map(cat => (
                  <label key={cat} className="custom-checkbox">
                    <input 
                      type="radio" 
                      name="cat" 
                      checked={selectedCat === cat}
                      onChange={() => setSelectedCat(cat)} 
                    />
                    <span className="checkmark"></span>
                    {cat}
                  </label>
                ))}
              </div>

              <div className="filter-section">
                <h4>PRICE RANGE (UP TO ₹{priceRange})</h4>
                <div className="range-container">
                  <input 
                    type="range" 
                    min="500" 
                    max="5000" 
                    step="100" 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  />
                  <div className="range-values"><span>₹500</span><span>₹5000</span></div>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* 4. PRODUCT GRID AREA */}
        <main className="product-content">
          {view === 'grid' && (
            <>
              <div className="results-bar">
                <p className="found-count">{filteredProducts.length} Products Found</p>
                <div className="sort-group">
                  <span>Sort by:</span>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">A - Z</option>
                  </select>
                </div>
              </div>

              <div className="amazon-grid">
                {filteredProducts.map(p => (
                  <div key={p.id} className="grid-item card-hover">
                    <div className="img-box" onClick={() => { setSelectedProduct(p); setView('hero'); window.scrollTo(0,0); }}>
                      <img src="/trust1.png" alt={p.name} />
                      <div className="quick-view">Quick View</div>
                    </div>
                    <div className="item-meta">
                      <span className="cat-label">{p.category}</span>
                      <h3 onClick={() => { setSelectedProduct(p); setView('hero'); }}>{p.name}</h3>
                      <p className="grid-price">₹{p.price}.00</p>
                      
                      {cart[p.id] > 0 ? (
                        <div className="qty-row-alt">
                          <button className="qty-btn" onClick={() => updateQty(p.id, -1)}>-</button>
                          <span className="qty-val">{cart[p.id]}</span>
                          <button className="qty-btn" onClick={() => updateQty(p.id, 1)}>+</button>
                        </div>
                      ) : (
                        <button className="add-btn-premium" onClick={() => updateQty(p.id, 1)}>Add to Cart</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 5. PRODUCT DETAIL VIEW */}
          {view === 'hero' && selectedProduct && (
            <div className="modern-hero-view">
              <nav className="breadcrumb">
                <span onClick={() => setView('grid')}>Products</span> <HiChevronRight /> <span>{activeSector}</span> <HiChevronRight /> <strong>{selectedProduct.name}</strong>
              </nav>
              <div className="hero-flex">
                <div className="hero-gallery"><img src="/trust1.png" alt={selectedProduct.name} /></div>
                <div className="hero-details-panel">
                  <span className="badge-sector">{activeSector} DIVISION</span>
                  <h1>{selectedProduct.name}</h1>
                  <p className="tagline-large">{selectedProduct.tagline}</p>
                  <div className="price-tag-large">₹{selectedProduct.price}.00</div>
                  <div className="purchase-controls">
                    {cart[selectedProduct.id] > 0 ? (
                      <div className="qty-master">
                        <button onClick={() => updateQty(selectedProduct.id, -1)}><HiMinus /></button>
                        <input type="text" readOnly value={cart[selectedProduct.id]} />
                        <button onClick={() => updateQty(selectedProduct.id, 1)}><HiPlus /></button>
                      </div>
                    ) : (
                      <button className="buy-now-btn" onClick={() => updateQty(selectedProduct.id, 1)}>Add To Cart</button>
                    )}
                  </div>
                  <div className="product-specs">
                    <div className="spec-card"><h5>Benefits</h5><ul>{selectedProduct.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul></div>
                    <div className="spec-card"><h5>Composition</h5><p>{selectedProduct.composition}</p></div>
                    <div className="spec-card"><h5>Dosage</h5><p>{selectedProduct.dosage}</p></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { HiPlus, HiMinus, HiAdjustments, HiChevronRight } from 'react-icons/hi';
import './Products.css';

const allProducts = {
  AQUA: [
    { 
      id: 1, 
      name: "SEEDGEL aqua", 
      image: "/seedgel.png", // Unique path
      price: 1200, 
      tagline: "Excellent Immunity & Survival", 
      category: "IMMUNITY", 
      benefits: ["Prevents Early Mortality (EMS)", "Improves immunity", "Keeps the Hepatopancreas very healthy"], 
      composition: "Organic Metabolites, Amino acids, Hydrolysing Enzymes, Citric Acid", 
      dosage: "1lt per acre once a week or 20ml/kg feed" 
    },
    { 
      id: 2, 
      name: "GRO KWIK PLUS", 
      image: "/grokwik.png", 
      price: 1500, 
      tagline: "Excellent Growth Performance", 
      category: "GROWTH", 
      benefits: ["Improves Feed Intake", "Maintains Immunity", "Natural Moulting"], 
      composition: "Organic Metabolites, Amino Acids, Hydrolysing Enzymes", 
      dosage: "20g per kg feed, four meals daily" 
    },
    { 
      id: 3, 
      name: "MOULTING GEL", 
      image: "/moultinggel.png", 
      price: 1100, 
      tagline: "Moulting & Loose Shell Control", 
      category: "GROWTH", 
      benefits: ["Regulates moulting", "Increases feed intake", "Prevents loose shell"], 
      composition: "Digested protein, organic metabolites, Enzymes", 
      dosage: "20ml per kg feed daily" 
    },
    { 
      id: 4, 
      name: "WHITE F", 
      image: "/images/aqua/white-f.png", 
      price: 2500, 
      tagline: "Solution for White Faeces", 
      category: "HEALTH", 
      benefits: ["Protects from White Faeces", "Keeps GUT healthy", "Improves FCR"], 
      composition: "Organic Metabolites, Volatile fatty acids", 
      dosage: "5lt per acre for 3 days" 
    },
    { 
      id: 5, 
      name: "SUPERSAFE (SS)", 
      image: "/images/aqua/supersafe.png", 
      price: 3200, 
      tagline: "EMS & RMS Support", 
      category: "HEALTH", 
      benefits: ["Good Immune booster", "Stress reliever", "Uniform growth"], 
      composition: "Organic metabolites, Liver stimulants, Citric acid", 
      dosage: "1-2lt per acre weekly" 
    },
    { 
      id: 6, 
      name: "GUTGEL", 
      image: "/Gutgel.png", 
      price: 1400, 
      tagline: "White Gut Prevention", 
      category: "HEALTH", 
      benefits: ["Protects from White Gut", "Fast growth", "Improves intake"], 
      composition: "Organic Metabolites, Citric acid", 
      dosage: "20ml per kg feed for 5 days" 
    },
    { 
      id: 7, 
      name: "CONVERTAL PLUS", 
      image: "/images/aqua/convertal.png", 
      price: 2800, 
      tagline: "EHP & Feed Utilisation Support", 
      category: "HEALTH", 
      benefits: ["Support against EHP", "Reduce toxins", "Good FCR"], 
      composition: "Liver Stimulants, Hydrolysing Enzymes", 
      dosage: "2lt per acre or 20ml/kg feed" 
    },
    { 
      id: 8, 
      name: "ODO-Q", 
      image: "/odoq.png", 
      price: 1100, 
      tagline: "Ammonia Control", 
      category: "POND QUALITY", 
      benefits: ["Controls toxic Ammonia", "Improves water quality", "Healthy pond"], 
      composition: "Probiotics and Natural Extracts", 
      dosage: "1-2lt per acre" 
    },
    { 
      id: 9, 
      name: "T-SHELL", 
      image: "/T-SHELL.png", 
      price: 1300, 
      tagline: "Loose Shell & White Muscle Protection", 
      category: "GROWTH", 
      benefits: ["Protects from Loose Shell", "Prevents white muscle"], 
      composition: "Hydrolyzing enzymes, Volatile fatty acids", 
      dosage: "20ml per kg feed for 3-5 days" 
    },
    { 
      id: 10, 
      name: "G-GILL", 
      image: "/ggill.png", 
      price: 1600, 
      tagline: "Healthy Gills", 
      category: "HEALTH", 
      benefits: ["Against black/red gill", "Eliminates parasites"], 
      composition: "Antimicrobial agents", 
      dosage: "2lt per acre for 3-5 days" 
    },
    { 
      id: 11, 
      name: "ANTI-GILLFLUK", 
      image: "/images/aqua/anti-gillfluk.png", 
      price: 1700, 
      tagline: "External Parasite Protection", 
      category: "HEALTH", 
      benefits: ["Controls gill fluke", "Eliminates external bacteria"], 
      composition: "Antimicrobial and anti fungal agents", 
      dosage: "2lt per acre for 2-3 days" 
    },
    { 
      id: 12, 
      name: "TRUSTOGARD", 
      image: "/images/aqua/trustogard-aqua.png", 
      price: 1900, 
      tagline: "Growth & Protection for Shrimp", 
      category: "GROWTH", 
      benefits: ["Protects Hepatopancreas", "Anti protozoan", "Better survival"], 
      composition: "Anti microbial, Enzymes, Digested protein", 
      dosage: "20ml per kg feed for 5 days" 
    },
    { 
      id: 13, 
      name: "WELPOND", 
      image: "/images/aqua/welpond.png", 
      price: 2200, 
      tagline: "Shrimp Friendly Pond", 
      category: "POND QUALITY", 
      benefits: ["Healthy pond condition", "Reduce toxicity", "Better immunity"], 
      composition: "Microbial Mixtures, Anti fungal properties", 
      dosage: "5lt per acre every 15 days" 
    },
    { 
      id: 14, 
      name: "GUTGEL Improved", 
      image: "/images/aqua/gutgel-improved.png", 
      price: 1600, 
      tagline: "White Gut Ultimate Solution", 
      category: "HEALTH", 
      benefits: ["Superior gut protection", "Better FCR", "Body weight gain"], 
      composition: "Organic Metabolites, Citric acid", 
      dosage: "5lt per acre for 3 days" 
    },
    { 
      id: 15, 
      name: "TRUSTOGARD Fish", 
      image: "/images/aqua/trustogard-fish.png", 
      price: 1800, 
      tagline: "Protection & Growth for Fish", 
      category: "GROWTH", 
      benefits: ["Prevents red disease", "Controls argulus/slime", "Stress resistance"], 
      composition: "Anti microbial, anti fungal, enzymes", 
      dosage: "1lt per acre or 2-3lt/ton feed" 
    },
    { 
      id: 16, 
      name: "Q-POND", 
      image: "/Qpond.png", 
      price: 1400, 
      tagline: "Water Quality Improver", 
      category: "POND QUALITY", 
      benefits: ["Improves water colour", "Promotes plankton", "Reduces Vibrio"], 
      composition: "Microbial Mixture", 
      dosage: "1-3lt per acre" 
    },
    { 
      id: 17, 
      name: "SAN-Q", 
      image: "/sanq.png", 
      price: 1200, 
      tagline: "Effective Water Sanitizer", 
      category: "POND QUALITY", 
      benefits: ["Rapid biocidal action", "Algae & fungus control", "Hygienic water"], 
      composition: "Alkylbenzyl dimethyl ammonium chloride", 
      dosage: "As directed by consultant" 
    },
    { 
      id: 18, 
      name: "C-POND", 
      image: "/images/aqua/c-pond.png", 
      price: 1500, 
      tagline: "Clean & Good Pond", 
      category: "POND QUALITY", 
      benefits: ["Plankton growth", "Reduces bacterial load", "Stress support"], 
      composition: "Microbial mixtures, Anti bacterial agents", 
      dosage: "3lt per acre every 10 days" 
    },
    { 
      id: 19, 
      name: "V-KWIK", 
      image: "/images/aqua/v-kwik.png", 
      price: 1400, 
      tagline: "Support Against Vibrio", 
      category: "HEALTH", 
      benefits: ["Eliminates pond toxicity", "Vibrio support", "Better growth"], 
      composition: "Antimicrobial agents, Pond essentials", 
      dosage: "1-2lt per acre for 3-5 days" 
    },
    { 
      id: 20, 
      name: "ANTITOX PLUS aqua", 
      image: "/anitox.png", 
      price: 2300, 
      tagline: "Detoxification & Liver Tonic", 
      category: "HEALTH", 
      benefits: ["Improves Liver/Kidney", "Mycotoxin protection", "Gut absorption"], 
      composition: "Organic Metabolites, Diuretics, Enzymes", 
      dosage: "2-3lt per ton feed" 
    },
    { 
      id: 21, 
      name: "TRUSTO MIN", 
      image: "/images/aqua/trusto-min.png", 
      price: 950, 
      tagline: "Balanced Mineral Mixture", 
      category: "NUTRITION", 
      benefits: ["Moulting frequency", "Shell formation", "Growth rate"], 
      composition: "Calcium, Potassium, Magnesium", 
      dosage: "5-10kg per acre" 
    },
    { 
      id: 22, 
      name: "LIVAR PLUS Aqua", 
      image: "/liverplus.png", 
      price: 1250, 
      tagline: "Feed Intake Improver", 
      category: "NUTRITION", 
      benefits: ["Liver/Hepatopancreas activity", "Digestibility", "Weight gain"], 
      composition: "Hydrolyzing Enzymes, Citric Acid", 
      dosage: "10ml per kg feed" 
    },
    { 
      id: 23, 
      name: "TRUSTO PS", 
      image: "/trustops.png", 
      price: 1150, 
      tagline: "Pond Probiotic", 
      category: "POND QUALITY", 
      benefits: ["Improves water color", "Control H2S gases", "pH balancing"], 
      composition: "Different Microbial Strains", 
      dosage: "5lt per hectare" 
    }
  ],
  POULTRY: [
    { 
      id: 101, 
      name: "BROILER-VITA", 
      image: "/images/poultry/broiler-vita.png", 
      price: 1800, 
      tagline: "Maximum Weight Gain", 
      category: "GROWTH", 
      benefits: ["Rapid growth", "Bone strength"], 
      composition: "Multivitamins", 
      dosage: "5ml/lt" 
    }
  ],
  SWINE: [
    { 
      id: 201, 
      name: "PIG-GRO", 
      image: "/images/swine/pig-gro.png", 
      price: 2100, 
      tagline: "Healthy Lean Meat", 
      category: "HEALTH", 
      benefits: ["Better FCR", "Lean meat"], 
      composition: "Organic Acids", 
      dosage: "10g/kg" 
    }
  ]
};

const Products = ({ cart, updateQty }) => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [activeSector, setActiveSector] = useState('AQUA');
  const [view, setView] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCat, setSelectedCat] = useState('All');
  const [priceRange, setPriceRange] = useState(5000);
  const searchQuery = searchParams.get('search') || '';

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
      {/* 1. B2B TRUST HEADER */}
    {/* 1. DYNAMIC B2B HERO SECTION */}
{/* 1. CONDENSED PRODUCT PAGE HERO */}
{view === 'grid' && !searchQuery && (
  <header className={`product-hero-compact ${activeSector.toLowerCase()}-bg`}>
    <div className="hero-compact-container">
      {/* Left side: Static Content */}
      <div className="hero-compact-text">
        <span className="compact-badge">Field Proven Biotech</span>
        <h1>
          {activeSector} <span>Division</span>
        </h1>
        <p>
          {activeSector === 'AQUA' && "Proven biotech solutions field-tested for aqua excellence."}
          {activeSector === 'POULTRY' && "Maximizing bio-efficiency and immunity through nutrition."}
          {activeSector === 'SWINE' && "Liver stimulants and acidifiers for superior swine health."}
        </p>
        <div className="hero-compact-stats">
          <span>✔ 35+ Years Trust</span>
          <span>✔ Antibiotic-Free</span>
          <span>✔ Expert Guidance</span>
        </div>
      </div>

      {/* Right side: Static Sector Image */}
      <div className="hero-compact-image">
        <img 
          src={
            activeSector === 'AQUA' ? "/aqua4.png" : 
            activeSector === 'POULTRY' ? "/poultry-hero.png" : 
            "/swine-hero.png"
          } 
          alt={activeSector} 
        />
      </div>
    </div>
  </header>
)}
      {/* 2. SECTOR NAVIGATION */}
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

     <div className={`shop-container ${view !== 'grid' ? 'no-sidebar' : ''}`}>
  {/* 3. STATIC SIDEBAR FILTERS - Positioned Sticky in CSS */}
  {view === 'grid' && (
    <aside className="filter-sidebar">
      <div className="filter-group">
        <div className="filter-header-row">
          <h3><HiAdjustments /> Filters</h3>
          <button className="clear-link" onClick={() => setSelectedCat('All')}>Clear All</button>
        </div>
        
        <div className="filter-section">
          <h4>APPLICATION</h4>
          <div className="filter-options-list">
            {categories.map(cat => (
              <label key={cat} className="custom-checkbox">
                <input 
                  type="radio" 
                  name="cat" 
                  checked={selectedCat === cat}
                  onChange={() => setSelectedCat(cat)} 
                />
                <span className="checkmark"></span>
                <span className="cat-name">{cat}</span>
              </label>
            ))}
          </div>
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

  {/* 4. PRODUCT CONTENT - This part scrolls naturally */}
  <main className="product-content">
    {view === 'grid' ? (
      <>
        <div className="results-bar">
          <p>Showing <strong>{filteredProducts.length}</strong> products</p>
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
            <div key={p.id} className="grid-item b2b-card">
            <div className="img-box" onClick={() => { setSelectedProduct(p); setView('hero'); window.scrollTo(0,0); }}>
  {/* Add a fallback to ensure something always shows */}
  <img src={p.image || "/trust1.png"} alt={p.name} className="product-img-standard" /> 
  <div className="quick-view-overlay">Quick View</div>
</div>
              <div className="item-meta">
                <span className="application-label">{p.category}</span>
                <h3 className="product-title">{p.name}</h3>
                <ul className="card-benefits-list">
                  {p.benefits?.slice(0, 2).map((b, i) => <li key={i}>✔ {b}</li>)}
                </ul>
                <p className="grid-price">₹{p.price.toLocaleString()}</p>
             <div className="b2b-action-row">
                        {cart[p.id] > 0 ? (
                          <div className="qty-selector-inline">
                            <button onClick={() => updateQty(p.id, -1)}><HiMinus /></button>
                            <span>{cart[p.id]}</span>
                            <button onClick={() => updateQty(p.id, 1)}><HiPlus /></button>
                          </div>
                        ) : (
                          <button className="add-btn-premium" onClick={() => updateQty(p.id, 1)}>
                            Add to Cart
                          </button>
                        )}
                      </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ) : (
      /* 5. PRODUCT DETAIL VIEW (Hero) */
     /* Inside your return statement, replacing the Hero View block */
/* 5. PRODUCT DETAIL VIEW (Hero) */
selectedProduct && (
  <div className="modern-hero-view">
    {/* Professional Breadcrumb Trail */}
    <nav className="breadcrumb">
      <span onClick={() => setView('grid')}>Products</span> 
      <HiChevronRight className="sep"/> 
      <span onClick={() => { setActiveSector(activeSector); setView('grid'); }}>
        {activeSector} Division
      </span>
      <HiChevronRight className="sep"/>
      <strong>{selectedProduct.name}</strong>
    </nav>

    <div className="hero-flex-layout">
      {/* Left Side: Product High-Resolution Image */}
      <div className="hero-gallery-container zoom-effect">
        <img 
          src={selectedProduct.image || "/trust1.png"} 
          alt={selectedProduct.name} 
          className="hero-main-img" 
        />
      </div>          

      {/* Right Side: Technical Matter (Beside Product) */}
      <div className="hero-info-matter">
        <div className="info-header">
          <span className="info-category-badge">{selectedProduct.category}</span>
          <h1>{selectedProduct.name}</h1>
          <p className="info-tagline">{selectedProduct.tagline}</p>
        </div>

        <div className="technical-info-grid">
          <div className="info-block">
            <h3>Benefits</h3>
            <ul className="info-benefits-list">
              {selectedProduct.benefits?.map((b, i) => <li key={i}>✔ {b}</li>)}
            </ul>
          </div>

          <div className="info-block">
            <h3>Composition</h3>
            <p className="info-content-text">{selectedProduct.composition}</p>
          </div>

          <div className="info-block">
            <h3>Recommended Dosage</h3>
            <p className="info-content-text">{selectedProduct.dosage}</p>
          </div>
        </div>

        <div className="info-action-row">
          {cart[selectedProduct.id] > 0 ? (
            <div className="qty-selector-premium">
              <button onClick={() => updateQty(selectedProduct.id, -1)}><HiMinus /></button>
              <span className="qty-number">{cart[selectedProduct.id]}</span>
              <button onClick={() => updateQty(selectedProduct.id, 1)}><HiPlus /></button>
            </div>
          ) : (
            <button className="buy-now-premium" onClick={() => updateQty(selectedProduct.id, 1)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
)
    )}
  </main>
</div>
    </div>
  );
};

export default Products;
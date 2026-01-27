import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { HiPlus, HiMinus, HiAdjustments, HiChevronRight } from 'react-icons/hi';
import './Products.css';
import { GiPig } from 'react-icons/gi';
const allProducts = {
  AQUA: [
    { 
      id: 1, 
      name: "SEEDGEL aqua", 
      image: "/seedgel.png", 
      size: "1L", 
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
      size: "1kg", 
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
      size: "1L", 
      tagline: "Moulting & Loose Shell Control", 
      category: "GROWTH", 
      benefits: ["Regulates moulting", "Increases feed intake", "Prevents loose shell"], 
      composition: "Digested protein, organic metabolites, Enzymes", 
      dosage: "20ml per kg feed daily" 
    },
    { 
      id: 4, 
      name: "WHITE F", 
      image: "/whitef.png", 
      size: "1L", 
      tagline: "Solution for White Faeces", 
      category: "HEALTH", 
      benefits: ["Protects from White Faeces", "Keeps GUT healthy", "Improves FCR"], 
      composition: "Organic Metabolites, Volatile fatty acids", 
      dosage: "5lt per acre for 3 days" 
    },
    { 
      id: 5, 
      name: "SUPERSAFE (SS)", 
      image: "/supersafe.png", 
      size: "5L", 
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
      size: "1L", 
      tagline: "White Gut Prevention", 
      category: "HEALTH", 
      benefits: ["Protects from White Gut", "Fast growth", "Improves intake"], 
      composition: "Organic Metabolites, Citric acid", 
      dosage: "20ml per kg feed for 5 days" 
    },
    { 
      id: 7, 
      name: "CONVERTAL PLUS (Aqua)", 
      image: "/convertalplus.png", 
      size: "5L", 
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
      size: "1L", 
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
      size: "1L", 
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
      size: "1L", 
      tagline: "Healthy Gills", 
      category: "HEALTH", 
      benefits: ["Against black/red gill", "Eliminates parasites"], 
      composition: "Antimicrobial agents", 
      dosage: "2lt per acre for 3-5 days" 
    },
    { 
      id: 11, 
      name: "ANTI-GILLFLUK", 
      image: "/antigillfluk.png", 
      size: "5L", 
      tagline: "External Parasite Protection", 
      category: "HEALTH", 
      benefits: ["Controls gill fluke", "Eliminates external bacteria"], 
      composition: "Antimicrobial and anti fungal agents", 
      dosage: "2lt per acre for 2-3 days" 
    },
    { 
      id: 12, 
      name: "TRUSTOGARD", 
      image: "/trustogard.png", 
      size: "1L & 5L", 
      tagline: "Growth & Protection for Shrimp", 
      category: "GROWTH", 
      benefits: ["Protects Hepatopancreas", "Anti protozoan", "Better survival"], 
      composition: "Anti microbial, Enzymes, Digested protein", 
      dosage: "20ml per kg feed for 5 days" 
    },
    { 
      id: 13, 
      name: "WELPOND", 
      image: "/wellpond.png", 
      size: "5L", 
      tagline: "Shrimp Friendly Pond", 
      category: "POND QUALITY", 
      benefits: ["Healthy pond condition", "Reduce toxicity", "Better immunity"], 
      composition: "Microbial Mixtures, Anti fungal properties", 
      dosage: "5lt per acre every 15 days" 
    },
    { 
      id: 14, 
      name: "GUTGEL Improved", 
      image: "/gutgel-improved.png", 
      size: "5L", 
      tagline: "White Gut Ultimate Solution", 
      category: "HEALTH", 
      benefits: ["Superior gut protection", "Better FCR", "Body weight gain"], 
      composition: "Organic Metabolites, Citric acid", 
      dosage: "5lt per acre for 3 days" 
    },
    { 
      id: 15, 
      name: "TRUSTOGARD Fish", 
      image: "/trustoguard.png", 
      size: "5L", 
      tagline: "Protection & Growth for Fish", 
      category: "GROWTH", 
      benefits: ["Prevents red disease", "Controls argulus/slime", "Stress resistance"], 
      composition: "Anti microbial, anti fungal, enzymes", 
      dosage: "1lt per acre or 2-3lt/ton feed" 
    },
    { 
      id: 16, 
      name: "Q-POND", 
      image: "/qpond1.png", 
      size: "1L, 5L & 20L", 
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
      size: "5L", 
      tagline: "Effective Water Sanitizer", 
      category: "POND QUALITY", 
      benefits: ["Rapid biocidal action", "Algae & fungus control", "Hygienic water"], 
      composition: "Alkylbenzyl dimethyl ammonium chloride", 
      dosage: "As directed by consultant" 
    },
    { 
      id: 18, 
      name: "C-POND", 
      image: "/c-pond.png", 
      size: "5L", 
      tagline: "Clean & Good Pond", 
      category: "POND QUALITY", 
      benefits: ["Plankton growth", "Reduces bacterial load", "Stress support"], 
      composition: "Microbial mixtures, Anti bacterial agents", 
      dosage: "3lt per acre every 10 days" 
    },
    { 
      id: 19, 
      name: "V-KWIK", 
      image: "/vkwik.png", 
      size: "1L", 
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
      size: "5L & 5kg", 
      tagline: "Detoxification & Liver Tonic", 
      category: "HEALTH", 
      benefits: ["Improves Liver/Kidney", "Mycotoxin protection", "Gut absorption"], 
      composition: "Organic Metabolites, Diuretics, Enzymes", 
      dosage: "2-3lt per ton feed" 
    },
    { 
      id: 21, 
      name: "TRUSTO MIN", 
      image: "/trusto-min.png", 
      size: "0", 
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
      size: "5L & 20L", 
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
      size: "5L & 20L", 
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
      name: "CONVERTAL PLUS", 
      image: "/convertalplus_poultry.png", 
      size: "1L & 5L", 
      tagline: "Ultimate Liver Tonic & Detoxifier", 
      category: "HEALTH", 
      benefits: [
        "Effective against Mycotoxicosis and Aflatoxicosis", 
        "Improves metabolism by eliminating toxins", 
        "Improves liver and kidney health", 
        "Excellent recovery from stunted growth" 
      ], 
      composition: "Liver stimulants, Volatile fatty acids, Diuritics, Hydrolysing Enzymes, and Organic metabolites", 
      dosage: "10ml per 100 birds for 5-7 days" 
    },
    { 
      id: 102, 
      name: "GRO KWIK", 
      image: "/grokwik_poultry.png", 
      size: "1L & 5L", 
      tagline: "Excellent Growth Promoter & Immunity Booster", 
      category: "GROWTH", 
      benefits: [
        "Birds become more active and lively", 
        "Excellent immunity and better vaccine response", 
        "Improves growth of muscle and lean tissue", 
        "Very fast recovery from stressful conditions" 
      ], 
      composition: "Methionine, Cystine, Lysine, Threonine, Arginine, Isoleucine, Leucine, Valine, and Herbal Extracts", 
      dosage: "20ml per 100 birds for 5-7 days" 
    }
  ],
 SWINE: []
};
const Products = ({ cart, updateQty }) => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeSector, setActiveSector] = useState('AQUA');
  const [view, setView] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCat, setSelectedCat] = useState('All');
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
      return matchesSearch && matchesCat;
    });

    if (sortBy === 'name') results.sort((a, b) => a.name.localeCompare(b.name));

    return results;
  }, [activeSector, searchQuery, selectedCat, sortBy]);

  return (
    <div className="shop-wrapper ecommerce-layout">
      {view === 'grid' && !searchQuery && (
        <header className={`product-hero-compact ${activeSector.toLowerCase()}-bg`}>
          <div className="hero-compact-container">
            <div className="hero-compact-text">
              <span className="compact-badge">Field Proven Biotech</span>
              <h1>{activeSector} <span>Division</span></h1>
              <p>
                {activeSector === 'AQUA' && "Proven biotech solutions field-tested for aqua excellence."}
                {activeSector === 'POULTRY' && "Maximizing bio-efficiency and immunity through nutrition."}
                {activeSector === 'SWINE' && "Innovative nutritional solutions for swine health - Coming Soon."}
              </p>
              <div className="hero-compact-stats">
                <span>✔ Field Tested</span>
                <span>✔ Antibiotic-Free</span>
                <span>✔ Expert Guidance</span>
              </div>
            </div>
            <div className="hero-compact-image">
              <img 
                src={
                  activeSector === 'AQUA' ? "/aqua4.png" : 
                  activeSector === 'POULTRY' ? "/poultry-hero.png" : 
                  "/swarn.png"
                } 
                alt={activeSector} 
              />
            </div>
          </div>
        </header>
      )}

      <div className="sector-header-nav">
        <div className="sector-container">
          {['AQUA', 'POULTRY', 'SWINE'].map(s => (
            <button 
              key={s} 
              className={`sector-btn ${activeSector === s ? 'active' : ''}`} 
              onClick={() => { setActiveSector(s); setSelectedCat('All'); setView('grid'); }}
            >
              <span className="icon">{s === 'AQUA' ? '🐟' : s === 'POULTRY' ? '🐔' : '🐷'}</span>
              {s === 'AQUA' ? 'AQUACULTURE' : s}
            </button>
          ))}
        </div>
      </div>

      <div className={`shop-container ${view !== 'grid' ? 'no-sidebar' : ''}`}>
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
            </div>
          </aside>
        )}

     <main className="product-content">
  {view === 'grid' ? (
    <>
      {/* 1. Results Bar & Sorting */}
      <div className="results-bar">
        <p>Showing <strong>{filteredProducts.length}</strong> products</p>
        <div className="sort-group">
          <span>Sort by:</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="name">A - Z</option>
          </select>
        </div>
      </div>

      {/* 2. Grid Logic: Products vs Coming Soon vs No Results */}
      {filteredProducts.length > 0 ? (
        <div className="amazon-grid">
          {filteredProducts.map(p => (
            <div key={p.id} className="grid-item b2b-card" data-aos="fade-up">
              <div className="img-box" onClick={() => { setSelectedProduct(p); setView('hero'); window.scrollTo(0,0); }}>
                <img src={p.image || "/trust1.png"} alt={p.name} className="product-img-standard" /> 
                <div className="quick-view-overlay">Quick View</div>
              </div>
              <div className="item-meta">
                <span className="application-label">{p.category}</span>
                <h3 className="product-title">{p.name}</h3>
                <ul className="card-benefits-list">
                  {p.benefits?.slice(0, 2).map((b, i) => <li key={i}>✔ {b}</li>)}
                </ul>
                {/* Replaced Price with Product Size as requested */}
                <p className="grid-price">{p.size !== "0" ? p.size : "Pack Size: TBD"}</p>
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
      ) : (
        /* 3. High-Fidelity Coming Soon / No Results State */
        <div className="coming-soon-container" style={{ textAlign: 'center', padding: '100px 20px', background: '#fff', borderRadius: '15px' }}>
          {activeSector === 'SWINE' ? (
            <>
              <GiPig style={{ fontSize: '5rem', color: '#64748b', marginBottom: '20px' }} />
              <h2 style={{ color: '#0b1120', fontSize: '2.5rem', fontWeight: '800' }}>Swine Division Coming Soon</h2>
              <p style={{ color: '#64748b', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}>
                We are currently developing scientific swine interventions focused on digestive health 
                and antibiotic-free productivity. Our new product range will be available shortly.
              </p>
            </>
          ) : (
            <div className="no-results">
              <HiAdjustments style={{ fontSize: '4rem', color: '#cbd5e1', marginBottom: '20px' }} />
              <h3>No products found</h3>
              <p>Try adjusting your filters or search terms.</p>
              <button className="clear-link" style={{ marginTop: '15px', fontSize: '1rem' }} onClick={() => setSelectedCat('All')}>Clear All Filters</button>
            </div>
          )}
        </div>
      )}
    </>
  ) : (
    /* 4. HIGH FIDELITY PRODUCT DETAIL VIEW */
    selectedProduct && (
      <div className="modern-hero-view" data-aos="fade-in">
        <nav className="breadcrumb">
          <span onClick={() => setView('grid')}>Products</span> 
          <HiChevronRight className="sep"/> 
          <span onClick={() => setView('grid')}>{activeSector} Division</span>
          <HiChevronRight className="sep"/>
          <strong>{selectedProduct.name}</strong>
        </nav>

        <div className="hero-flex-layout">
          {/* Side-by-Side: Image Left, Technical Info Right */}
          <div className="hero-gallery-container zoom-effect">
            <img src={selectedProduct.image || "/trust1.png"} alt={selectedProduct.name} className="hero-main-img" />
          </div>          
          <div className="hero-info-matter">
            <div className="info-header">
              <span className="info-category-badge">{selectedProduct.category}</span>
              <h1>{selectedProduct.name}</h1>
              <p className="info-tagline">{selectedProduct.tagline}</p>
              <p className="price-tag-large">Available Pack: {selectedProduct.size !== "0" ? selectedProduct.size : "Contact for details"}</p>
            </div>

            <div className="technical-info-grid">
              <div className="info-block">
                <h3>Key Benefits</h3>
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
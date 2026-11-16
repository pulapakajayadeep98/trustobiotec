import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { HiPlus, HiMinus, HiAdjustments, HiChevronRight } from 'react-icons/hi';
import './Products.css';
export const allProducts = {
  AQUA: [
    {
      id: 1,
      name: "SEEDGEL aqua",
      image: "/seedgel.webp",
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
      image: "/grokwik.webp",
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
      image: "/moultinggel.webp",
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
      image: "/whitef.webp",
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
      image: "/supersafe.webp",
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
      image: "/Gutgel.webp",
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
      image: "/convertalplus.webp",
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
      image: "/odoq.webp",
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
      image: "/T-SHELL.webp",
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
      image: "/ggill.webp",
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
      image: "/antigillfluk.webp",
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
      image: "/wellpond.webp",
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
      image: "/trustoguard.webp",
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
      image: "/qpond1.webp",
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
      image: "/sanq.webp",
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
      image: "/vkwik.webp",
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
      image: "/anitox.webp",
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
      image: "/liverplus.webp",
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
      image: "/trustops.webp",
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
      image: "/convertal-plus.webp",
      size: "1L & 5L (Liquid), 10Kg (Powder)",
      tagline: "An Ultimate Liver Tonic – Water Soluble Detoxifying Supplement",
      category: "LIVER HEALTH",
      benefits: [
        "Good appetite, optimal feed intake, better FCR, uniform growth and uniform laying",
        "Improves metabolism of the body by eliminating toxins",
        "Birds become more active and lively",
        "Excellent recovery from stunted growth",
        "Works like an immunostimulant as well",
        "Useful in stress after vaccination, debeaking, shifting and convalescence",
        "Improves shell quality by enhancing nutrient absorption from the gut",
        "Improves broiler body weight by enhancing digestion and nutrient absorption",
        "Helpful in toxemic conditions (Bacterial and Viral)",
        "Improves breeder performance by enhancing fertility and hatchability"
      ],
      composition: "Liver stimulants, hydrolysing enzymes, organic metabolites and volatile fatty acids etc.",
      dosage: "Liquid: 10-20 ml per 100 birds for 5-7 days (20-30 ml in severe toxic conditions). Powder: 500 gm per ton of feed. Or as advised by Veterinarian."
    },
    {
      id: 102,
      name: "E-CHICK",
      image: "/e-chick.webp",
      size: "5L",
      tagline: "Energetic – For Healthier, More Energetic Chicks",
      category: "GROWTH",
      benefits: [
        "Better feed intake and better FCR",
        "Improves body weight and uniform growth",
        "Improves disease resistance",
        "Better livability",
        "Chicks become healthier and more energetic"
      ],
      composition: "Herbal extracts, essential amino acids like Methionine, Lysine, Threonine, Arginine & other growth promoters etc.",
      dosage: "10 ml per 100 birds. Or as advised by Veterinarian."
    },
    {
      id: 103,
      name: "TRUSTOGUT",
      image: "/trustogut.webp",
      size: "1L & 5L",
      tagline: "Complete Gut Care",
      category: "GUT HEALTH",
      benefits: [
        "Balances gut pH and activates protein-digesting enzymes",
        "Improves digestion and nutrient absorption",
        "Improves feed intake and FCR",
        "Improves gut integrity"
      ],
      composition: "Short-chain fatty acids and essential oils.",
      dosage: "Chicks: 10 ml / 100 birds. Layers: 25 ml / 100 birds. Broilers: 20 ml / 100 birds. Or as advised by Veterinarian."
    },
    {
      id: 104,
      name: "SAN-Q POULTRY",
      image: "/san-q-poultry.webp",
      size: "1L, 5L & 20L",
      tagline: "The Effective Water Sanitizer",
      category: "SANITATION",
      benefits: [
        "Rapid biocidal action against gm+ve & gm-ve bacteria, algae, fungus and protozoa",
        "Safely disinfects water storage tanks, pipelines and farm equipment",
        "Not affected by changes in pH and hardness of water",
        "Possesses long residual activity",
        "Can be used in drinking water regularly",
        "Disinfects poultry sheds and equipment thoroughly",
        "Very effective in disinfecting setters and hatchers",
        "Very effective against E. coli and Salmonella"
      ],
      composition: "Alkylbenzyl dimethyl ammonium chloride 50% W/V and Methylene oxide 20% W/V, Excipient QS.",
      dosage: "Drinking water: 1 ml / 10 litres of water. Sanitation of sheds, cages & equipment (wash & spray): 5 ml / litre. Disinfecting setters / hatchers: 5 ml / litre."
    },
    {
      id: 105,
      name: "NEPHRO-NIC",
      image: "/nephro-nic.webp",
      size: "5L",
      tagline: "Healthy Kidneys Support Optimal Growth and Efficient Nutrient Metabolism",
      category: "KIDNEY HEALTH",
      benefits: [
        "Supports overall nephro health",
        "Helps to prevent kidney toxicity",
        "Improves renal functioning",
        "Helps to ameliorate visceral gout",
        "Restores kidney function very effectively",
        "Removes excess fluids and helps in flushing waste from kidney",
        "Reduces loose droppings"
      ],
      composition: "Herbal diuretics, hydrolyzing enzymes and organic metabolites etc.",
      dosage: "Chicks: 5 ml per 100 birds. Layers: 15-20 ml per 100 birds. Broilers: 10-20 ml per 100 birds, depending on week. Or as advised by Veterinarian."
    },
    {
      id: 106,
      name: "Q-TOX PLUS",
      image: "",
      size: "5L",
      tagline: "The Water Soluble Detoxifying Liquid Feed Supplement",
      category: "TOXIN BINDER",
      benefits: [
        "Checks the mortality within a short time",
        "Eliminates toxins efficiently",
        "Effective on all important Mycotoxins",
        "Improves metabolism of the body by eliminating toxins",
        "Safe and compatible with vitamins and minerals",
        "Helpful in dermatitis and gizzard erosions"
      ],
      composition: "Organic metabolites, hydrolyzing enzymes and volatile fatty acids in water soluble base.",
      dosage: "Poultry: 1/2 ml per litre of water or 200 ml per 1000 birds daily. Cattle & Buffalo: 50 ml per animal / day. Sheep / Goat / Calves: 20 ml per animal / day."
    },
    {
      id: 107,
      name: "Q-TOX PLUS PREMIX",
      image: "/qtox-plus-premix.webp",
      size: "5Kg",
      tagline: "The True Toxin Eliminator – Unique Product for Detoxifying the Feed",
      category: "TOXIN BINDER",
      benefits: [
        "Adsorbs Aflatoxins so they are excreted unabsorbed",
        "Enzymes degrade B2, Zearalenone and Trichothecenes into non-toxic metabolites",
        "Volatile fatty acids bind T2, G1 and G2 mycotoxins",
        "Combines adsorption, enzyme degradation and fatty acid binding"
      ],
      composition: "Mixture of dolomite, zeolite, specific organic metabolites, hydrolyzing enzymes and volatile fatty acids.",
      dosage: "500 g to 1 kg per ton of feed."
    },
    {
      id: 108,
      name: "IMMUNE-INTACT",
      image: "/immune-intact.webp",
      size: "5L",
      tagline: "Perfect Immunity Protection & Excellent Recovery from Stressful Conditions",
      category: "IMMUNITY",
      benefits: [
        "Excellent vaccine response",
        "Excellent immunity gain against disease susceptibility",
        "Very fast recovery from all stressful conditions",
        "Very useful at the time of a disease outbreak",
        "Birds become more active and lively"
      ],
      composition: "Phyto nutrients, essential amino acids and minerals.",
      dosage: "20 ml per 100 birds for 5 to 7 days."
    },
    {
      id: 109,
      name: "GRO KWIK",
      image: "/gro-kwik-poultry.webp",
      size: "1L & 5L",
      tagline: "Perfect Growth Promoter and Performance Enhancer",
      category: "GROWTH",
      benefits: [
        "Birds become more active and lively",
        "Very useful for growers, uniform growth and good immunity",
        "Excellent recovery from stunted growth",
        "Improves growth of muscle and lean tissue – more meat and less fat",
        "Good FCR and improves metabolism",
        "Regular use can reduce marketing period (number of days) in broilers"
      ],
      composition: "Herbal extract, Methionine, Cystine, Lysine, Tyrosine, Arginine, Isoleucine, Leucine, Valine, Histidine, Tryptophan, Glycine, Serine, Proline, Alanine, Aspartic Acid, Glutamic Acid and growth promoters.",
      dosage: "Layers: 20 ml per 100 birds per day. Breeders: 40 ml per 100 birds per day. Broilers: 1-3 weeks 10 ml per 100 birds, 4th week onwards 20 ml per 100 birds. Goat, Sheep: 30-40 ml per animal."
    },
    {
      id: 110,
      name: "GALLI COOL",
      image: "/galli-cool.webp",
      size: "1L",
      tagline: "Stops Panting and Heat Stroke",
      category: "HEAT STRESS",
      benefits: [
        "Reduces gasping",
        "Reduces mortality due to adverse atmospheric heat conditions",
        "Reduces pecking",
        "Birds feel comfortable even in hot temperature",
        "One dose early morning keeps the birds comfortable the whole day"
      ],
      composition: "Herbal extract of R. serpentina and S. bimaculata in water soluble base.",
      dosage: "Broilers / Layers: 20 ml per 100 birds per day in the first drinking water in the morning. Breeders: 40 ml per 100 birds per day in the first drinking water in the morning."
    },
    {
      id: 111,
      name: "RESPITREET",
      image: "/respitreet.webp",
      size: "5L",
      tagline: "Herbal Feed Supplement to Prevent Respiratory Disorders",
      category: "RESPIRATORY",
      benefits: [
        "Improves Feed Conversion Ratio (FCR)",
        "Improves egg production",
        "Better livability",
        "Builds strong resistance against respiratory infections"
      ],
      composition: "Extract of C. latiflora, C. soberoses, G. glabra, L. usitatissimum, L. stoechas, L. nodiflora, P. anisum, P. harmala, P. hortense.",
      dosage: "20 ml per 100 birds for 5 days in drinking water. Or as advised by Veterinarian."
    },
    {
      id: 112,
      name: "TRUSTOCAL",
      image: "/trustocal.webp",
      size: "10Kg",
      tagline: "Calcium & Phosphorus Supplement for Strong Eggshells",
      category: "NUTRITION",
      benefits: [
        "Overcomes problems of thin shelled eggs",
        "Controls uneven and rough textured egg shells",
        "Prevents leg weakness",
        "Optimizes calcium and phosphorus metabolism",
        "Helps to maintain proper body weight"
      ],
      composition: "Calcium, Phosphorus, Vitamin D3, Vitamin B12, Vitamin C, Magnesium, Zinc and Manganese etc.",
      dosage: "2-5 kg per ton of feed. Or as advised by Veterinarian."
    },
    {
      id: 113,
      name: "TRUSTOMIN",
      image: "/trustomin.webp",
      size: "5Kg",
      tagline: "Mineral, Enzyme & Probiotic Production Booster",
      category: "NUTRITION",
      benefits: [
        "Maximize yield: a powerful production booster that enhances overall performance",
        "Stronger eggshells: corrects vital mineral imbalances to reduce eggshell breakage",
        "Total flock wellness: boosts immunity, supports healthy growth and vitality"
      ],
      composition: "Essential minerals: Calcium (26%), Phosphorus (9%), Zinc, Magnesium, Manganese, Iron, Copper, Iodine, Selenium and trace elements. 7-enzyme blend: Amylase, Xylanase, Mannanase, Hemicellulase, Glucanase, Protease and Lipase. Probiotics & amino acids: Saccharomyces cerevisiae, Lactobacillus sp., DL-Methionine and L-Lysine.",
      dosage: "Broilers: 1 kg per ton of feed. Layers & Breeders: 1.5-2 kg per ton of feed. Or as advised by Veterinarian."
    }
  ],
 CATTLE: [],
 CAMEL: [],
 SWINE: []
};

// Division tabs, in display order
export const SECTORS = [
  { key: 'POULTRY', label: 'Poultry', icon: '🐔', image: '/poultry.webp', desc: 'Maximizing bio-efficiency and immunity through nutrition.' },
  { key: 'AQUA', label: 'Aquaculture', icon: '🐟', image: '/aqua4.webp', desc: 'Proven biotech solutions field-tested for aqua excellence.' },
  { key: 'CATTLE', label: 'Cattle, Sheep & Pet', icon: '🐄', image: '/cattle-sheep-pet.webp', desc: 'Science-led nutrition for cattle, sheep and pets - Coming Soon.' },
  { key: 'CAMEL', label: 'Camel & Horse', icon: '🐪', image: '/camel-horse.webp', desc: 'Performance and health solutions for camels and horses - Coming Soon.' },
  { key: 'SWINE', label: 'Swine', icon: '🐷', image: '/swarn.webp', desc: 'Innovative nutritional solutions for swine health - Coming Soon.' },
];
const sectorInfo = (key) => SECTORS.find(s => s.key === key) || SECTORS[0];

// Shows the product image, or a name placeholder when no image exists / it fails to load
const ProductImage = ({ src, name, className, lazy = false }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={`product-img-placeholder ${className || ''}`} role="img" aria-label={name}>
        <span className="placeholder-brand">TRUSTO</span>
        <span className="placeholder-name">{name}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      className={className}
      loading={lazy ? "lazy" : undefined}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
};

const Products = ({ cart, updateQty }) => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeSector, setActiveSector] = useState('POULTRY');
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
      ? Object.values(allProducts).flat() 
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
              <h1>{sectorInfo(activeSector).label} <span>Division</span></h1>
              <p>
                {sectorInfo(activeSector).desc}
              </p>
              <div className="hero-compact-stats">
                <span>✔ Field Tested</span>
                <span>✔ Antibiotic-Free</span>
                <span>✔ Expert Guidance</span>
              </div>
            </div>
            <div className="hero-compact-image">
              <img
                src={sectorInfo(activeSector).image}
                alt={sectorInfo(activeSector).label} 
              />
            </div>
          </div>
        </header>
      )}

      <div className="sector-header-nav">
        <div className="sector-container">
          {SECTORS.map(s => (
            <button
              key={s.key}
              className={`sector-btn ${activeSector === s.key ? 'active' : ''}`}
              onClick={() => { setActiveSector(s.key); setSelectedCat('All'); setView('grid'); }}
            >
              <span className="icon">{s.icon}</span>
              {s.label.toUpperCase()}
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
                <ProductImage key={p.image} src={p.image} name={p.name} className="product-img-standard" lazy />
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
          {!searchQuery && allProducts[activeSector].length === 0 ? (
            <>
              <div style={{ fontSize: '5rem', marginBottom: '20px' }}>{sectorInfo(activeSector).icon}</div>
              <h2 style={{ color: '#0b1120', fontSize: '2.5rem', fontWeight: '800' }}>{sectorInfo(activeSector).label} Division Coming Soon</h2>
              <p style={{ color: '#64748b', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}>
                We are currently developing scientific {sectorInfo(activeSector).label.toLowerCase()} solutions focused on animal health 
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
          <span onClick={() => setView('grid')}>{sectorInfo(activeSector).label} Division</span>
          <HiChevronRight className="sep"/>
          <strong>{selectedProduct.name}</strong>
        </nav>

        <div className="hero-flex-layout">
          {/* Side-by-Side: Image Left, Technical Info Right */}
          <div className="hero-gallery-container zoom-effect">
            <ProductImage key={selectedProduct.image} src={selectedProduct.image} name={selectedProduct.name} className="hero-main-img" />
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
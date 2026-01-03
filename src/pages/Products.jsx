import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  // Initial state set to AQUA as per your requirement 
  const [activeTab, setActiveTab] = useState('AQUA');

  const categories = {
    AQUA: {
      title: "Aqua Solutions",
      desc: "Our Aqua division features 23 specialized products, focusing on high-quality feed supplements and water probiotics to ensure optimal aquatic health. "
    },
    POULTRY: {
      title: "Poultry Division",
      desc: "We provide advanced health and nutritional supplements specifically formulated for modern poultry farming needs. "
    },
    SWINE: {
      title: "Swine (Pig)",
      desc: "Our Swine health innovation platform is currently under development — Coming Soon! "
    },
    VETERINARY: {
      title: "Veterinary Care",
      desc: "Offering comprehensive biotech solutions and supplements for livestock and general veterinary applications. "
    }
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Product Categories</h1>
        <p>Providing trusted biotech solutions across four major sectors. </p>
      </div>

      <div className="product-tabs">
        {Object.keys(categories).map((key) => (
          <button 
            key={key}
            className={activeTab === key ? "active" : ""}
            onClick={() => setActiveTab(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="product-display">
        <div className="display-card">
          <span className="category-label">{activeTab}</span>
          <h3>{categories[activeTab].title}</h3>
          <p>{categories[activeTab].desc}</p>
          {activeTab !== 'SWINE' && (
            <button className="view-more-btn">View Full Product List</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
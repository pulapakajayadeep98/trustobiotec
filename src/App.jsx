import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart'; // New Page

import './App.css';

function App() {
  // 1. GLOBAL CART STATE
  const [cart, setCart] = useState({});

  // 2. CALCULATE GLOBAL CART COUNT FOR NAVBAR
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  // 3. GLOBAL UPDATE QUANTITY FUNCTION
  const updateQty = (id, delta) => {
    setCart(prev => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        {/* Pass cartCount to Navbar */}
        <Navbar cartCount={cartCount} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Support categories and pass cart props */}
            <Route path="/products/:category" element={<Products cart={cart} updateQty={updateQty} />} />
            <Route path="/products" element={<Products cart={cart} updateQty={updateQty} />} />
            
            <Route path="/contact" element={<Contact />} />

            {/* NEW CART ROUTE */}
            <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
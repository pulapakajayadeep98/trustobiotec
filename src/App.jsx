import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import './App.css';

function App() {

  useEffect(() => {
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  delay: 0,
  mirror: false,
  disable: false, // 🔥 THIS ENABLES MOBILE
});

  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

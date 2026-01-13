import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

// ✅ Page Loader
import PageLoader from "./components/PageLoader";

import "./App.css";

/* ---------------- ROUTE CONTENT WRAPPER ---------------- */
function AppContent({ cart, updateQty, cartCount }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // 🔁 Trigger loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Page Transition Loader */}
      <PageLoader show={loading} />

      <Navbar cartCount={cartCount} />

      <main className="content">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Products */}
          <Route
            path="/products/:category"
            element={<Products cart={cart} updateQty={updateQty} />}
          />
          <Route
            path="/products"
            element={<Products cart={cart} updateQty={updateQty} />}
          />

          <Route path="/contact" element={<Contact />} />

          {/* Cart */}
          <Route
            path="/cart"
            element={<Cart cart={cart} updateQty={updateQty} />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

/* ---------------- MAIN APP ---------------- */
function App() {
  // 🛒 GLOBAL CART STATE
  const [cart, setCart] = useState({});

  // 🧮 CART COUNT
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  // ➕➖ UPDATE QUANTITY
  const updateQty = (id, delta) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  // ✨ AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <AppContent
          cart={cart}
          updateQty={updateQty}
          cartCount={cartCount}
        />
      </div>
    </Router>
  );
}

export default App;

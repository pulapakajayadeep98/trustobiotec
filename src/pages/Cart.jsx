import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiTrash, HiPlus, HiMinus } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import './Cart.css';
import { allProducts } from './Products';

// Known prices (by product id). Products without a price show "Price on request".
const PRICES = {
  1: 1200, // SEEDGEL aqua
  2: 1500, // GRO KWIK PLUS
  3: 1100, // MOULTING GEL
  4: 2500, // WHITE F
};

const ALL_ITEMS = Object.values(allProducts).flat();

const Cart = ({ cart, updateQty }) => {
  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const p = ALL_ITEMS.find(item => item.id === parseInt(id)) || { id: parseInt(id), name: `Product #${id}` };
    return { ...p, price: PRICES[p.id], qty };
  }).filter(item => item.qty > 0);

  const subtotal = cartItems.reduce((acc, item) => acc + ((item.price || 0) * item.qty), 0);
  const hasUnpriced = cartItems.some(item => item.price === undefined);
  const formatPrice = (price, qty = 1) => (price === undefined ? "Price on request" : `₹${price * qty}`);

  const handleWhatsAppOrder = () => {
    const phone = "919542424508"; //
    let message = "📦 *TRUSTO BIOTECH ORDER*\n--------------------------\n";
    cartItems.forEach(item => {
      message += `• ${item.name}${item.size ? ` (${item.size})` : ''} [x${item.qty}] - ${formatPrice(item.price, item.qty)}\n`;
    });
    message += `\n💰 *Total: ₹${subtotal}${hasUnpriced ? ' + items on request' : ''}*\n--------------------------\n_Please confirm my order._`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-state">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="return-shop">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <Link to="/products" className="continue-link"><HiArrowLeft /> Continue Shopping</Link>
        </div>

        <div className="cart-content">
          <div className="cart-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image || "/trust1.webp"} alt={item.name} onError={(e) => { e.currentTarget.src = "/trust1.webp"; }} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">{formatPrice(item.price)}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => updateQty(item.id, -1)}><HiMinus /></button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)}><HiPlus /></button>
                </div>
                <p className="item-total">{formatPrice(item.price, item.qty)}</p>
                <button className="remove-btn" onClick={() => updateQty(item.id, -item.qty)}><HiTrash /></button>
              </div>
            ))}
          </div>

          <div className="cart-summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
            {hasUnpriced && (
              <p className="summary-note">Some items are priced on request — we'll confirm on WhatsApp.</p>
            )}
            <button className="whatsapp-checkout" onClick={handleWhatsAppOrder}>
              <FaWhatsapp /> Place Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiTrash, HiPlus, HiMinus } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import './Cart.css';

// We need the data structure to find names/prices
const AQUA_PRODUCTS = [
  { id: 1, name: "SEEDGEL aqua", price: 1200 },
  { id: 2, name: "GRO KWIK PLUS", price: 1500 },
  { id: 3, name: "MOULTING GEL", price: 1100 },
  { id: 4, name: "WHITE F", price: 2500 },
  // ... rest of your product data here
];

const Cart = ({ cart, updateQty }) => {
  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const p = AQUA_PRODUCTS.find(item => item.id === parseInt(id));
    return { ...p, qty };
  }).filter(item => item.qty > 0);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const handleWhatsAppOrder = () => {
    const phone = "919542424508"; //
    let message = "📦 *TRUSTO BIOTECH ORDER*\n--------------------------\n";
    cartItems.forEach(item => {
      message += `• ${item.name} [x${item.qty}] - ₹${item.price * item.qty}\n`;
    });
    message += `\n💰 *Total: ₹${subtotal}*\n--------------------------\n_Please confirm my order._`;
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
                <img src="/trust1.png" alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">₹{item.price}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => updateQty(item.id, -1)}><HiMinus /></button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)}><HiPlus /></button>
                </div>
                <p className="item-total">₹{item.price * item.qty}</p>
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
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const whatsappUrl = "https://wa.me/919542424508?text=Hi%20Trusto%20Team!";

  return (
    <div className="contact-page">

      {/* Header Section */}
      <section className="contact-hero">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have a question about our biotech solutions? Our team is ready to help.
        </p>
      </section>

      <div className="contact-main-grid">

        {/* LEFT: Contact Information */}
        <aside className="contact-info-side">

          {/* Email */}
          <div className="contact-info-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info-content">
              <h4>Email</h4>
              <p>trustobiotech08@gmail.com</p>
             
            </div>
          </div>

          {/* Phone */}
          <div className="contact-info-card">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>+91 95424 24508, +91-9990507737</p>
              
            </div>
          </div>

          {/* Address */}
          <div className="contact-info-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-info-content">
              <h4>Office Address</h4>
              <p>
                16-7-382/19, Azampura Masjid,<br />
                Azampura, Chaderghat,<br />
                Hyderabad – 500024
              </p>
            </div>
          </div>

          {/* Socials (Below Address – Corporate Style) */}
       {/* Socials Section */}
<div className="contact-social-section">
  <h5 className="follow-us-title">Follow Us</h5>
  <div className="contact-social-icons">
    <a href="#" className="social-icon facebook" aria-label="Facebook">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="social-icon instagram" aria-label="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" className="social-icon youtube" aria-label="YouTube">
      <i className="fab fa-youtube"></i>
    </a>
    <a href={whatsappUrl} className="social-icon whatsapp" aria-label="WhatsApp">
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
</div>

        </aside>

        {/* RIGHT: Contact Form */}
        <section className="contact-form-side">
          <div className="contact-form-card">
            <h3>Contact Our Team</h3>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Product Inquiry" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>

      </div>

      {/* Map Section */}
      <section className="contact-map">
        <iframe
          title="Trustobiotech Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.576839353995!2d78.4922623!3d17.3762072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIyJzM0LjMiTiA3OMKwMjknMzIuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;

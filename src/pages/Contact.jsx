import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const whatsappUrl = "https://wa.me/919542424508?text=Hi%20Trusto%20Team!";

  // Web3Forms Submission Logic
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    // Your Access Key
    formData.append("access_key", "ba282c69-e654-4340-a89d-2d06ba6efab4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success!");
      setShowPopup(true);
      event.target.reset(); // Clears the form
      
      // Auto-hide the popup after 4 seconds
      setTimeout(() => {
        setShowPopup(false);
        setResult("");
      }, 4000);
    } else {
      console.log("Error", data);
      setResult("Error: " + data.message);
    }
  };

return (
    <div className="contact-page">
      
      {/* Success Popup Overlay remains the same */}

      {/* Header Section */}
      <section className="contact-hero">
        <h1 className="contact-title" data-aos="zoom-in">Get in Touch</h1>
        <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="100">
          Have a question about our biotech solutions? Our team is ready to help.
        </p>
      </section>

      <div className="contact-main-grid">

        {/* LEFT: Contact Information */}
        <aside className="contact-info-side">

          {/* Email */}
          <div className="contact-info-card" data-aos="fade-right" data-aos-delay="200">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info-content">
              <h4>Email</h4>
              <p>trustobiotech08@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-info-card" data-aos="fade-right" data-aos-delay="300">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>+91 95424 24508, +91-9542224508</p>
             

            </div>
          </div>

          {/* Address */}
          <div className="contact-info-card" data-aos="fade-right" data-aos-delay="400">
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

          {/* Socials Section */}
          <div className="contact-social-section" data-aos="fade-up" data-aos-delay="500">
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
        <section className="contact-form-side" data-aos="fade-left" data-aos-delay="200">
          <div className="contact-form-card">
            <h3>Contact Our Team</h3>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Enter your full name" required />
                </div>

                <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="500">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Enter your subject" required />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="600">
                <label>Message</label>
                <textarea name="message" rows="4" placeholder="Enter your message" required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn" data-aos="zoom-in" data-aos-delay="700">
                {result ? result : "Submit "}
              </button>
            </form>
          </div>
        </section>

      </div>

      {/* Map Section */}
      <section className="contact-map" data-aos="fade-up" data-aos-offset="100">
        <iframe
          title="Trustobiotech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8329615597957!2d78.487841!3d17.371759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daaaaaaaab%3A0x6b8a8aaaaaaab!2sAzampura%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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
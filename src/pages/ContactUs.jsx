import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Left: Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea rows="5" placeholder="Enter your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Right: Address + Google Map */}
      <div className="contact-info">
        <h2>Our Location</h2>
        <p>Durga Traders,<br />123 Water Purifier Street,<br />Tirunelveli, Tamil Nadu - 627001</p>
        <iframe
          title="Durga Traders Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5057429452015!2d77.70000647590567!3d8.730539793692939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411b6f27f1251%3A0x40b12864edbca25a!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1646319999999!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

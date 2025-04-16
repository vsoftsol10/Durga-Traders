import { useState, useEffect } from 'react';
import './Footer.css'; // Import the separate CSS file
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className={`footer ${isVisible ? 'footer--visible' : ''}`}>
      {/* Animated background particles */}
      <div className="footer__background">
        <div className="footer__particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="footer__particle"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 15}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="footer__container">
        <div className="footer__content">
          {/* Company section */}
          <div className="footer__section footer__company">
            <h3 className="footer__title">
              <span className="footer__title-text">
                Durga Traders
                <span className="footer__title-underline"></span>
              </span>
            </h3>
            <div className="footer__social">
              <button className="footer__social-button" >
                <svg xmlns="http://www.w3.org/2000/svg" className="footer__social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span>Follow us on Facebook</span>
              </button>
            </div>
          </div>

          {/* Main Works section */}
          <div className="footer__section footer__main-works">
            <h4 className="footer__section-title">Main Works</h4>
            <ul className="footer__list">
              {["Reserve Osmosis", "SeaWater Desalination", "Surface Water Treatment", 
                "Water Softening System", "Iron Removal", "DM Plant", 
                "STP Services", "ETP Services", "Dispenser Services"].map((item, i) => (
                <li key={i} className="footer__list-item">
                  <a href="#" className="footer__link">
                    <span className="footer__link-arrow">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links section */}
          <div className="footer__section footer__quick-links">
            <h4 className="footer__section-title">Quick Links</h4>
            <ul className="footer__list">
              {["Home", "About Us", "Personal Products", "Commercial Products", 
                "Services", "Contact Us"].map((link, i) => (
                <li key={i} className="footer__list-item">
                  <a href="#" className="footer__link">
                    <span className="footer__link-arrow">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="footer__section footer__contact">
            <h4 className="footer__section-title">Get In Touch</h4>
            <div className="footer__contact-card">
              <div className="footer__contact-info">
                <div className="footer__contact-phone">
                  <svg xmlns="http://www.w3.org/2000/svg" className="footer__contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Enquiry: 0452 2371049</span>
                </div>
                <address className="footer__contact-address">
                  60-D, Thangavel Complex, Tiruparankundram Road<br />
                  Vasantha Nagar, Madurai - 625003
                </address>
                <ul className="footer__contact-list">
                  <li className="footer__contact-item">
                    <strong>Email:</strong> <a href="mailto:durgatradersmdu@gmail.com" className="footer__contact-link">durgatradersmdu@gmail.com</a>
                  </li>
                  <li className="footer__contact-item">
                    <strong>Phone:</strong> 0452 2371049
                  </li>
                  <li className="footer__contact-item">
                    <strong>Mobile:</strong> +91 70943 10049
                  </li>
                  <li className="footer__contact-item">
                    <strong>WhatsApp:</strong> +91 70944 99037
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="footer__bottom">
        <div className="footer__copyright">
          © {currentYear} Durga Traders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
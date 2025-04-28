import React from "react";
import { Link } from "react-router-dom";
import "./AboutUS.css";
import aboutGif from "../assets/About.gif";
import since from "../assets/since.gif";
import CounterBox from "../Animation/CounterBox";
// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faMedal, 
  faCertificate, 
  faTools, 
  faCogs,
  faMapMarkerAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Home button for navigation */}
      <Link to="/" className="home-button">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      
      {/* Water droplet decorations */}
      <div className="water-droplet top-left"></div>
      <div className="water-droplet bottom-right"></div>
      
      <h1 className="about-title">About Us</h1>
      <div className="imageContainer">
        <img src={aboutGif} alt="AboutGif" className="aboutImage"/>
      </div>
      
      <p className="about-description">
        Durga Traders (DTRO) stands to its sense of purpose - to provides safe,
        pure & healthy water to the common by giving creative, innovative and
        affordable water purifiers. DTRO is mainly dealing in Reverse Osmosis
        base water treatment components, Domestic, Commercial and Industrial
        R.O. systems. We have good engineering and technical professionals having
        more than 14 years experience in water treatment field.
      </p>
      
      <img src={since} alt="AboutGif" className="aboutImage"/>
      
      <p className="about-description">
        Durga Traders, since 2006, has grown to become recognized as a leader in
        quality, reliability, and innovation. Durga Traders proudly offers
        Home Domestic RO Products, Industrial RO using Reverse Osmosis (RO),
        Ultraviolet (UV) & UF (ultra filtration) technologies including Water
        softener and Iron Removal purifiers.
        
        With this rich experience company aim to serve you the best forever.
        Also DTRO have dealings at national and international level for supply
        and also it is developing indigenous capability to serve good quality
        products.
      </p>
      <p className="about-description">
        We believe that customer is king and we always uphold customers at
        highest level in our organisation. We strive to maintain life long
        relationship with all our customers. We have helped many Industries,
        Schools, Colleges, Hospitals, and Government installations all around
        Tamil Nadu with their specific water treatment needs.
      </p>

      <p className="about-description">
        Durga Traders is a trusted name in water purification solutions, proudly serving
        Madurai and surrounding regions since 2006. With nearly two decades of experience, 
        we specialize in providing high-quality domestic and industrial RO water purifiers, 
        backed by expert service and genuine accessories.
      </p>
      <p className="about-description">
        We take pride in our customer-first approach. Our skilled technicians offer 
        personalized water testing and recommend purifiers tailored to your water quality. 
        Whether it's installation, maintenance, or consultation, we ensure a seamless experience for every customer.
      </p>
      
      <div className="why-choose-us-section">
        <h2 className="about-subtitle">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Established Expertise</h3>
              <p className="feature-description">Operating since 2006 with a focus on water treatment.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Quality Assurance</h3>
              <p className="feature-description">Only genuine parts and products.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faTools} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Skilled Technicians</h3>
              <p className="feature-description">Experienced staff offering excellent after-sales service.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Customized Solutions</h3>
              <p className="feature-description">Products tailored to your water quality needs.</p>
            </div>
          </div>
        </div>
      </div>
      <CounterBox/>
      
      {/* Contact Info Section */}
      <div className="contact-info-section">
        <h2 className="contact-title">Visit Us</h2>
        <div className="contact-content">
          <div className="contact-item">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-text">
              60-D, Thangavel Complex, Tiruparankundram Road, Vasantha Nagar, Madurai, Tamil Nadu – 625003
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-text">
              <a href="mailto:durgatradersro@gmail.com">durgatradersro@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
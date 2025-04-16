import React from "react";
import { Link } from "react-router-dom";
import "./AboutUS.css";
import aboutGif from "../assets/About.gif"
const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Home button for navigation */}
      <Link to="/" className="home-button">
        <i className="fas fa-home"></i> Home
      </Link>
      
      {/* Water droplet decorations */}
      <div className="water-droplet top-left"></div>
      {/* <div className="water-droplet top-right"></div> */}
      {/* <div className="water-droplet bottom-left"></div> */}
      <div className="water-droplet bottom-right"></div>
      
      <h1 className="about-title">About Us</h1>
      <div className="imageContainer">

      <img src={aboutGif} alt="AboutGif"  className="aboutImage"/>
      </div>
      
      <p className="about-description">
        Durga Traders (DTRO) stands to its sense of purpose - to provides safe,
        pure & healthy water to the common by giving creative, innovative and
        affordable water purifiers. DTRO is mainly dealing in Reverse Osmosis
        base water treatment components, Domestic, Commercial and Industrial
        R.O. systems. We have good engineering and technical professionals having
        more than 14 years experience in water treatment field.
      </p>
      
      <div className="feature-highlight">
        <h2 className="about-subtitle">Our Expertise Since 2006</h2>
        
        <p className="about-description">
          Durga Traders, since 2006, has grown to become recognized as a leader in
          quality, reliability, and innovation. Durga Traders proudly offers
          Home Domestic RO Products, Industrial RO using Reverse Osmosis (RO),
          Ultraviolet (UV) & UF (ultra filtration) technologies including Water
          softener and Iron Removal purifiers.
        </p>
      </div>
      
      <p className="about-description">
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
    </div>
  );
};

export default AboutUs;
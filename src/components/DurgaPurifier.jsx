import React from "react";
import "./DurgaPurifier.css"; // Import the CSS file
import purifier1 from "../assets/bestseller1.png"; // Replace with your real image paths
import purifier2 from "../assets/bestseller2.png";
import purifier3 from "../assets/bestseller3.png";

const DurgaPurifier = () => {
    const purifiers = [
        {
          image: purifier1,
          title: "RO Purifiers",
          description: "Removes dissolved impurities and heavy metals, ensuring pure, great-tasting and safe drinking water for your family.",
        },
        {
          image: purifier2,
          title: "RO+UV Purifiers",
          description: "Combines RO and UV purification to eliminate impurities, viruses, and bacteria, providing safe and healthy water.",
        },
        {
          image: purifier3,
          title: "RO+UF+UV Purifiers",
          description: "Offers multi-stage purification to remove contaminants, microorganisms, and suspended particles for 100% safe water.",
        },
      ];
      
      

  return (
    <section className="purifier-section">
      <h2 className="purifier-title">Durga Family of Water Purifiers</h2>
      <div className="purifier-card-container">
        {purifiers.map((purifier, index) => (
          <div className="purifier-card" key={index}>
            <img src={purifier.image} alt={purifier.title} className="purifier-image" />
            <h3 className="purifier-card-title">{purifier.title}</h3>
            <p className="purifier-card-description">{purifier.description}</p>
            <a href="/personal-products" className="purifier-explore">
              Explore <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DurgaPurifier;

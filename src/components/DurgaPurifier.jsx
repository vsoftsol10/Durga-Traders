import React from "react";
import "./DurgaPurifier.css"; // Import the CSS file
import purifier1 from "../assets/bestseller1.png"; // Replace with your real image paths
import purifier2 from "../assets/CommercialOne.jpeg";
import purifier3 from "../assets/Iron-Removal.jpg";

const DurgaPurifier = () => {
    const purifiers = [
        {
          image: purifier1,
          title: "RO Purifiers",
          URL:"/personal-products",
          description: "Removes dissolved impurities and heavy metals, ensuring pure, great-tasting and safe drinking water for your family.",
        },
        {
          image: purifier2,
          title: "DT-250 AUTO",
          URL:"/commercial-products",
          description: "Advanced commercial water purification system designed for small to medium businesses.",
        },
        {
          image: purifier3,
          title: "Waste Water Treatment",
          URL:"/services/iron-removal",
          description: "Iron in water can cause staining, bad taste, and clogging in pipes and appliances, making iron removal systems crucial for many clients",
        },
      ];
      
      

  return (
    <section className="purifier-section">
      <h2 className="purifier-title">Durga Family of Water Treatments!</h2>
      <div className="purifier-card-container">
        {purifiers.map((purifier, index) => (
          <div className="purifier-card" key={index}>
            <img src={purifier.image} alt={purifier.title} className="purifier-image" />
            <h3 className="purifier-card-title">{purifier.title}</h3>
            <p className="purifier-card-description">{purifier.description}</p>
            <a href={purifier.URL} className="purifier-explore">
              Explore <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DurgaPurifier;

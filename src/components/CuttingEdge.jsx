// CuttingEdge.jsx
import React from 'react';
import './CuttingEdge.css';
import copper from "../assets/Copper-icon.jpg"
import stage from "../assets/Stage7.jpg"
import waterSaving from "../assets/water-saving.jpg"

const CuttingEdge = () => {
  return (
    <div className="cutting-edge-container">
      <h1 className="cutting-edge-title">Cutting-Edge Technology</h1>
      
      <div className="features-container">
        {/* Feature Card 1 */}
       <div className="feature-card">
          <div className="feature-icon">
            <img src={stage} alt="Purification Icon" />
          </div>
          <h3 className="feature-title">7 Stage Advanced Purification</h3>
          <p className="feature-description">Gives 100% safe, mineral enriched water without harmful viruses & bacteria</p>
        </div>
        
        {/* Feature Card 2 */}
        <div className="feature-card">
          <div className="feature-icon">
            <img src={waterSaving} alt="Water Saving Icon" />
          </div>
          <h3 className="feature-title">High Water Saving</h3>
          <p className="feature-description">Saves up to 80 glasses of water daily vs. other ROs</p>
        </div>
        
        {/* Feature Card 3 */}
         <div className="feature-card">
          <div className="feature-icon">
            <img src={copper} alt="Copper Icon" />
          </div>
          <h3 className="feature-title">Goodness of Copper</h3>
          <p className="feature-description">Enriches every glass of RO water with 99.8% pure copper</p>
        </div>
        
      </div>
    </div>
  );
};

export default CuttingEdge;
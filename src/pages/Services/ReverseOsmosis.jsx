import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowUpCircle, Navigation } from 'lucide-react';
import './ReverseOsmosis.css'; // Import the CSS file
import reverseOsmosis from "../../assets/Reverse-Osmosis.jpg"

const ReverseOsmosis = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <div className="ro-container">
      {/* Hero Section with Animation */}
      <div className={`ro-hero ${isVisible ? 'visible' : ''}`}>
        <div className="ro-hero-content">
          <h1 className="ro-hero-title">Reverse Osmosis Solutions</h1>
          <div className="ro-hero-image-container">
            <img src={reverseOsmosis} alt="Reverse Osmosis" className="ro-hero-image" />
            <div className="ro-hero-overlay">
              <p className="ro-hero-tagline">Pure Water. Better Life.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ro-main-container">
        <div className={`ro-content-card ${isVisible ? 'visible' : ''}`}>
          <div className="ro-section-header">
            <Droplet className="ro-icon" size={28} />
            <h2 className="ro-section-title">
              We offer comprehensive Reverse Osmosis (RO) services for your purest water needs
            </h2>
          </div>
          <p className="ro-intro-text">
            We offers Reverse Osmosis (RO) services, they would likely provide the following key services as part of their business:
          </p>

          {/* Service Section 1 */}
          <ServiceSection 
            icon={<Settings className="ro-icon" size={24} />}
            title="RO System Installation"
            delay="delay-400"
            isVisible={isVisible}
            services={[
              { title: "Home RO Installation", content: "Setting up residential RO systems to provide clean, purified water for households." },
              { title: "Commercial RO Installation", content: "Installing larger RO units for offices, restaurants, or commercial establishments that require higher water output." },
              { title: "Industrial RO Systems", content: "Custom installation of large-scale RO systems for factories, industries, or agricultural use where large volumes of purified water are needed." }
            ]}
          />

          {/* Service Section 2 */}
          <ServiceSection 
            icon={<Activity className="ro-icon" size={24} />}
            title="RO Maintenance and Servicing"
            delay="delay-500"
            isVisible={isVisible}
            services={[
              { title: "Filter Replacement", content: "Regular replacement of pre-filters, carbon filters, and RO membranes to ensure the system is working efficiently." },
              { title: "Annual Maintenance Contracts (AMC)", content: "Offering maintenance packages to regularly service and inspect the RO units, ensuring uninterrupted service." },
              { title: "System Cleaning and Sanitization", content: "Thorough cleaning of the RO system to prevent bacteria buildup and keep the water tasting fresh." }
            ]}
          />

          {/* Service Section 3 */}
          <ServiceSection 
            icon={<Wrench className="ro-icon" size={24} />}  // ⬅️ Changed from <Tool ... />
            title="RO Repair Services"
            delay="delay-600"
            isVisible={isVisible}
            services={[
            { title: "Troubleshooting and Repairs", content: "Fixing common problems like low water pressure, leaks, or unusual water taste by diagnosing and repairing faulty components." },
            { title: "Membrane Replacement", content: "Replacing worn-out RO membranes when they no longer efficiently filter out contaminants." },
            { title: "Pump and Motor Repairs", content: "Servicing and repairing faulty pumps or motors to restore the system's pressure and functionality." }
         ]}
/>

          {/* Service Section 4 */}
          <ServiceSection 
            icon={<Activity className="ro-icon" size={24} />}
            title="Water Quality Testing"
            delay="delay-700"
            isVisible={isVisible}
            services={[
              { title: "TDS (Total Dissolved Solids) Testing", content: "Measuring the level of dissolved solids in water to ensure the RO system is working effectively." },
              { title: "Contaminant Testing", content: "Testing water for the presence of specific harmful contaminants like heavy metals, bacteria, and chlorine." }
            ]}
          />

          {/* Service Section 5 */}
          <ServiceSection 
            icon={<ArrowUpCircle className="ro-icon" size={24} />}
            title="RO Upgrades and Customization"
            delay="delay-800"
            isVisible={isVisible}
            services={[
              { title: "System Upgrades", content: "Upgrading old RO systems with the latest technology, such as adding UV filters or alkaline cartridges to enhance water quality." },
              { title: "Customization", content: "Offering custom solutions based on the water quality in specific regions, adjusting filters and membranes for optimal performance." }
            ]}
          />

          {/* Service Section 6 */}
          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Consultation Services"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "Water Analysis Consultation", content: "Providing expert advice on the type of RO system that would best suit the customer's water quality and usage needs." },
              { title: "Energy Efficiency Consultation", content: "Suggesting energy-efficient models or upgrades to reduce the overall operational cost of RO systems." }
            ]}
          />
        </div>
        
        {/* Call to Action */}
        {/* <div className={`ro-cta-card ${isVisible ? 'visible' : ''}`}>
          <h3 className="ro-cta-title">Ready for Pure, Clean Water?</h3>
          <p className="ro-cta-text">Contact our experts today for consultation and installation</p>
          <button className="ro-cta-button">
            Get a Free Quote
          </button>
        </div> */}
      </div>
    </div>
  );
};

// Service Section Component
const ServiceSection = ({ icon, title, delay, isVisible, services }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`ro-service-section ${delay} ${isVisible ? 'visible' : ''}`}>
      <div className="ro-service-header">
        {icon}
        <h3 className="ro-service-title">{title}</h3>
      </div>
      <div className="ro-service-content">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`ro-service-item ${hovered === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="ro-service-item-content">
              <Droplet size={18} className="ro-service-item-icon" />
              <div>
                <span className="ro-service-item-title">{service.title}</span>
                <span className="ro-service-item-description">{service.content}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReverseOsmosis;
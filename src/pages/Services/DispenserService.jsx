import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowUpCircle, Navigation, ArrowLeft } from 'lucide-react';
import './DispenserService.css'; // Import the CSS file
import Dispenser from "../../assets/Dispenser-Services.jpg"
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DispenserService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Function to handle navigation back to the service page
  const handleBackClick = () => {
    navigate('/service'); // Adjust this path to match your route to the services page
  };
  
  return (
    <div className="ro-container">
      {/* Back button at the top left corner */}
      <div className="back-button-container">
        <button 
          className="back-button" 
          onClick={handleBackClick}
          // aria-label="Back to Services"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </button>
      </div>
      
      {/* Hero Section with Animation */}
      <div className={`ro-hero ${isVisible ? 'visible' : ''}`}>
        <div className="ro-hero-content">
          <h1 className="ro-hero-title">Dispenser Services</h1>
          <div className="ro-hero-image-container">
            <img src={Dispenser} alt="Reverse Osmosis" className="ro-hero-image" />
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
              We offer comprehensive Dispenser services for your purest water needs
            </h2>
          </div>
          <p className="ro-intro-text">
            We offers Dispenser Services, it could encompass a variety of products and services 
            related to water dispensers or similar devices used in both residential and 
            commercial settings. These services would likely focus on providing high-quality,
            reliable, and efficient solutions for dispensing drinking water, as well as 
            maintaining and servicing these systems.
          </p>

          {/* Service Sections remain unchanged */}
          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Water Dispenser Sales and Installation"
            delay="delay-400"
            isVisible={isVisible}
            services={[
              { title: "Hot and Cold Water Dispensers", content: "Offering a range of water dispensers that provide both hot and cold water for offices, homes, schools, and other public places. These dispensers typically use bottled water or are connected directly to a water line." },
              { title: "Bottled Water Dispensers", content: "Supplying bottled water dispensers, which allow easy refilling with large water containers (typically 20-liter bottles), suitable for locations where access to piped water is limited." },
              { title: "Point-of-Use (POU) Dispensers", content: "Installing direct-piping dispensers that are connected to the buildings water supply, providing filtered water without the need for bottled water refills. This is an eco-friendly and cost-effective solution for businesses." },
              { title: "Countertop Dispensers", content: "Providing compact countertop dispensers for home kitchens, small offices, or commercial spaces with limited space." },
              { title: "Touchless Dispensers", content: "Offering touchless or sensor-based dispensers for more hygienic water dispensing, especially suitable for high-traffic areas like offices, schools, and hospitals." }
            ]}
          />

          {/* All other ServiceSection components remain unchanged... */}
          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Dispenser Maintenance and Repair"
            delay="delay-500"
            isVisible={isVisible}
            services={[
              { title: "Regular Maintenance Services", content: "Providing periodic maintenance services for water dispensers, including cleaning internal components, checking for leaks, replacing worn-out parts, and ensuring optimal performance." },
              { title: "Filter Replacement Services", content: "Replacing water filters at recommended intervals to ensure that the water dispensed is clean, safe, and free from contaminants. This is particularly important for point-of-use (POU) dispensers with built-in filtration systems." },
              { title: "Dispenser Sanitization", content: "Offering deep cleaning and sanitization services to prevent bacterial growth inside the dispenser, ensuring that users get clean and safe drinking water. This is essential for dispensers in public or commercial settings." },
              { title: "Breakdown Repairs", content: "Addressing technical issues such as malfunctioning cooling or heating systems, water leakage, or sensor malfunctions in touchless dispensers. Timely repair services help avoid downtime." },
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Water Dispenser Rentals"
            delay="delay-600"
            isVisible={isVisible}
            services={[
              { title: "Short-Term and Long-Term Rentals", content: "Providing rental options for water dispensers, which can be ideal for businesses, events, or temporary office spaces. Clients can choose from a variety of models based on their specific needs, including hot-and-cold, bottled, or POU systems." },
              { title: "Service Packages with Rentals", content: "Offering maintenance and repair services as part of the rental package, ensuring hassle-free operation for clients who prefer not to own the dispensers outright." },   
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Customized Water Dispensing Solutions"
            delay="delay-700"
            isVisible={isVisible}
            services={[
              { title: "Commercial and Office Solutions", content: "Supplying high-capacity dispensers for commercial use, designed to serve large teams or public spaces with continuous access to clean drinking water. These dispensers are typically connected to an external water filtration system." },
              { title: "Residential Solutions", content: "Offering compact and stylish dispensers for home use, which provide convenient access to both hot and cold water for drinking, cooking, and making beverages like tea and coffee." },
              { title: "Event Solutions", content: "Providing temporary water dispensers for corporate events, conferences, weddings, and outdoor gatherings, ensuring guests have access to clean drinking water without the need for single-use plastic bottles." },
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Filter Replacement and Accessories"
            delay="delay-800"
            isVisible={isVisible}
            services={[
              { title: "Water Filters and Cartridges", content: "Supplying replacement filters and cartridges for all types of dispensers, ensuring water quality is maintained. Different filter types, such as sediment, carbon, and reverse osmosis filters, can be provided based on the dispenser model." },
              { title: "Accessories and Spare Parts", content: "Offering various dispenser accessories such as drip trays, cup dispensers, and spare parts like cooling units, faucets, and water lines, ensuring that dispensers remain functional and meet the clients needs." },
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Sustainability Initiatives"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "Eco-Friendly Dispensers", content: "Promoting eco-friendly dispensers that reduce plastic waste by eliminating the need for single-use water bottles. Direct-piping dispensers with built-in filtration systems reduce the environmental impact of bottled water." },
              { title: "Energy-Efficient Models", content: "Offering energy-efficient dispensers that consume less power when cooling or heating water, helping clients reduce energy consumption in their homes or offices." },      
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Training and Support Services"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "User Training and Education", content: "Offering training on the correct use and basic maintenance of water dispensers, helping users understand how to keep their dispensers in good working condition and when to call for professional service." },
              { title: "Customer Support", content: "Providing dedicated customer support for troubleshooting and inquiries about dispenser operations, maintenance schedules, and product recommendations." },         
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Water Quality Monitoring and Testing"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "Water Testing Services", content: "Offering water quality testing for clients using dispensers with built-in filtration systems, ensuring that the filters are working effectively and that the water is free from harmful contaminants." },
              { title: "Filter Performance Monitoring", content: "Monitoring the performance of filtration systems in point-of-use dispensers and recommending filter replacements or upgrades when necessary to maintain water purity." },
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Benefits of Dispenser Services"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "Convenience", content: "Water dispensers provide instant access to hot or cold water, making it easy for users to stay hydrated, prepare drinks, or cook." },
              { title: "Health and Safety", content: "Regular maintenance and filter replacements ensure that dispensers provide clean, safe drinking water, free from contaminants or bacteria." },
              { title: "Cost-Effectivet", content: "POU dispensers connected to water lines eliminate the need for bottled water, reducing long-term costs for both businesses and households." },
              { title: "Sustainability", content: " Eco-friendly dispensers reduce the reliance on single-use plastic bottles, helping clients minimize their environmental footprint." },
            ]}
          />

          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Applications of Dispenser Services"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "Offices and Workspaces", content: "Ensuring that employees have access to clean drinking water with convenient hot-and-cold dispensers, improving workplace comfort and productivity." },
              { title: "Schools and Educational Institutions", content: "Providing safe and hygienic water dispensing solutions for students and staff, with touchless options to minimize the spread of germs." },
              { title: "Healthcare Facilities", content: " Installing water dispensers in hospitals, clinics, and care centers to ensure patients and staff have easy access to clean water, with a focus on hygiene and safety." },
              { title: "Hotels and Hospitality", content: "Supplying high-capacity water dispensers for guest areas, conference rooms, and restaurants, ensuring continuous access to clean water for guests." },
              { title: "Residential Homes", content: "Offering convenient and stylish water dispensers for homes, making it easier for families to access hot and cold water for drinking, cooking, and making beverages." },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

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

export default DispenserService;
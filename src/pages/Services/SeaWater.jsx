import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowUpCircle, Navigation ,CirclePercent } from 'lucide-react';
import './SeaWater.css'; // Import the CSS file
import seawater from "../../assets/Seawater-Desalination.jpg"

const SeaWater = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="ro-container">
      {/* Hero Section with Animation */}
      <div className={`ro-hero ${isVisible ? 'visible' : ''}`}>
        <div className="ro-hero-content">
          <h1 className="ro-hero-title">Sea Water Desalination</h1>
          <div className="ro-hero-image-container">
            <img src={seawater} alt="Sea Water Desalination" className="ro-hero-image" />
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
              We offer comprehensive SeaWater Desalination services for your purest water needs
            </h2>
          </div>
          <p className="ro-intro-text">
            Durga Traders offers Seawater Desalination Services, they would likely focus on providing specialized systems and services to convert seawater into fresh, potable water. Here are the potential services they might offer:
          </p>

          {/* Service Section 1 */}
          <ServiceSection 
            icon={<Settings className="ro-icon" size={24} />}
            title="Seawater Desalination Plant Installation"
            delay="delay-400"
            isVisible={isVisible}
            services={[
              { title: "Residential Desalination Systems", content: "Installing small-scale desalination units for coastal homes where freshwater is limited or unavailable." },
              { title: "Commercial and Industrial Desalination Plants", content: "Setting up medium to large-scale desalination systems for hotels, resorts, industries, or coastal communities to provide a continuous supply of freshwater." },
              { title: "Mobile Desalination Units", content: "Providing portable desalination systems for temporary setups, such as construction sites, events, or emergency water supply situations." }
            ]}
          />

          {/* Service Section 2 */}
          <ServiceSection 
            icon={<Wrench className="ro-icon" size={24} />}
            title="Customized Desalination Solutions"
            delay="delay-500"
            isVisible={isVisible}
            services={[
              { title: "Reverse Osmosis (RO) Desalination", content: "Installation of seawater reverse osmosis (SWRO) systems that remove salts and impurities through high-pressure filtration, ensuring efficient and cost-effective desalination." },
              { title: "Thermal Desalination Plants", content: "Offering systems like multi-effect distillation (MED) or multi-stage flash distillation (MSF) for clients needing high-capacity and energy-efficient solutions." },
              { title: "Hybrid Systems", content: "Designing customized solutions that combine both RO and thermal technologies for optimized performance, especially for industrial clients." }
            ]}
          />

          {/* Service Section 3 */}
          <ServiceSection 
            icon={<Activity className="ro-icon" size={24} />}
            title="Desalination Plant Maintenance and Servicing"
            delay="delay-600"
            isVisible={isVisible}
            services={[
              { title: "System Inspection and Monitoring", content: "Regularly inspecting desalination plants to ensure they are operating efficiently and producing high-quality water." },
              { title: "Membrane Cleaning and Replacement", content: "Offering services to clean or replace reverse osmosis membranes, which can become fouled over time with salts and other contaminants." },
              { title: "Mechanical Parts Maintenance", content: "Repairing and maintaining pumps, valves, and other mechanical parts critical to desalination plant operations." }
            ]}
          />

          {/* Service Section 4 */}
          <ServiceSection 
            icon={<ArrowUpCircle className="ro-icon" size={24} />}
            title="Energy Efficiency Optimization"
            delay="delay-700"
            isVisible={isVisible}
            services={[
              { title: "Energy Recovery Systems", content: "Installing energy recovery devices to reduce the high energy consumption typical of desalination processes, especially in SWRO systems." },
              { title: "Solar-Powered Desalination", content: "Offering solar-powered desalination solutions, particularly for remote areas or off-grid locations, where energy costs are a concern." }
            ]}
          />

          {/* Service Section 5 */}
          <ServiceSection 
            icon={<Navigation className="ro-icon" size={24} />}
            title="Consultation and Design"
            delay="delay-800"
            isVisible={isVisible}
            services={[
              { title: "Water Source Analysis", content: "Conducting site surveys and water quality assessments to design desalination plants based on local conditions, water salinity, and customer needs." },
              { title: "Customized Plant Design", content: "Providing tailor-made designs for desalination plants that align with the client's budget, energy consumption needs, and required water output." }
            ]}
          />
          {/* Service Section 6 */}
          <ServiceSection 
            icon={<Activity className="ro-icon" size={24} />}
            title="Brine Disposal and Environmental Solutions"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "Brine Management ", content: "Offering solutions for the safe disposal or management of concentrated brine produced during desalination, ensuring minimal environmental impact." },
              { title: "Zero Liquid Discharge (ZLD)", content: "Implementing advanced solutions to recover water from the brine, reducing waste and environmental harm." }
            ]}
          />

          {/* Service Section 7 */}
          <ServiceSection 
            icon={<Activity className="ro-icon" size={24} />}
            title="Water Testing and Quality Assurance"
            delay="delay-900"
            isVisible={isVisible}
            services={[
              { title: "Water Quality Testing", content: "Regular testing of desalinated water to ensure it meets international standards for drinking water, removing contaminants, salts, and impurities." },
              { title: "TDS and Chemical Analysis", content: "Measuring total dissolved solids (TDS) and checking for harmful chemicals or contaminants to ensure safe and potable water." }
            ]}
          />

          
          {/* Service Section 8 */}
          <ServiceSection 
            icon={<ArrowUpCircle className="ro-icon" size={24} />}
            title="Training and Support Services"
            delay="delay-700"
            isVisible={isVisible}
            services={[
              { title: "Operator Training ", content: "Providing training for plant operators to efficiently run and maintain desalination systems." },
              { title: "Remote Monitoring Services", content: "Offering 24/7 remote monitoring of desalination plants to detect and resolve issues before they become significant problems." }
            ]}
          />

           {/* Service Section 9 */}
           <ServiceSection 
            icon={<CirclePercent  className="ro-icon" size={24} />}
            title="Potential Markets"
            delay="delay-700"
            isVisible={isVisible}
            services={[
              { title: "Municipal Water Supply ", content: "Serving coastal communities facing water shortages by providing desalination plants for public water supply." },
              { title: "Tourism and Hospitality", content: "Catering to resorts and hotels in coastal areas where freshwater is scarce." },
              { title: " Industries and Factories", content: "Offering desalination solutions for industries that require large amounts of process water, such as power plants, chemical industries, and agriculture." }
            ]}
          />
        </div>
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

export default SeaWater;
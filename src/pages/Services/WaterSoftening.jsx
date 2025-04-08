import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowUpCircle, Navigation } from 'lucide-react';
import './WaterSoftening.css'; // Import the CSS file
import WaterSofteningSystem from "../../assets/Water-Softening-System.jpg"
const WaterSoftening=()=> {
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
  
  
    return (
      <div className="ro-container">
        {/* Hero Section with Animation */}
        <div className={`ro-hero ${isVisible ? 'visible' : ''}`}>
          <div className="ro-hero-content">
            <h1 className="ro-hero-title">Water Softening Services</h1>
            <div className="ro-hero-image-container">
              <img src={WaterSofteningSystem} alt="Reverse Osmosis" className="ro-hero-image" />
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
                We offer comprehensive Water Softening services for your purest water needs
              </h2>
            </div>
            <p className="ro-intro-text">
                Water softening systems remove minerals like calcium and magnesium that cause hardness, making the water more suitable for various applications.
            </p>
  
            {/* Service Section 1 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Water Softener Installation"
              delay="delay-400"
              isVisible={isVisible}
              services={[
                { title: "Residential Water Softeners", content: "Installing water softening units in homes to provide soft water for daily use such as bathing, cleaning, and laundry. These systems prevent scaling in appliances and pipes, improving water quality." },
                { title: "Commercial Water Softeners", content: "Setting up larger water softening systems for hotels, restaurants, offices, and apartment buildings where water quality is critical for both operations and customer satisfaction." },
                { title: "Industrial Water Softeners", content: "Offering customized water softening systems for industries that require softened water for manufacturing processes, boilers, cooling systems, and other applications where hard water can cause damage." }
              ]}
            />
  
            {/* Service Section 2 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Types of Water Softeners Offered"
              delay="delay-500"
              isVisible={isVisible}
              services={[
                { title: "Ion Exchange Water Softeners", content: "Providing systems that use ion exchange resin beads to remove calcium and magnesium ions, which are replaced by sodium or potassium ions to soften the water." },
                { title: "Salt-Free Water Conditioners", content: "Installing salt-free softeners that prevent scale buildup without using salt, often appealing to clients concerned about sodium levels or environmental impact." },
                { title: "Dual-Tank Water Softeners", content: "Offering dual-tank systems for continuous water softening, where one tank regenerates while the other provides soft water, ensuring uninterrupted service." }
              ]}
            />
  
            {/* Service Section 3 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}  // ⬅️ Changed from <Tool ... />
              title="Water Softener Maintenance and Servicing"
              delay="delay-600"
              isVisible={isVisible}
              services={[
              { title: "Resin Bed Replacement and Cleaning", content: "Regularly replacing and cleaning the resin beads in ion exchange systems to maintain efficiency in removing hard water minerals." },
              { title: "Salt Refilling and System Regeneration", content: "Offering services to replenish the salt supply in ion exchange water softeners and manage the regeneration cycles to keep systems running optimally." },
              { title: "System Tune-ups and Inspections", content: "Providing routine inspections and performance checks on water softening systems to detect potential issues like clogged valves or salt bridges, ensuring continuous soft water supply." }
           ]}
  />
  
            {/* Service Section 4 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Water Testing and Hardness Analysis"
              delay="delay-700"
              isVisible={isVisible}
              services={[
                { title: "Water Hardness Testing", content: "Conducting on-site tests to measure water hardness levels (calcium and magnesium concentrations) and determine the appropriate water softening solution based on the client's specific needs." },
                { title: "Customized Water Treatment Plans", content: "Offering tailored water softening solutions after analyzing water chemistry, ensuring the system meets the required specifications for both household and industrial use." },
 
             ]}
            />
  
            {/* Service Section 5 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Water Softening System Repairs"
              delay="delay-800"
              isVisible={isVisible}
              services={[
                { title: "Troubleshooting and Repair Services", content: "Repairing water softener components such as resin tanks, brine tanks, control valves, and timers to fix issues like low water pressure, salt bridge formation, or ineffective softening." },
                { title: "Leak Detection and Repair", content: "Fixing leaks in water softening systems that could lead to water waste, higher bills, or inefficient softening performance." },
                { title: "Component Replacement", content: "Replacing malfunctioning parts such as water softener heads, motors, or control panels to restore system functionality." }
 
              ]}
            />
  
            {/* Service Section 6 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Advanced Water Softening Technologies"
              delay="delay-900"
              isVisible={isVisible}
              services={[
                { title: "Smart Water Softeners", content: "Offering high-tech water softeners with digital controls and mobile apps for monitoring, managing regeneration cycles, and adjusting settings remotely." },
                { title: "High-Efficiency Water Softeners", content: "Installing systems that use less water and salt during regeneration, making them more energy- and resource-efficient, ideal for environmentally-conscious clients." },
                { title: "Hybrid Systems (Softening + Filtration)", content: "Providing water softeners that also incorporate filtration technology to remove contaminants like chlorine, sediment, and iron along with hardness minerals." }
 
              ]}
            />
 
            {/* Service Section 7 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Sustainability and Eco-Friendly Solutions:"
              delay="delay-900"
              isVisible={isVisible}
              services={[
                { title: "Salt-Free Solutions", content: "Providing eco-friendly water conditioning systems that reduce scale buildup without the use of salt or chemicals, suitable for areas where salt discharge is regulated." },
                { title: "Water and Energy Conservation", content: "Installing high-efficiency systems that use less water and energy during the regeneration process, lowering the environmental impact and operational costs for customers." },
 
              ]}
            />
 
             {/* Service Section 8 */}
             <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Consultation and Customization Services"
              delay="delay-900"
              isVisible={isVisible}
              services={[
                { title: "Water System Assessment", content: "Conducting comprehensive assessments of clients' water systems and usage patterns to design customized water softening solutions that match their needs." },
                { title: "Softener Sizing and Capacity Planning", content: " Ensuring that the installed water softener is appropriately sized for the water usage requirements, whether for residential, commercial, or industrial applications." },
 
              ]}
            />
 
            {/* Service Section 9 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Training and Support Services"
              delay="delay-900"
              isVisible={isVisible}
              services={[
                { title: "Client Training", content: "Providing training to clients on how to operate and maintain their water softeners, including how to check salt levels, monitor the system, and troubleshoot common issues." },
                { title: "Technical Support and Customer Care", content: "Offering ongoing technical support and customer care for system troubleshooting, performance optimization, and timely repairs." },
 
              ]}
            />
 
            {/* Service Section 10 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Benefits of Water Softening Services"
              delay="delay-900"
              isVisible={isVisible}
              services={[
                { title: "Prevents Scale Buildup", content: "Soft water prevents scale from forming in pipes, water heaters, and appliances, extending their lifespan and reducing maintenance costs." },
                { title: "Improves Cleaning Efficiency", content: "Soft water improves the effectiveness of soaps and detergents, making laundry, dishes, and personal care products work better and last longer." },
                { title: "Enhances Water Taste and Quality", content: "Water softening reduces the metallic taste associated with hard water, improving overall water quality for drinking and cooking." },
                { title: "Reduces Energy Consumption", content: "Water heaters and appliances work more efficiently when free from scale buildup, leading to lower energy consumption and costs." }
 
              ]}
            />
            {/* Service Section 11 */}
            <ServiceSection 
              icon={<Navigation className="ro-icon" size={24} />}
              title="Markets Served"
              delay="delay-900"
              isVisible={isVisible}
              services={[
                { title: "Residential", content: "Soft water prevents scale from forming in pipes, water heaters, and appliances, extending their lifespan and reducing maintenance costs." },
                { title: "Hospitality Industry", content: "Soft water improves the effectiveness of soaps and detergents, making laundry, dishes, and personal care products work better and last longer." },
                { title: "Industrial and Manufacturing Sectors", content: "Water softening reduces the metallic taste associated with hard water, improving overall water quality for drinking and cooking." },
                { title: "Healthcare and Laboratories", content: "Water heaters and appliances work more efficiently when free from scale buildup, leading to lower energy consumption and costs." }
 
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
export default WaterSoftening;
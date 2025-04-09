import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowUpCircle, Navigation } from 'lucide-react';
import './DMPlant.css'; // Import the CSS file
import DMplant from "../../assets/dmplant.jpg"
const DMPlant=()=> {
  const [isVisible, setIsVisible] = useState(false);
      
        useEffect(() => {
          setIsVisible(true);
        }, []);
      
      
      
        return (
          <div className="ro-container">
            {/* Hero Section with Animation */}
            <div className={`ro-hero ${isVisible ? 'visible' : ''}`}>
              <div className="ro-hero-content">
                <h1 className="ro-hero-title">DM Plant Services</h1>
                <div className="ro-hero-image-container">
                  <img src={DMplant} alt="Reverse Osmosis" className="ro-hero-image" />
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
                    We offer comprehensive Iron Removal services for your purest water needs
                  </h2>
                </div>
                <p className="ro-intro-text">
                We offers Demineralization (DM) Plant Services, they would likely focus on 
                providing water treatment solutions that remove dissolved minerals and salts, 
                ensuring high-purity water for various industrial and commercial applications. 
                Demineralized water, or deionized water, is essential in industries like pharmaceuticals, 
                power generation, and electronics, where water purity is critical.
                </p>
      
                {/* Service Section 1 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="DM Plant Installation"
                  delay="delay-400"
                  isVisible={isVisible}
                  services={[
                    { title: "Industrial DM Plant Installation", content: "Setting up large-scale DM plants for industries like power plants, pharmaceutical manufacturing, electronics, and chemical processing, where high-purity water is required for processes, cooling, and boiler feed." },
                    { title: "Commercial DM Plant Installation", content: "Installing medium-sized DM plants for commercial applications such as hospitals, laboratories, and hotels, where demineralized water is needed for sterilization, cleaning, and equipment use." },
                    { title: "Small-Scale DM Plants", content: "Offering compact DM plants for small businesses, research labs, or educational institutions that require low volumes of demineralized water for specific processes." }
                  ]}
                />
      
                {/* Service Section 2 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Types of DM Plants Offered"
                  delay="delay-500"
                  isVisible={isVisible}
                  services={[
                    { title: "Two-Bed DM Plants", content: "Providing systems that use two resin beds (cation and anion) to remove both positively and negatively charged ions, producing demineralized water suitable for general industrial applications." },
                    { title: "Mixed-Bed DM Plants", content: "Installing mixed-bed DM plants that combine cation and anion exchange resins in a single unit for higher purity water, often used as a polishing step after reverse osmosis (RO) treatment for ultrapure water needs." },
                    { title: "Automatic and Semi-Automatic DM Plants", content: "Offering both automatic and semi-automatic DM plants, allowing clients to choose between fully automated systems with minimal human intervention or manual systems for cost-effective operations." }
  
                  ]}
                />
      
                {/* Service Section 3 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}  // ⬅️ Changed from <Tool ... />
                  title="DM Plant Maintenance and Servicing"
                  delay="delay-600"
                  isVisible={isVisible}
                  services={[
                  { title: "Resin Replacement and Regeneration", content: "Regularly regenerating or replacing the ion exchange resins in the DM plant to maintain their effectiveness in removing dissolved ions and extending the life of the plant." },
                  { title: "System Cleaning and Disinfection", content: "Providing cleaning and disinfection services to prevent bacterial growth or fouling in the resin beds, ensuring the continuous production of high-purity water." },
                  { title: "Routine Inspections and Tune-ups", content: "Conducting periodic system inspections to check the integrity of valves, pipelines, and resin beds, ensuring optimal performance and early detection of issues." }
               ]}
      />
      
                {/* Service Section 4 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Water Quality Monitoring and Testing"
                  delay="delay-700"
                  isVisible={isVisible}
                  services={[
                    { title: "Conductivity and TDS Testing", content: "Regularly testing the demineralized water for conductivity, Total Dissolved Solids (TDS), and pH levels to ensure it meets the required purity standards for specific applications." },
                    { title: "Water Purity Certification", content: "Providing clients with water quality reports and certification to verify that the water produced by the DM plant meets industry standards for ultrapure or high-purity water." },
                    { title: "Customized Water Treatment Solutions", content: "Offering tailored DM plant solutions based on the specific water quality requirements of clients in industries like pharmaceuticals, power generation, and electronics manufacturing." },
                 ]}
                />
      
                {/* Service Section 5 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="DM Plant Repairs and Troubleshooting"
                  delay="delay-800"
                  isVisible={isVisible}
                  services={[
                    { title: "Resin Leakage and Component Repairs", content: "Repairing or replacing faulty components such as resin beads, control valves, or distribution systems that might cause resin leakage or reduce system efficiency." },
                    { title: "System Regeneration Issues", content: "Addressing problems related to improper regeneration cycles, such as incomplete ion exchange or poor water quality, by recalibrating the system and replacing regenerants if necessary." },
                    { title: "System Blockages and Fouling", content: "Cleaning clogged or fouled resin beds and pipelines to restore normal flow rates and maintain water purity levels." }
     
                  ]}
                />
      
                {/* Service Section 6 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Advanced Technologies in DM Plants"
                  delay="delay-900"
                  isVisible={isVisible}
                  services={[
                    { title: "PLC-Based Automation", content: " Installing DM plants with Programmable Logic Controller (PLC) automation for real-time monitoring and control of water quality, regeneration cycles, and plant operations, ensuring efficient and reliable performance." },
                    { title: "Zero Liquid Discharge (ZLD) Integration", content: " Offering DM systems integrated with ZLD technologies to minimize wastewater generation, making them environmentally friendly and cost-effective in industries with stringent waste disposal regulations." },
                    { title: "Dual-Stage DM Plants", content: "Providing advanced two-stage demineralization plants for higher levels of water purification, especially in industries requiring ultrapure water, such as semiconductor manufacturing or pharmaceutical production." }
     
                  ]}
                />
     
                {/* Service Section 7 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Eco-Friendly and Sustainable DM Solutions"
                  delay="delay-900"
                  isVisible={isVisible}
                  services={[
                    { title: "Efficient Resin Regeneration Systems", content: "Implementing systems that optimize the use of regenerating chemicals, reducing waste and operational costs while maintaining high water quality." },
                    { title: "Low-Water and Low-Energy Systems", content: "Offering energy-efficient DM plants that minimize water and energy consumption during the ion exchange and regeneration processes, supporting sustainable industrial operations." },
                    { title: "Water Recycle and Reuse Solutions", content: "Designing DM plants that include water recycling options, allowing clients to reuse treated water in non-critical processes, thus conserving resources and reducing operational costs." },

     
                  ]}
                />
     
                 {/* Service Section 8 */}
                 <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Consultation and Customization Services"
                  delay="delay-900"
                  isVisible={isVisible}
                  services={[
                    { title: "System Design and Consultation", content: "Providing customized DM plant designs based on the specific needs of clients, including flow rate requirements, water purity standards, and site conditions." },
                    { title: "Turnkey Solutions", content: "Offering end-to-end DM plant installation services, including design, engineering, procurement, installation, and commissioning, ensuring a hassle-free setup for the client." },
                    { title: "Regulatory Compliance and Certification", content: "Assisting clients in meeting industry standards and regulations for water quality, such as those required in pharmaceuticals, food processing, and electronics manufacturing." },
     
                  ]}
                />
     
                {/* Service Section 9 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Training and Support Services"
                  delay="delay-900"
                  isVisible={isVisible}
                  services={[
                    { title: "Operator Training", content: " Offering training programs for plant operators to ensure they are well-versed in running, maintaining, and troubleshooting DM plants effectively." },
                    { title: "Ongoing Technical Support", content: "Providing continuous technical support to address any issues with the DM plant, offering remote monitoring, on-site service, and system optimization." },
     
                  ]}
                />
     
                {/* Service Section 10 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Benefits of DM Plant Services"
                  delay="delay-900"
                  isVisible={isVisible}
                  services={[
                    { title: "High Water Purity", content: "DM plants produce water with extremely low levels of dissolved solids, making them ideal for applications requiring high-purity or ultrapure water." },
                    { title: "Improved Equipment Longevity", content: "By removing dissolved minerals that cause scaling and corrosion, DM water prolongs the lifespan of industrial equipment, reducing maintenance costs and downtime." },
                    { title: "Customizable Solutions", content: "Durga Traders can offer tailored solutions to meet the specific water quality and operational needs of clients, ensuring optimal performance and efficiency." },
                    { title: "Environmental Compliance", content: "By offering eco-friendly and sustainable DM systems, Durga Traders can help clients meet environmental regulations and reduce their operational footprint." }
     
                  ]}
                />
                {/* Service Section 11 */}
                <ServiceSection 
                  icon={<Navigation className="ro-icon" size={24} />}
                  title="Applications of DM Plants"
                  delay="delay-900"
                  isVisible={isVisible}
                  services={[
                    { title: "Power Plants", content: "DM water is essential for steam generation in boilers and turbines, as mineral content can cause scaling and corrosion, reducing efficiency and increasing maintenance costs." },
                    { title: "Pharmaceutical Industry", content: "High-purity water is critical for the production of medicines, as even trace minerals can compromise product quality and safety." },
                    { title: "Electronics Manufacturing", content: "Ultrapure water is used for rinsing and cleaning electronic components, ensuring no mineral residues interfere with delicate processes." },
                    { title: "Chemical Industry", content: "Demineralized water is used as a solvent or process water in chemical manufacturing, where impurities can affect chemical reactions and product quality." },
                    { title: "Laboratories and Research", content: "Research labs require demineralized water for experiments, sample preparation, and equipment cleaning to avoid contamination from dissolved minerals." }
     
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
export default DMPlant;
import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowUpCircle, Navigation } from 'lucide-react';
import './STPServices.css'; // Import the CSS file
import STP from "../../assets/STP.jpg"
const STPServices=()=> {
  const [isVisible, setIsVisible] = useState(false);
       
         useEffect(() => {
           setIsVisible(true);
         }, []);
       
       
       
         return (
           <div className="ro-container">
             {/* Hero Section with Animation */}
             <div className={`ro-hero ${isVisible ? 'visible' : ''}`}>
               <div className="ro-hero-content">
                 <h1 className="ro-hero-title">STP Services</h1>
                 <div className="ro-hero-image-container">
                   <img src={STP} alt="Reverse Osmosis" className="ro-hero-image" />
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
                     We offer comprehensive STP services for your purest water needs
                   </h2>
                 </div>
                 <p className="ro-intro-text">
                 We offers Sewage Treatment Plant (STP) Services, they would likely focus 
                 on providing comprehensive solutions for treating wastewater to meet 
                 environmental and regulatory standards before it is discharged or reused. 
                 Sewage Treatment Plants are essential for residential complexes, commercial properties, 
                 and industries to manage wastewater efficiently, protect public health, and safeguard the environment.
                 </p>
       
                 {/* Service Section 1 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="STP Design and Installation"
                   delay="delay-400"
                   isVisible={isVisible}
                   services={[
                     { title: "Residential STP Systems", content: "Designing and installing sewage treatment plants for apartment complexes, housing societies, and gated communities to treat domestic wastewater, ensuring compliance with local regulations and promoting water reuse." },
                     { title: "Commercial STP Systems", content: " Setting up STP systems for hotels, hospitals, shopping malls, and office complexes where large volumes of wastewater need treatment to meet discharge standards or for reuse in gardening, flushing, or HVAC systems." },
                     { title: "Industrial STP Systems", content: "Providing customized STP solutions for industries that generate both domestic sewage and process effluent, ensuring proper treatment before discharge into municipal systems or reuse in industrial processes." }
                   ]}
                 />
       
                 {/* Service Section 2 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Types of STP Technologies Offered"
                   delay="delay-500"
                   isVisible={isVisible}
                   services={[
                     { title: "Activated Sludge Process (ASP)", content: "Installing STPs based on the ASP method, which uses aeration and biological treatment to break down organic matter in wastewater, producing high-quality effluent." },
                     { title: "Moving Bed Biofilm Reactor (MBBR)", content: "Offering MBBR-based STPs that use biofilm carriers in aeration tanks to enhance the biological treatment process, providing efficient treatment in a compact design." },
                     { title: "Sequential Batch Reactor (SBR)", content: "Providing SBR systems that treat sewage in batches through a series of aeration and settling cycles, allowing flexibility in operation and high-quality effluent suitable for reuse." },
                     { title: "Membrane Bioreactor (MBR)", content: "Offering advanced MBR systems that combine biological treatment with membrane filtration to produce extremely high-quality effluent, suitable for reuse in critical applications like process water in industries." },
                     { title: "Upflow Anaerobic Sludge Blanket (UASB)", content: "Installing UASB reactors for industries or locations where anaerobic treatment is preferred, offering energy-efficient solutions by producing biogas during the sewage treatment process." }

   
                   ]}
                 />
       
                 {/* Service Section 3 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}  // ⬅️ Changed from <Tool ... />
                   title="STP Maintenance and Operation"
                   delay="delay-600"
                   isVisible={isVisible}
                   services={[
                   { title: "Routine Maintenance Services", content: "Providing regular maintenance services to keep STPs operating efficiently, including cleaning aeration tanks, inspecting blowers and pumps, and replacing worn-out parts to ensure uninterrupted performance." },
                   { title: "Sludge Management", content: "Offering services for the removal, treatment, and disposal of sludge generated during the sewage treatment process, ensuring environmentally responsible handling of waste by-products." },
                   { title: "Desludging and Tank Cleaning", content: "Periodically desludging tanks to remove accumulated solids and cleaning storage tanks and reactor vessels to maintain system efficiency and prevent blockages." },
                   { title: "Aeration and Biological Health Monitoring", content: "Monitoring and adjusting aeration levels to optimize the biological treatment process, ensuring that microbial populations remain healthy and effective in breaking down organic matter." }

                ]}
       />
       
                 {/* Service Section 4 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Water Quality Monitoring and Compliance"
                   delay="delay-700"
                   isVisible={isVisible}
                   services={[
                     { title: "Effluent Testing and Certification", content: "Regularly testing treated water for parameters such as Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), Total Suspended Solids (TSS), and pH to ensure compliance with local environmental regulations." },
                     { title: "Regulatory Compliance Services", content: "Assisting clients in meeting discharge standards set by local authorities or environmental agencies, providing certification for effluent quality and helping with documentation and reporting." },
                     { title: "Real-Time Monitoring Solutions", content: " Installing monitoring systems that provide real-time data on water quality, flow rates, and operational parameters, allowing clients to track the performance of their STP and ensure continuous compliance." },
                  ]}
                 />
       
                 {/* Service Section 5 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="STP Repairs and Upgrades"
                   delay="delay-800"
                   isVisible={isVisible}
                   services={[
                     { title: " Component Replacement and Repairs", content: " Repairing or replacing malfunctioning components such as blowers, diffusers, pumps, and control panels to restore the STP's efficiency and avoid operational downtime." },
                     { title: "System Upgrades for Capacity Expansion", content: "Upgrading existing STPs to handle higher volumes of wastewater by adding additional aeration tanks, biofilm carriers, or filtration units to meet growing demand in residential or commercial complexes." },
                     { title: "Retrofit and Optimization Services", content: "Offering retrofit services to modernize older STPs with the latest technologies, such as converting conventional systems into MBBR or MBR systems for improved efficiency and water quality." }
      
                   ]}
                 />
       
                 {/* Service Section 6 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Water Reuse and Recycling Solutions"
                   delay="delay-900"
                   isVisible={isVisible}
                   services={[
                     { title: "Greywater Recycling", content: " Implementing systems to recycle greywater (wastewater from sinks, showers, and laundry) for non-potable uses like irrigation, toilet flushing, and cooling tower makeup water, helping clients reduce their freshwater consumption." },
                     { title: "Effluent Reuse for Landscaping and HVAC", content: "Setting up treated sewage effluent reuse systems to irrigate green spaces, supply cooling towers, or use in other non-potable applications, promoting sustainability and reducing water costs." },
                     { title: " Zero Liquid Discharge (ZLD) Solutions", content: "Offering advanced STP systems designed to achieve ZLD by treating and recycling all wastewater, making them ideal for industries in water-scarce regions or where discharge regulations are stringent." }
      
                   ]}
                 />
      
                 {/* Service Section 7 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Sustainable and Energy-Efficient STP Solutions"
                   delay="delay-900"
                   isVisible={isVisible}
                   services={[
                     { title: "Solar-Powered STP Systems", content: "Designing energy-efficient STP systems that use solar power for aeration, pumps, and other operations, reducing the carbon footprint and operational costs of sewage treatment." },
                     { title: "Biogas Recovery from Sewage", content: "Implementing anaerobic digestion in STPs to produce biogas from sludge, which can be used as a renewable energy source for power generation or heating, enhancing the sustainability of the treatment process." },
                     { title: "Low-Energy Treatment Solutions", content: "Offering low-energy STP technologies like UASB or constructed wetlands for clients looking to minimize energy usage in wastewater treatment, ideal for small communities or rural areas." },
 
      
                   ]}
                 />
      
                  {/* Service Section 8 */}
                  <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Consultation and Customization Services"
                   delay="delay-900"
                   isVisible={isVisible}
                   services={[
                     { title: "STP System Design and Engineering", content: "Providing complete design and engineering services for custom STP solutions based on client requirements, site conditions, and local regulations." },
                     { title: "Turnkey Project Solutions", content: "Offering turnkey STP installation services, including site evaluation, civil construction, equipment procurement, and commissioning, ensuring hassle-free implementation for the client." },
                     { title: "Feasibility Studies and Cost Analysis", content: "Conducting feasibility studies and cost-benefit analyses to help clients choose the most appropriate sewage treatment solution for their specific needs and budget." },
      
                   ]}
                 />
      
                 {/* Service Section 9 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Training and Support Services"
                   delay="delay-900"
                   isVisible={isVisible}
                   services={[
                     { title: "Operator Training", content: " Providing training for plant operators on the operation, maintenance, and troubleshooting of STP systems, ensuring they are equipped to manage day-to-day operations efficiently." },
                     { title: "Ongoing Technical Support", content: "Offering 24/7 technical support to address any operational issues, provide guidance on regulatory compliance, and assist with system optimization for better performance." },
      
                   ]}
                 />
      
                 {/* Service Section 10 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Benefits of STP Services"
                   delay="delay-900"
                   isVisible={isVisible}
                   services={[
                     { title: "Compliance with Environmental Regulations", content: "Ensures that wastewater is treated to meet local environmental standards, preventing pollution and protecting natural water bodies." },
                     { title: "Water Conservation", content: "Treated effluent can be reused for non-potable purposes, reducing the demand for freshwater and lowering water bills for clients." },
                     { title: "Health and Safety", content: "Proper sewage treatment reduces the risk of contamination and waterborne diseases, promoting public health and safety." },
                     { title: "Sustainability and Resource Efficiency", content: "Advanced STP systems can produce biogas and reduce energy consumption, promoting sustainability and helping clients meet their environmental goals." }
      
                   ]}
                 />
                 {/* Service Section 11 */}
                 <ServiceSection 
                   icon={<Navigation className="ro-icon" size={24} />}
                   title="Applications of STP Services"
                   delay="delay-900"
                   isVisible={isVisible}
                   services={[
                     { title: "Residential Complexes and Housing Societies", content: "Treating domestic sewage from large residential areas to comply with environmental norms and promote water reuse for gardening and flushing." },
                     { title: "Commercial Properties", content: " Ensuring hotels, malls, offices, and hospitals meet wastewater discharge standards while saving on water costs by reusing treated effluent for non-potable applications." },
                     { title: "Industrial Establishments", content: "Treating domestic sewage and process wastewater in industries, ensuring compliance with discharge regulations and promoting water conservation through reuse." },
                     { title: "Municipalities and Urban Development", content: "Providing sewage treatment infrastructure for small towns, urban settlements, and rural communities, ensuring environmentally safe wastewater management." },
      
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
export default STPServices;
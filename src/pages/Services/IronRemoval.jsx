import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowLeft, Navigation } from 'lucide-react';
import './IronRemoval.css'; // Import the CSS file
import ironRemoval from "../../assets/Iron-Removal.jpg"
import { useNavigate } from 'react-router-dom';
const IronRemoval=()=> {
  const [isVisible, setIsVisible] = useState(false);
  const navigate=useNavigate();
      useEffect(() => {
        setIsVisible(true);
      }, []);
    
    const handleBack=()=>{
      navigate("/service")
    }
    
      return (
        <div className="ro-container">
           {/* Back button at the top left corner */}
           <div className="back-button-container">
                          <button 
                            className="back-button" 
                            onClick={handleBack}
                            // aria-label="Back to Services"
                          >
                            <ArrowLeft size={20} />
                            <span>Back to Services</span>
                          </button>
                        </div>
          {/* Hero Section with Animation */}
          <div className={`ro-hero ${isVisible ? 'visible' : ''}`}>
            <div className="ro-hero-content">
              <h1 className="ro-hero-title">Iron Removal Services</h1>
              <div className="ro-hero-image-container">
                <img src={ironRemoval} alt="Reverse Osmosis" className="ro-hero-image" />
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
              We offers Iron Removal Services, they would likely specialize in providing systems and 
              solutions to remove excess iron and other related impurities from water, ensuring clean and 
              clear water for residential, commercial, and industrial applications. Iron in water can cause 
              staining, bad taste, and clogging in pipes and appliances, making iron removal systems crucial for many clients.
              </p>
    
              {/* Service Section 1 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Iron Removal System Installation"
                delay="delay-400"
                isVisible={isVisible}
                services={[
                  { title: "Residential Iron Removal Systems", content: "Installing iron removal filters in homes to eliminate iron from well water or municipal water sources, improving water quality for everyday use, such as drinking, cooking, and cleaning." },
                  { title: "Commercial and Industrial Iron Removal Systems", content: "Setting up larger systems for commercial properties, industries, and agricultural operations where iron in water can damage equipment, stain surfaces, or affect production processes." },
                  { title: "Well Water Iron Removal", content: "Offering specialized iron removal solutions for properties using well water, which is often prone to high iron content." }
                ]}
              />
    
              {/* Service Section 2 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Types of Iron Removal Systems Offered"
                delay="delay-500"
                isVisible={isVisible}
                services={[
                  { title: "Oxidation Filtration Systems", content: "Installing systems that use oxidation followed by filtration to remove dissolved iron, manganese, and hydrogen sulfide from water, improving its quality and taste." },
                  { title: "Air Injection Systems", content: "Offering air injection systems that oxidize iron into solid particles, which are then filtered out, providing a chemical-free iron removal solution." },
                  { title: "Water Softener with Iron Filtration", content: "Installing water softeners with specialized iron filters to remove both hardness and iron, ideal for clients facing both water hardness and iron issues." },
                  { title: "Chemical Injection Systems", content: "Providing systems that inject oxidizing agents like chlorine, hydrogen peroxide, or potassium permanganate into the water to precipitate and remove iron." }

                ]}
              />
    
              {/* Service Section 3 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}  // ⬅️ Changed from <Tool ... />
                title="Maintenance and Servicing"
                delay="delay-600"
                isVisible={isVisible}
                services={[
                { title: "Filter Replacement and Cleaning", content: "Regularly replacing or cleaning iron filters, oxidation media, and resin beads in water softeners to ensure the systems continue to operate efficiently.." },
                { title: "System Inspections and Tune-ups", content: "Providing routine inspections and performance checks to diagnose potential issues like clogged filters or insufficient iron removal, ensuring consistent water quality." },
                { title: " Chemical Refills for Injection Systems", content: "Offering refill services for chemical injection systems, ensuring proper dosing of oxidizing agents to maintain effective iron removal." }
             ]}
    />
    
              {/* Service Section 4 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Water Testing and Iron Content Analysis"
                delay="delay-700"
                isVisible={isVisible}
                services={[
                  { title: " Iron Level Testing", content: "Conducting on-site or lab-based testing to measure iron concentration in water and determine the most effective treatment method." },
                  { title: "Water Chemistry Analysis", content: "Testing for related contaminants such as manganese, hydrogen sulfide, and pH levels, as these can influence the choice of iron removal system." },
                  { title: "Custom Treatment Plans", content: "Providing tailored iron removal solutions based on water test results and the specific needs of the client, ensuring optimal system performance." },

   
               ]}
              />
    
              {/* Service Section 5 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Iron Removal System Repairs"
                delay="delay-800"
                isVisible={isVisible}
                services={[
                  { title: "Troubleshooting and Repairs", content: "Repairing components like filtration media, valves, and control units in iron removal systems that are malfunctioning or not providing adequate filtration." },
                  { title: "Pipe and Appliance Descaling", content: "Offering descaling services to remove iron buildup from pipes, water heaters, and other plumbing systems to restore water flow and prevent damage." },
                  { title: "Replacement of Worn-out Components", content: " Replacing key components such as aeration tanks, filters, and media beds to restore iron removal systems to full functionality." }
   
                ]}
              />
    
              {/* Service Section 6 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Advanced Iron Removal Technologies"
                delay="delay-900"
                isVisible={isVisible}
                services={[
                  { title: "Catalytic Filtration Media", content: "Installing systems with advanced filtration media like Greensand or Birm that catalyze the oxidation of iron and remove it efficiently without the need for chemicals." },
                  { title: "Ozone and UV Iron Removal", content: "Providing ozone or ultraviolet (UV) systems that use these methods to oxidize iron and other contaminants, ensuring a chemical-free water treatment process." },
                  { title: "Multi-stage Filtration Systems", content: "Offering multi-stage filtration systems that combine oxidation, sediment filtration, and carbon filtration for comprehensive water treatment, addressing both iron and other water quality issues." }
   
                ]}
              />
   
              {/* Service Section 7 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Sustainability and Eco-Friendly Solutions"
                delay="delay-900"
                isVisible={isVisible}
                services={[
                  { title: "Chemical-free Solutions", content: "Providing iron removal systems that operate without the use of harsh chemicals, such as air injection systems or natural oxidation methods, to minimize environmental impact." },
                  { title: "Water and Energy Efficient Systems", content: "Offering energy-efficient iron removal systems that reduce water and energy consumption during operation and backwashing, helping clients lower their environmental footprint." },
   
                ]}
              />
   
               {/* Service Section 8 */}
               <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Consultation and Customization Services"
                delay="delay-900"
                isVisible={isVisible}
                services={[
                  { title: "Water Source Assessment", content: "Conducting assessments of water sources to determine iron levels, water flow rates, and other factors to design customized iron removal systems that meet the specific needs of the client." },
                  { title: "Softener Sizing and Capacity Planning", content: " Ensuring that the iron removal system installed is appropriately sized based on the water demand, iron concentration, and other contaminant levels for optimal performance." },
   
                ]}
              />
   
              {/* Service Section 9 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Training and Support Services"
                delay="delay-900"
                isVisible={isVisible}
                services={[
                  { title: "Operator Training", content: "Offering training programs for system operators to ensure proper use and maintenance of iron removal systems, including backwashing, chemical dosing, and filter changes." },
                  { title: "Customer Support and Troubleshooting", content: " Providing ongoing customer support to address any issues with the system, offer technical advice, and ensure the system continues to operate effectively." },
   
                ]}
              />
   
              {/* Service Section 10 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Benefits of Iron Removal Services"
                delay="delay-900"
                isVisible={isVisible}
                services={[
                  { title: "Prevents Staining", content: "Iron removal systems prevent rust-colored stains on sinks, tubs, toilets, and laundry, improving the cleanliness of homes and businesses." },
                  { title: "Improves Taste and Odor", content: "Iron removal improves the taste of water by eliminating the metallic taste and smell caused by high iron and hydrogen sulfide levels." },
                  { title: "Protects Plumbing and Appliances", content: "Removing iron prevents the buildup of iron deposits in pipes, water heaters, and appliances, extending their lifespan and reducing maintenance costs." },
                  { title: "Enhances Water Clarity", content: "Iron-free water is clearer and more appealing for drinking, bathing, and washing, improving overall water quality." }
   
                ]}
              />
              {/* Service Section 11 */}
              <ServiceSection 
                icon={<Navigation className="ro-icon" size={24} />}
                title="Target Markets"
                delay="delay-900"
                isVisible={isVisible}
                services={[
                  { title: "Residential", content: "Homeowners using well water or dealing with high iron levels in municipal water who want to protect their plumbing and improve water quality." },
                  { title: "Commercial Establishments", content: "Hotels, restaurants, and laundromats that require clean water for operations, preventing stains and maintaining the quality of their services." },
                  { title: "Industrial Facilities", content: " Industries that rely on water for production processes, boilers, or cooling systems, where iron in water can cause corrosion or damage to equipment." },
                  { title: "Agriculture and Irrigation:", content: "Farms that use well water or surface water for irrigation, where high iron content can clog irrigation systems or affect crop quality." }
   
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
export default IronRemoval;
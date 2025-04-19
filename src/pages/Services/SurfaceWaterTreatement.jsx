import React, { useState, useEffect } from 'react';
import { Droplet, Settings, Wrench, Activity, ArrowLeft, Navigation } from 'lucide-react';
import './SurfaceWaterTreatement.css'; // Import the CSS file
import SurfaceWaterTreatment from "../../assets/Surface-Water-Treatment.jpg"
import { useNavigate } from 'react-router-dom';
const SurfaceWaterTreatement=() =>{
  const [isVisible, setIsVisible] = useState(false);
  const navigate=useNavigate();
   useEffect(() => {
     setIsVisible(true);
   }, []);

   const handleBack=()=>{
    navigate("/service", { replace: true });
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
           <h1 className="ro-hero-title">Surface Water Treatment Services</h1>
           <div className="ro-hero-image-container">
             <img src={SurfaceWaterTreatment} alt="Reverse Osmosis" className="ro-hero-image" />
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
               We offer comprehensive Surface Water Treatment services for your purest water needs
             </h2>
           </div>
           <p className="ro-intro-text">
           We offers Surface Water Treatment Services, they would likely focus on treating water from natural sources like rivers, lakes, and reservoirs to ensure it is safe for drinking, industrial use, or irrigation. Here's a detailed overview of the potential services they might provide:
           </p>
 
           {/* Service Section 1 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Surface Water Treatment Plant Installation"
             delay="delay-400"
             isVisible={isVisible}
             services={[
               { title: "Residential and Community Water Treatment Plants", content: "Installing small to medium-sized water treatment systems for residential communities, rural areas, and towns that rely on surface water sources." },
               { title: "Commercial and Industrial Water Treatment Plants", content: "Setting up large-scale surface water treatment plants for industries, agricultural operations, or commercial properties that need clean water for their operations." },
               { title: "Modular and Mobile Treatment Units", content: "Providing portable water treatment units that can be deployed quickly in remote locations or during emergency situations to ensure access to clean water." }
             ]}
           />
 
           {/* Service Section 2 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Filtration and Purification Services"
             delay="delay-500"
             isVisible={isVisible}
             services={[
               { title: "Coagulation and Flocculation Systems", content: "Installation of systems that use coagulants to remove suspended solids and organic materials from water, making it easier to filter and purify." },
               { title: "Sand and Carbon Filtration", content: "Setting up filtration systems that use sand and activated carbon to remove fine particles, dirt, and organic impurities from water." },
               { title: "Membrane Filtration (Ultrafiltration)", content: "Installing membrane filtration systems that provide additional purification by removing bacteria, viruses, and smaller contaminants from surface water." }
             ]}
           />
 
           {/* Service Section 3 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}  // ⬅️ Changed from <Tool ... />
             title="Water Treatment Chemicals and Solutions"
             delay="delay-600"
             isVisible={isVisible}
             services={[
             { title: "Chemical Dosing Systems", content: "Implementing chemical treatment systems that add coagulants, disinfectants, or pH-adjusting chemicals to surface water for improved water quality." },
             { title: "Disinfection and Sterilization", content: "Offering chlorination, ozone, or UV disinfection systems to kill pathogens like bacteria, viruses, and parasites, ensuring water is safe for consumption." },
             { title: "pH Balancing and Mineral Addition", content: "Adjusting the pH levels of treated water to meet regulatory standards and adding necessary minerals to improve the taste and quality of the water." }
          ]}
 />
 
           {/* Service Section 4 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Advanced Treatment Technologies:"
             delay="delay-700"
             isVisible={isVisible}
             services={[
               { title: "Advanced Oxidation Processes (AOP)", content: "Using ozone, hydrogen peroxide, or UV light to break down harmful organic chemicals, pesticides, and emerging contaminants in surface water." },
               { title: "Activated Carbon Adsorption", content: "Installing systems that use activated carbon to adsorb harmful chemicals, odors, and tastes from water, particularly important for industries needing high-quality water." },
               { title: "Ion Exchange and Heavy Metal Removal", content: "Providing ion exchange systems to remove specific ions like lead, arsenic, or fluoride from surface water, improving safety for consumption." }

            ]}
           />
 
           {/* Service Section 5 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Maintenance and Operational Services"
             delay="delay-800"
             isVisible={isVisible}
             services={[
               { title: "Plant Maintenance and Servicing", content: "Offering regular maintenance contracts to ensure surface water treatment plants are functioning efficiently, with services like filter cleaning, component replacement, and system inspections." },
               { title: "Equipment Repairs", content: "Providing repair services for pumps, filters, and other treatment equipment to avoid breakdowns and ensure continuous water supply." },
               { title: "Remote Monitoring and Automation", content: "Offering automated monitoring systems that track the quality of treated water and plant operations in real-time, allowing for remote control and troubleshooting." }

             ]}
           />
 
           {/* Service Section 6 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Water Testing and Quality Monitoring"
             delay="delay-900"
             isVisible={isVisible}
             services={[
               { title: "Water Quality Analysis", content: "Performing comprehensive water testing to measure levels of turbidity, suspended solids, bacteria, heavy metals, and chemical contaminants in surface water sources." },
               { title: "TDS and Contaminant Testing", content: "Testing for Total Dissolved Solids (TDS), pH levels, and other parameters to ensure that treated water meets local or international drinking water standards." },
               { title: "On-site and Laboratory Testing", content: "Offering both on-site water testing services and detailed laboratory testing for complex water quality issues." }

             ]}
           />

           {/* Service Section 7 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Sustainable Water Management Solutions"
             delay="delay-900"
             isVisible={isVisible}
             services={[
               { title: "Green Filtration Technologies", content: "Providing eco-friendly filtration systems that use natural processes like wetlands, bioswales, or constructed lagoons to improve water quality before it reaches treatment plants." },
               { title: "Water Reuse and Recycling Systems", content: "Designing systems for the reuse of treated surface water in industrial processes, irrigation, or landscape watering, reducing overall water consumption." },
               { title: "Energy-efficient Water Treatment", content: "Implementing energy-efficient treatment systems that reduce operational costs and environmental impact, such as solar-powered systems or energy-efficient pumps." }

             ]}
           />

            {/* Service Section 8 */}
            <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Consultation and Design Services"
             delay="delay-900"
             isVisible={isVisible}
             services={[
               { title: "Water Source Assessment and Design", content: "Conducting site surveys and water quality assessments to design custom surface water treatment plants that meet the specific needs of a clients water source and usage requirements." },
               { title: "Regulatory Compliance Assistance", content: "Providing consultation services to help businesses and municipalities meet local water treatment regulations, obtain permits, and adhere to safety and environmental standards." },

             ]}
           />

           {/* Service Section 9 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Training and Support Services"
             delay="delay-900"
             isVisible={isVisible}
             services={[
               { title: " Operator Training", content: "Offering training programs for plant operators to ensure they understand how to run and maintain surface water treatment plants efficiently." },
               { title: "Customer Support", content: "Providing ongoing technical support, troubleshooting, and consultation for clients to ensure their treatment systems continue to function optimally." },

             ]}
           />

           {/* Service Section 10 */}
           <ServiceSection 
             icon={<Navigation className="ro-icon" size={24} />}
             title="Potential Applications of Durga Traders Surface Water Treatment Services"
             delay="delay-900"
             isVisible={isVisible}
             services={[
               { title: "Municipal Water Supply", content: "Treating surface water to provide clean drinking water to towns and cities." },
               { title: "Agricultural Use", content: "Treating water for safe use in irrigation, ensuring crops are watered with contaminant-free water." },
               { title: "Industrial Use", content: "Providing industries with treated surface water for use in processes like cooling, cleaning, and production where water quality is crucial." },
               { title: "Tourism and Hospitality", content: "Supplying clean, treated water for resorts, hotels, and recreational areas that use surface water as a source." }


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
export default SurfaceWaterTreatement;
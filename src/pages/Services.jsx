import React, { useEffect, useRef } from 'react';
import "./Services.css"; // We'll include the CSS separately

// Import images - keeping the same imports you had in your original code
import reverseOsmosisImg from "../assets/service/Reverse-Osmosis.png";
import SeaWater from "../assets/service/SeaWater-Desalination.png";
import surfaceWater from "../assets/service/Surface-Water-Treatment.png";
import waterSoftening from "../assets/service/Water-Softening-System.png";
import ironRemoval from "../assets/service/Iron-Removal.png";
import dmPlant from "../assets/service/DM-Plant.png";
import stp from "../assets/service/STP-Services.png";
import etp from "../assets/service/ETP-Services.webp";
import dispenser from "../assets/service/Dispenser-Services.png";

const Services = () => {
  // Services data
  const servicesData = [
    { 
      title: 'REVERSE OSMOSIS', 
      description: 'Advanced filtration technology removing 99% of contaminants for the purest drinking water possible. Our RO systems provide crystal-clear water thats free from impurities, ensuring the highest quality for your drinking and cooking needs.',
      image: reverseOsmosisImg,
      path: '/services/reverse-osmosis'
    },
    { 
      title: 'SEAWATER DESALINATION', 
      description: 'Converting seawater into fresh, potable water through specialized high-efficiency systems. Our desalination technology makes the abundant resource of seawater accessible for human consumption and industrial use.',
      image: SeaWater,
      path: '/services/seawater-desalination'
    },
    { 
      title: 'SURFACE WATER TREATMENT', 
      description: 'Transforming river and lake water into safe, crystal-clear water for drinking and irrigation. Our comprehensive surface water treatment solutions address the unique challenges of treating open water sources.',
      image: surfaceWater,
      path: '/services/surface-water-treatment'
    },
    { 
      title: 'WATER SOFTENING SYSTEM', 
      description: 'Removing hardness minerals for softer water thats gentler on skin, clothes, and appliances. Our water softening systems effectively eliminate calcium and magnesium, preventing scale buildup.',
      image: waterSoftening,
      path: '/services/water-softening'
    },
    { 
      title: 'IRON REMOVAL', 
      description: 'Eliminating iron and related impurities to prevent staining and preserve appliance life. Our specialized iron removal systems address the common problem of iron contamination in groundwater sources.',
      image: ironRemoval,
      path: '/services/iron-removal'
    },
    { 
      title: 'DM PLANT', 
      description: 'Industrial-grade demineralization for ultra-pure water essential for specialized applications. Our DM plants provide high-purity water for industrial processes, laboratories, and pharmaceutical applications.',
      image: dmPlant,
      path: '/services/dm-plant'
    },
    { 
      title: 'STP SERVICES', 
      description: 'Comprehensive sewage treatment solutions meeting environmental standards for discharge or reuse. Our STP services ensure proper treatment of wastewater for safe disposal or recycling.',
      image: stp,
      path: '/services/stp-services'
    },
    { 
      title: 'ETP SERVICES', 
      description: 'Advanced effluent treatment removing industrial contaminants for environmentally safe discharge. Our ETP services help industries comply with environmental regulations while minimizing their ecological footprint.',
      image: etp,
      path: '/services/etp-services'
    },
    { 
      title: 'DISPENSER SERVICES', 
      description: 'Premium water dispensers for instant access to purified water in residential and commercial settings. Our dispensers provide convenient, on-demand access to clean drinking water.',
      image: dispenser,
      path: '/services/dispenser-services'
    },
  ];

  const observerRef = useRef(null);
  
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.2 });
    
    // Select all animation targets
    const animationElements = document.querySelectorAll('.animate-on-scroll');
    animationElements.forEach(el => {
      observerRef.current.observe(el);
    });
    
    // Header animation
    const header = document.querySelector('.services-header');
    if (header) {
      setTimeout(() => {
        header.classList.add('header-animate');
      }, 300);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const handleWaveEffect = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.offsetLeft - diameter/2}px`;
    circle.style.top = `${e.clientY - btn.offsetTop - diameter/2}px`;
    circle.classList.add('ripple-effect');
    
    const ripple = btn.getElementsByClassName('ripple-effect')[0];
    if (ripple) {
      ripple.remove();
    }
    
    btn.appendChild(circle);
  };

  return (
    <div className="services-container">
      {/* Header Section */}
      <div className="services-header">
        <h1 className="fade-in-down">OUR SERVICES</h1>
        <div className="services-divider slide-in"></div>
        <p className="fade-in-up">We provide advanced water purification and treatment solutions for residential and commercial applications, 
          ensuring clean, safe, and high-quality water for all your needs.</p>
      </div>
      
      {/* Services Sections */}
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-section animate-on-scroll ${index % 2 !== 0 ? 'alternate-layout' : ''}`} 
               data-animation={index % 2 === 0 ? "slide-right" : "slide-left"}>
            <div className="service-row">
              <div className="service-image">
                <div className="image-container">
                  <div className="water-ripple"></div>
                  <img src={service.image} alt={service.title} className="floating-animation" />
                </div>
              </div>
              <div className="service-content">
                <h2 className="title-animate">{service.title}</h2>
                <p>{service.description}</p>
                <a 
                  href={service.path} 
                  className="service-btn"
                  onClick={handleWaveEffect}
                >
                  Know More
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Section */}
      <div className="cta-section animate-on-scroll" data-animation="fade-up">
        <div className="cta-background-animation"></div>
        <h2>Ready for Pure, Clean Water?</h2>
        <p>Contact our experts today to find the perfect water purification solution tailored to your specific needs.</p>
        <a 
          href="/contact" 
          className="cta-btn pulse-animation"
          onClick={handleWaveEffect}
        >
          Contact Us
          <span className="arrow-icon">→</span>
        </a>
      </div>
    </div>
  );
};

export default Services;
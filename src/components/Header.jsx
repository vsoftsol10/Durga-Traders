import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

function Navbar() {
  const navRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = (linkName) => {
    if (!isMobile) {
      setActiveLink(linkName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveLink("");
    }
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMobile && navRef.current.classList.contains("responsive_nav")) {
      showNavbar();
    }
  };

  return (
    <header>
      <h2 className="logo">
        <span className="logo-text">Durga</span>
        <span className="logo-accent">Traders</span>
      </h2>
      <nav ref={navRef}>
        <a 
          href="/#" 
          className={`nav-link ${activeLink === "home" ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
          onClick={handleLinkClick}
        >
          <span className="link-text">Home</span>
          <span className="link-hover-effect"></span>
        </a>
        <a 
          href="/aboutUs" 
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
          onClick={handleLinkClick}
        >
          <span className="link-text">About Us</span>
          <span className="link-hover-effect"></span>
        </a>
        <div 
          className={`dropdown-container ${isDropdownOpen ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={handleMouseLeave}
        >
          <a 
            href="/#" 
            onClick={toggleDropdown} 
            className={`nav-link dropdown-trigger ${activeLink === "products" ? "active" : ""}`}
          >
            <span className="link-text">Products</span>
            <span className="dropdown-arrow"></span>
            <span className="link-hover-effect"></span>
          </a>
          <div className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`}>
            <a 
              href="/personal-products" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              <span className="dropdown-item-text">Personal Products</span>
              <span className="dropdown-item-bg"></span>
            </a>
            <a 
              href="/commercial-products" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              <span className="dropdown-item-text">Commercial Products</span>
              <span className="dropdown-item-bg"></span>
            </a>
          </div>
        </div>
        <a 
          href="/service" 
          className={`nav-link ${activeLink === "service" ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter("service")}
          onMouseLeave={handleMouseLeave}
          onClick={handleLinkClick}
        >
          <span className="link-text">Service</span>
          <span className="link-hover-effect"></span>
        </a>
        <a 
          href="/contact" 
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={handleMouseLeave}
          onClick={handleLinkClick}
        >
          <span className="link-text">Contact Us</span>
          <span className="link-hover-effect"></span>
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
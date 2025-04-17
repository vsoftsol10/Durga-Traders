import { useRef, useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/durga-logo.png"

function Navbar() {
  // States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Refs
  const navRef = useRef();
  const headerRef = useRef();
  const searchInputRef = useRef();

  // Check viewport size and handle scroll effects
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Header behavior on scroll
      if (position > 200) {
        setIsHeaderMinimized(true);
      } else {
        setIsHeaderMinimized(false);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen((prev) => !prev);
    
    // Prevent body scrolling when nav is open
    if (!isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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

  const handleLinkClick = () => {
    if (isMobile && navRef.current.classList.contains("responsive_nav")) {
      showNavbar();
    }
  };

  const toggleSearch = () => {
    setSearchOpen(prev => !prev);
  };

  return (
    <header 
      ref={headerRef} 
      className={`${isHeaderMinimized ? 'minimized' : ''} ${scrollPosition > 50 ? 'scrolled' : ''}`}
    >
      <div className="header-container">
        {/* Logo Section with animated elements */}
        <div className="logoBackground">
        <div className="logo-container">
            <a href="/" className="logolink">
              <img src={logo} alt="Durga Traders"  className="logo"/>
            </a>
        </div>

        </div>

        {/* Navigation with modern interactions */}
        <nav ref={navRef}>
          <div className="nav-backdrop"></div>
          <div className="nav-content">
            <div className="mobile-nav-header">
              <div className="mobile-logo">
              <img src={logo} alt="Durga Traders"  className="mbl-logo"/>
              </div>
              <button className="nav-close-btn" onClick={showNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <a 
              href="/" 
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
              onClick={handleLinkClick}
            >
              <span className="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
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
              <span className="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </span>
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
                <span className="link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 01-8 0"></path>
                  </svg>
                </span>
                <span className="link-text">Products</span>
                <span className="dropdown-arrow"></span>
                <span className="link-hover-effect"></span>
              </a>
              <div className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`}>
                <div className="dropdown-header">
                  <span>Our Product Categories</span>
                </div>
                <div className="dropdown-grid">
                  <a 
                    href="/personal-products" 
                    className="dropdown-item"
                    onClick={handleLinkClick}
                  >
                    <div className="dropdown-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Personal Products</span>
                      <span className="dropdown-item-desc">Products for individual use</span>
                    </div>
                    <span className="dropdown-item-bg"></span>
                  </a>
                  <a 
                    href="/commercial-products" 
                    className="dropdown-item"
                    onClick={handleLinkClick}
                  >
                    <div className="dropdown-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
                      </svg>
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Commercial Products</span>
                      <span className="dropdown-item-desc">Solutions for businesses</span>
                    </div>
                    <span className="dropdown-item-bg"></span>
                  </a>
                 
                </div>
              </div>
            </div>

            <a 
              href="/service" 
              className={`nav-link ${activeLink === "service" ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter("service")}
              onMouseLeave={handleMouseLeave}
              onClick={handleLinkClick}
            >
              <span className="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                </svg>
              </span>
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
              <span className="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </span>
              <span className="link-text">Contact Us</span>
              <span className="link-hover-effect"></span>
            </a>
            
            <div className="mobile-nav-footer">
              <div className="social-links">
                <a href="https://www.facebook.com/durgatradersro" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
               
              </div>
            </div>
          </div>
        </nav>

        {/* Header action buttons */}
        <div className="header-actions">
         
          
          <a href="/personal-products" className="action-btn-cart-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
            </svg>
            {/* <span className="cart-count">0</span> */}
          </a>

          

          <button className="mobile-menu-btn" onClick={showNavbar}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
      
      {/* Animated progress bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;
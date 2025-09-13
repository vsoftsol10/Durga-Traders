import React from 'react';
import { useRef, useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/durga-logo.png";

function Navbar() {
  // States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Refs
  const navRef = useRef();
  const headerRef = useRef();

  // Initialize cart count from localStorage and set up event listener
  useEffect(() => {
    const updateCartCount = () => {
      try {
        const storedCart = localStorage.getItem('cartItems');
        const parsedCart = storedCart ? JSON.parse(storedCart) : [];
        setCartCount(parsedCart.length);
      } catch (error) {
        console.error("Error reading cart from localStorage:", error);
        setCartCount(0);
      }
    };

    updateCartCount();

    const handleCartUpdate = (event) => {
      setCartCount(event.detail.count);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  // Check viewport size and handle scroll effects
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 1024);
    
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsHeaderMinimized(position > 200);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen((prev) => !prev);
    document.body.style.overflow = !isNavOpen ? 'hidden' : 'auto';
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = (linkName) => {
    if (!isMobile) setActiveLink(linkName);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveLink("");
  };

  const handleLinkClick = () => {
    if (isMobile && navRef.current.classList.contains("responsive_nav")) {
      showNavbar();
    }
  };

  return (
    <header
      ref={headerRef}
      className={`${isHeaderMinimized ? "minimized" : ""} ${scrollPosition > 50 ? "scrolled" : ""}`}
    >
      <div className="header-container">
        {/* Logo Section */}
        <div className="logoBackground">
          <div className="logo-container">
            <a href="/" className="logolink">
              <img src={logo} alt="Durga Traders" className="logo" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav ref={navRef}>
          <div className="nav-backdrop" onClick={showNavbar}></div>
          <div className="nav-content">
            <div className="mobile-nav-header">
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
                <div className="dropdown-header">
                  <span>Our Product Categories</span>
                </div>
                <div className="dropdown-grid">
                  <a href="/personal-products" className="dropdown-item" onClick={handleLinkClick}>
                    <div className="dropdown-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Residential Products</span>
                      <span className="dropdown-item-desc">Products for individual use</span>
                    </div>
                  </a>
                  <a href="/commercial-products" className="dropdown-item" onClick={handleLinkClick}>
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
                  </a>
                  <a href="/services/water-softening" className="dropdown-item" onClick={handleLinkClick}>
                    <div className="dropdown-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2s5 6 5 10a5 5 0 1 1-10 0c0-4 5-10 5-10z" />
                        <g transform="translate(16,5)">
                          <path d="M0 0 L0 2" />
                          <path d="M-1 1 L1 1" />
                          <path d="M-0.7 -0.7 L0.7 0.7" />
                        </g>
                      </svg>
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Water Softener</span>
                      <span className="dropdown-item-desc">Scalable water softening systems for businesses</span>
                    </div>
                  </a>
                  <a href="/services/iron-removal" className="dropdown-item" onClick={handleLinkClick}>
                    <div className="dropdown-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="3" width="12" height="18" rx="2" ry="2"></rect>
                        <path d="M2 7h4"></path>
                        <path d="M4 5l2 2-2 2"></path>
                        <path d="M18 17h4"></path>
                        <path d="M20 15l2 2-2 2"></path>
                      </svg>
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Iron Removal</span>
                      <span className="dropdown-item-desc">Industrial & commercial water treatment</span>
                    </div>
                  </a>
                  <a href="/services/stp-services" className="dropdown-item" onClick={handleLinkClick}>
                    <div className="dropdown-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512" fill="currentColor">
                        <rect x="64" y="160" width="160" height="160" rx="16" ry="16" />
                        <rect x="96" y="192" width="32" height="32" fill="#fff" />
                        <rect x="144" y="192" width="32" height="32" fill="#fff" />
                        <rect x="288" y="128" width="128" height="192" rx="16" ry="16" />
                        <path d="M288 128a64 64 0 0 1 128 0" fill="none" stroke="currentColor" strokeWidth="32" />
                        <path d="M224 240h64v48h-64v64H128v-64h64v-48z" fill="currentColor" />
                        <ellipse cx="384" cy="400" rx="96" ry="48" fill="none" stroke="currentColor" strokeWidth="32" />
                        <path d="M320 400c16 16 32 16 48 0s32-16 48 0 32 16 48 0" stroke="currentColor" strokeWidth="24" fill="none" />
                      </svg>
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">STP</span>
                      <span className="dropdown-item-desc">Sewage Treatment Plant</span>
                    </div>
                  </a>
                  <a href="/services/etp-services" className="dropdown-item" onClick={handleLinkClick}>
                    <div className="dropdown-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="80" y="160" width="128" height="192" rx="16" ry="16" fill="none" stroke="currentColor" />
                        <rect x="256" y="128" width="144" height="224" rx="24" ry="24" fill="none" stroke="currentColor" />
                        <path d="M256 128a72 72 0 0 1 144 0" fill="none" stroke="currentColor" />
                        <path d="M208 224h48v64h-48v64H128v-64h48v-64z" fill="none" stroke="currentColor" />
                        <ellipse cx="368" cy="400" rx="96" ry="40" fill="none" stroke="currentColor" />
                        <path d="M304 400c16 16 32 16 48 0s32-16 48 0 32 16 48 0" stroke="currentColor" />
                      </svg>
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">ETP</span>
                      <span className="dropdown-item-desc">Effluent Treatment Plant</span>
                    </div>
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
              <span className="link-text">Services</span>
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

            {/* Mobile Quote Button */}
            <a href="/contact" className="mobile-quote-btn" onClick={handleLinkClick}>
              Get a Quote
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
          <a href="/contact" className="quote-btn">Get a Quote</a>
          
          <a href="/personal-products" className="cart-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count">{cartCount}</span>
          </a>

          <button className="mobile-menu-btn" onClick={showNavbar}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{
            width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
          }}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;
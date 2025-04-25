import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Keep track of the scroll listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        // Comment out to keep always visible
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    console.log('scrollToTop function called');
    
    // First try: Standard window scroll behavior
    window.scrollTo(0, 0);
    
    // Second try: For React Router, force a soft navigation to the same route
    // This will trigger React Router's scroll restoration
    setTimeout(() => {
      if (window.scrollY > 0) {
        console.log('Trying React Router navigation refresh');
        // Navigate to the same location with replace:true to avoid adding to history
        navigate(location.pathname + location.search, { replace: true });
      }
    }, 100);
    
    // Third try: Find main content area and scroll that
    setTimeout(() => {
      if (window.scrollY > 0) {
        // Common container IDs in React applications
        const mainContent = 
          document.querySelector('main') || 
          document.getElementById('main-content') ||
          document.getElementById('content') ||
          document.querySelector('.content-container');
        
        if (mainContent) {
          console.log('Scrolling main content element', mainContent);
          mainContent.scrollTop = 0;
        }
      }
    }, 200);
    
    // Fourth try: Try to find the most common scrollable container in React Router apps
    setTimeout(() => {
      const possibleContainers = [
        // Common wrapper elements
        document.querySelector('.router-view'),
        document.querySelector('.outlet-container'),
        document.querySelector('.page-content'),
        document.querySelector('[role="main"]'),
        // Direct parent of the Switch/Routes component
        document.querySelector('.route-container'),
        document.getElementById('routes')
      ];
      
      for (const container of possibleContainers) {
        if (container) {
          console.log('Trying to scroll container:', container);
          container.scrollTop = 0;
        }
      }
    }, 300);
  };
  
  return (
    <div className={`scroll-to-top visible`}>
      <div className="button-container">
        <div className={`ripple-effect ${isHovering ? 'active' : ''}`}></div>
        <div className={`rotating-border ${isHovering ? 'active' : ''}`}></div>
        
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-label="Scroll to top"
          className={isHovering ? 'hover' : ''}
        >
          <div className="pulsing-bg"></div>
          <svg
            className={`arrow-icon ${isHovering ? 'floating' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
          
          <div className={`tooltip ${isHovering ? 'show' : ''}`}>
            <div className="tooltip-arrow"></div>
            <div className="tooltip-text">
              {'Back to top'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="letter" 
                  style={{animationDelay: `${index * 30}ms`}}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
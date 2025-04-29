import { useState, useEffect } from 'react';
import './UpArrow.css';

const UpArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Add scroll event listener
  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    checkScroll();

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={`up-arrow-container ${isVisible ? 'up-arrow-visible' : 'up-arrow-hidden'}`}>
      <button
        className="up-arrow-button animate-pulse"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="up-arrow-icon"
        >
          <path d="M12 19V6M5 13l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default UpArrow;
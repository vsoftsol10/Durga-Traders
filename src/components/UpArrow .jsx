import React, { useState, useEffect } from 'react';

const UpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 100) {
      console.log("Setting visible to true");
      setIsVisible(true);
    } else {
      console.log("Setting visible to false");
      setIsVisible(false);
    }
  };

  // Add and remove the event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div 
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 z-50"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V6M5 13l7-7 7 7" />
          </svg>
        </div>
      )}
      
      
    </>
  );
};

export default UpArrow;
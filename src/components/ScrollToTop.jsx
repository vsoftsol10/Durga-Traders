import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    // Check on initial load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const buttonStyles = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    zIndex: 9999,
    display: isVisible ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  return (
    <button
      onClick={scrollToTop}
      style={buttonStyles}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#0056b3';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#007bff';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
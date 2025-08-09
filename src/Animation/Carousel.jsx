import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOne from '../assets/Home slider 003.png';
import HomeTwo from '../assets/Home slider 002.png';
import HomeThree from '../assets/Home slider 005.png';
// import HomeFour from '../assets/Home slider 004.gif';

// Styled components
const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '80vh',
  overflow: 'hidden',
  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.down('md')]: {
    height: '80vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '90vh',
  },
}));

const SlideContainer = styled(Box)(({ shouldShow }) => ({
  position: 'absolute',
  inset: 0,
  transition: 'opacity 1000ms',
  opacity: shouldShow ? 1 : 0,
  pointerEvents: shouldShow ? 'auto' : 'none',
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transform: 'scale(1)',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    transform: 'scale(1)',
  },
}));

const LoaderContainer = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 5,
});

const ContentContainer = styled(Box)({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 16px',
  color: 'white',
});

const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '60%',
  transform: 'translateY(-50%)',
  backgroundColor: '#00C7E8',
  color: 'white',
  padding: '12px',
  zIndex: 10,
  '&:hover': {
    backgroundColor: '#022279',
  },
  [theme.breakpoints.down('md')]: {
    padding: '8px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px',
    svg: {
      fontSize: '1.2rem',
    },
  },
}));

const IndicatorContainer = styled(Box)({
  position: 'absolute',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 8,
});

const Indicator = styled(Box)(({ isActive, theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: isActive ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
}));

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const autoPlayIntervalRef = useRef(null);
  const navigate = useNavigate();
  
  // Sample carousel data
  const slides = [
    // {
    //   image: HomeFour,
    //   displayTime: 10000 // 10 seconds for the GIF slide
    // },
    {
      image: HomeThree,
      title: "Welcome to Durga Traders",
      subtitle: "Pure Water, Direct Delivery",
      buttonText: "Get Products",
      displayTime: 5000 // 5 seconds for other slides
    },
    {
      image: HomeTwo,
      title: "Welcome to Durga Traders",
      subtitle: "Delivered To Your Door",
      buttonText: "Get Products",
      displayTime: 5000
    },
    {
      image: HomeOne,
      title: "Welcome to Durga Traders",
      subtitle: "Reliable & Convenient",
      buttonText: "Get Products",
      displayTime: 5000
    }
  ];

  // Preload all images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = slides.map((slide, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, [index]: true }));
            if (index === 0) setIsLoading(false); // ✅ Show loader only for first image
            resolve();
          };

          img.onerror = () => {
            setImagesLoaded(prev => ({...prev, [index]: true})); // Mark as loaded even on error
            resolve();
          };
        });
      });

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    };

    preloadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    restartAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    restartAutoplay();
  };

  // Function to restart the autoplay with current slide's display time
  const restartAutoplay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = prev === slides.length - 1 ? 0 : prev + 1;
        return nextIndex;
      });
    }, slides[currentSlide].displayTime);
  };

  // Auto-play functionality with dynamic timing
  useEffect(() => {
    if (!isLoading) {
      restartAutoplay();
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [currentSlide, isLoading]);

  return (
    <CarouselContainer>
      {/* Loading Indicator */}
      {isLoading && (
        <LoaderContainer>
          <CircularProgress sx={{ color: '#00C7E8' }} />
        </LoaderContainer>
      )}

      {/* Carousel slides */}
      {slides.map((slide, index) => (
        <SlideContainer key={index} shouldShow={index === currentSlide && !isLoading}>
          {/* Background image */}
          <BackgroundImage 
            style={{ 
              backgroundImage: `url(${slide.image})`,
              display: imagesLoaded[index] ? 'block' : 'none'
            }} 
          />

          {/* Content */}
          <ContentContainer sx={{ marginTop: '100px' }}>
            {slide.title && (
              <Typography
                variant="h3"
                color="#00C7E8"
                fontWeight="bold"
                sx={{
                  mb: 1,
                  fontSize: {
                    xs: '1.5rem', // mobile
                    sm: '2rem',
                    md: '2.5rem', // tablets
                    lg: '2.8rem',
                    xl: '3rem' // desktops
                  },
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)'
                }}
              >
                {slide.title}
              </Typography>
            )}

            {slide.subtitle && (
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#fff"
                sx={{
                  mb: 4,
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '3.5rem',
                    xl: '4rem'
                  }
                }}
              >
                {slide.subtitle}
              </Typography>
            )}

            {slide.buttonText && (
              <Button
                onClick={() => navigate('/personal-products')}
                variant="contained"
                size="large"
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  backgroundColor: '#00C7E8',
                  '&:hover': {
                    backgroundColor: '#022279',
                  }
                }}
              >
                {slide.buttonText}
              </Button>
            )}
          </ContentContainer>
        </SlideContainer>
      ))}

      {/* Navigation buttons */}
      {!isLoading && (
        <>
          <NavButton
            aria-label="Previous slide"
            onClick={prevSlide}
            sx={{ left: 0 }}
          >
            <ChevronLeftIcon />
          </NavButton>

          <NavButton
            aria-label="Next slide"
            onClick={nextSlide}
            sx={{ right: 0 }}
          >
            <ChevronRightIcon />
          </NavButton>

          {/* Slide indicators */}
          <IndicatorContainer>
            {slides.map((_, index) => (
              <Indicator
                key={index}
                isActive={index === currentSlide}
                onClick={() => {
                  setCurrentSlide(index);
                  restartAutoplay();
                }}
              />
            ))}
          </IndicatorContainer>
        </>
      )}
    </CarouselContainer>
  );
}
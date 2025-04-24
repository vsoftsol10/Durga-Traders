<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton } from '@mui/material';
=======
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, CircularProgress } from '@mui/material';
>>>>>>> origin/master
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOne from '../assets/Home slider 003.png';
import HomeTwo from '../assets/Home slider 002.png';
import HomeThree from '../assets/Home slider 005.png';
<<<<<<< HEAD
=======
// import HomeFour from '../assets/Home slider 004.gif';
>>>>>>> origin/master

// Styled components
const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
<<<<<<< HEAD
  height: '100vh',
=======
  height: '80vh',
>>>>>>> origin/master
  overflow: 'hidden',
  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.down('md')]: {
    height: '80vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '90vh',
  },
}));

<<<<<<< HEAD
// Fix #1: Change isActive to use shouldShow pattern which is more common in React
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
  filter: 'blur(2px)',
  transform: 'scale(1.1)',
=======
  transform: 'scale(1)',
>>>>>>> origin/master
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    transform: 'scale(1)',
  },
}));

<<<<<<< HEAD
// const LightOverlay = styled(Box)({
//   position: 'absolute',
//   inset: 0,
//   backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light white overlay
//   backdropFilter: 'blur(8px)', // Increase the blur as needed
//   zIndex: 1,
// });

const DarkOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.29)', // Black with 50% opacity
  zIndex: 1,
=======
const LoaderContainer = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 5,
>>>>>>> origin/master
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
<<<<<<< HEAD
  top: '70%',
=======
  top: '60%',
>>>>>>> origin/master
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

<<<<<<< HEAD

=======
>>>>>>> origin/master
const IndicatorContainer = styled(Box)({
  position: 'absolute',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 8,
});

<<<<<<< HEAD
// Fix #2: Change active to isActive and handle it properly in the component
=======
>>>>>>> origin/master
const Indicator = styled(Box)(({ isActive, theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: isActive ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
}));

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
<<<<<<< HEAD

  const navigate = useNavigate();
  // Sample carousel data - replace these with your actual images and content
  const slides = [
=======
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
>>>>>>> origin/master
    {
      image: HomeOne,
      title: "Welcome to Durga Traders",
      subtitle: "Pure Water, Direct Delivery",
<<<<<<< HEAD
      buttonText: "Get Products"
=======
      buttonText: "Get Products",
      displayTime: 5000 // 5 seconds for other slides
>>>>>>> origin/master
    },
    {
      image: HomeTwo,
      title: "Welcome to Durga Traders",
      subtitle: "Delivered To Your Door",
<<<<<<< HEAD
      buttonText: "Get Products"
=======
      buttonText: "Get Products",
      displayTime: 5000
>>>>>>> origin/master
    },
    {
      image: HomeThree,
      title: "Welcome to Durga Traders",
      subtitle: "Reliable & Convenient",
<<<<<<< HEAD
      buttonText: "Get Products"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
=======
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
            setImagesLoaded(prev => ({...prev, [index]: true}));
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
>>>>>>> origin/master
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
<<<<<<< HEAD
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {/* Carousel slides */}
      {slides.map((slide, index) => (
        // Fix: Changed isActive to shouldShow
        <SlideContainer key={index} shouldShow={index === currentSlide}>
          {/* Background image */}
          <BackgroundImage style={{ backgroundImage: `url(${slide.image})` }}>
            <DarkOverlay />
          </BackgroundImage>

          {/* Content */}
          <ContentContainer sx={{ marginTop: '170px' }}>
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
                }
              }}
            >
              {slide.title}
            </Typography>

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

=======
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
                  }
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
>>>>>>> origin/master
          </ContentContainer>
        </SlideContainer>
      ))}

      {/* Navigation buttons */}
<<<<<<< HEAD
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
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </IndicatorContainer>
=======
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
>>>>>>> origin/master
    </CarouselContainer>
  );
}
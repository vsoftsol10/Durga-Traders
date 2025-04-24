import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOne from '../assets/Home slider 003.png';
import HomeTwo from '../assets/Home slider 002.png';
import HomeThree from '../assets/Home slider 005.png';

// Styled components
const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.down('md')]: {
    height: '80vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '90vh',
  },
}));




const SlideContainer = styled(Box)(({ isActive }) => ({
  position: 'absolute',
  inset: 0,
  transition: 'opacity 1000ms',
  opacity: isActive ? 1 : 0,
  pointerEvents: isActive ? 'auto' : 'none',
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(2px)',
  transform: 'scale(1.1)',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    transform: 'scale(1)',
  },
}));

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
  top: '70%',
  transform: 'translateY(-50%)',
  backgroundColor: ' #00C7E8',
  color: 'white',
  padding: '12px',
  zIndex: 10,
  '&:hover': {
    backgroundColor: '#022279',
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

const Indicator = styled(Box)(({ active, theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
}));

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  // Sample carousel data - replace these with your actual images and content
  const slides = [
    {
      image: HomeOne,
      title: "Welcome to Durga Traders",
      subtitle: "Pure Water, Direct Delivery",
      buttonText: "Get Products"
    },
    {
      image: HomeTwo,
      title: "Welcome to Durga Traders",
      subtitle: "Delivered To Your Door",
      buttonText: "Get Products"
    },
    {
      image: HomeThree,
      title: "Welcome to Durga Traders",
      subtitle: "Reliable & Convenient",
      buttonText: "Get Products"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
        <SlideContainer key={index} isActive={index === currentSlide}>
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

          </ContentContainer>
        </SlideContainer>
      ))}

      {/* Navigation buttons */}
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
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
}
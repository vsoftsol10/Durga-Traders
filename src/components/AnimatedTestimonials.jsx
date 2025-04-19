import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Box, Rating, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AnimatedTestimonialsSlider = ({ testimonials }) => {
  // Ensure we only work with exactly 8 testimonials
  const actualTestimonials = testimonials.slice(0, 8);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  
  // Items to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);
  
  // Create extended testimonials array for smooth infinite loop
  const extendedTestimonials = [...actualTestimonials, ...actualTestimonials.slice(0, itemsToShow)];
  
  // Create refs for testimonial cards
  const testimonialRefs = useRef([]);
  testimonialRefs.current = [];

  // Add to refs function
  const addToRefs = (el) => {
    if (el && !testimonialRefs.current.includes(el)) {
      testimonialRefs.current.push(el);
    }
  };

  // Update items to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setItemsToShow(1);
      } else if (window.innerWidth < 960) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set up automatic slider
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prevSlide => {
          const nextSlide = prevSlide + 1;
          
          // When we reach the end of original testimonials, reset to beginning
          if (nextSlide >= actualTestimonials.length) {
            // Reset without animation
            gsap.set(sliderRef.current, { x: 0 });
            return 0;
          }
          
          return nextSlide;
        });
      }, 3000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, actualTestimonials.length]);

  // Handle manual navigation
  const goToSlide = (slideIndex) => {
    if (slideIndex < 0) {
      setCurrentSlide(actualTestimonials.length - 1);
    } else if (slideIndex >= actualTestimonials.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(slideIndex);
    }
  };

  // Apply GSAP animations when slide changes
  useEffect(() => {
    if (sliderRef.current) {
      // Calculate correct position based on currentSlide
      const slidePercentage = (currentSlide * 100) / extendedTestimonials.length * (extendedTestimonials.length / actualTestimonials.length);
      
      gsap.to(sliderRef.current, {
        x: `-${slidePercentage}%`,
        duration: 0.8,
        ease: "power3.out"
      });
    }
  }, [currentSlide, actualTestimonials.length, extendedTestimonials.length]);

  // Apply animations to the cards
  useEffect(() => {
    testimonialRefs.current.forEach((card) => {
      // Mouse enter animation
      const handleMouseEnter = () => {
        setIsPaused(true);
        
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Animate quote icon
        const quoteIcon = card.querySelector('.quote-icon');
        if (quoteIcon) {
          gsap.to(quoteIcon, {
            rotate: 10,
            scale: 1.2,
            color: "#022279",
            duration: 0.4
          });
        }
      };

      // Mouse leave animation
      const handleMouseLeave = () => {
        setIsPaused(false);
        
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Reset quote icon
        const quoteIcon = card.querySelector('.quote-icon');
        if (quoteIcon) {
          gsap.to(quoteIcon, {
            rotate: 0,
            scale: 1,
            color: "#bdbdbd",
            duration: 0.4
          });
        }
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  // Calculate which dot should be active based on slide position
  const getActiveDotIndex = () => {
    return Math.floor(currentSlide / 2); // Each dot represents 2 slides
  };

  return (
    <Container maxWidth="xlg" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '3rem',
            color: '#022279',
            position: 'relative',
            display: 'inline-block',
            mb: 5,
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '60%',
              height: '3px',
              bottom: '-10px',
              left: '20%',
              backgroundColor: '#00C7E8',
              borderRadius: '2px'
            }
          }}
        >
          Customers Testimonial
        </Typography>
      </Box>

      {/* Slider container */}
      <Box sx={{ 
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        padding: '10px'
      }}>
        {/* Slider track */}
        <Box 
          ref={sliderRef}
          sx={{ 
            display: 'flex',
            transition: 'transform 0.8s ease',
            width: `${(extendedTestimonials.length * 100) / itemsToShow}%`
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                width: `${100 / extendedTestimonials.length}%`,
                padding: '15px',
                flexShrink: 0
              }}
            >
              <Card
                ref={addToRefs}
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'visible',
                  padding: '10px',
                  '&:hover': {
                    borderColor: '#00C7E8',
                    borderWidth: '2px',
                    borderStyle: 'solid'
                  }
                }}
              >
                <FormatQuoteIcon
                  className="quote-icon"
                  sx={{
                    position: 'absolute',
                    top: '-15px',
                    left: '20px',
                    fontSize: '40px',
                    color: '#bdbdbd',
                    zIndex: 1,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    padding: '5px'
                  }}
                />
                <CardContent sx={{ pt: 3 }}>
                  {/* Rating stars */}
                  <Box sx={{ display: 'flex', mb: 2, justifyContent: 'flex-end' }}>
                    <Rating
                      value={testimonial.rating || 4.5}
                      precision={0.5}
                      readOnly
                      emptyIcon={<StarIcon style={{ opacity: 0.55, color: '#bdbdbd' }} fontSize="inherit" />}
                      icon={<StarIcon style={{ color: '#FFD700' }} fontSize="inherit" />}
                    />
                    <Typography 
                      variant="body2" 
                      sx={{ ml: 1, fontWeight: 'bold', color: '#022279' }}
                    >
                      {testimonial.rating || 4.5}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      mb: 3,
                      color: '#424242',
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    "{testimonial.feedback}"
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f5f9fa',
                    borderRadius: '8px',
                    padding: '12px',
                    marginTop: 'auto',
                    borderLeft: '4px solid #00C7E8'
                  }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#022279',
                        fontSize: '1.1rem'
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {testimonial.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Navigation arrows */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '100%',
          zIndex: 10,
          px: 2
        }}>
          <IconButton 
            onClick={() => goToSlide(currentSlide - 1)}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': { backgroundColor: 'white' },
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            <ArrowBackIosIcon sx={{ color: '#022279' }} />
          </IconButton>
          <IconButton 
            onClick={() => goToSlide(currentSlide + 1)}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': { backgroundColor: 'white' },
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            <ArrowForwardIosIcon sx={{ color: '#022279' }} />
          </IconButton>
        </Box>

        {/* Dot indicators */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4 
        }}>
          {Array.from({ length: Math.ceil(actualTestimonials.length / itemsToShow) }).map((_, index) => (
            <FiberManualRecordIcon
              key={index}
              onClick={() => goToSlide(index * itemsToShow)}
              sx={{
                fontSize: '12px',
                mx: 0.5,
                cursor: 'pointer',
                color: getActiveDotIndex() === index ? '#022279' : '#bdbdbd',
                transition: 'color 0.3s ease'
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AnimatedTestimonialsSlider;

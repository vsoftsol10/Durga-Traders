import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, Container, Fade } from '@mui/material';

const AnimatedTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Ajmal",
      city: "Madurai",
      feedback: "We installed this RO system in our restaurant, and the difference in water quality is incredible. We no longer have issues with the taste of our drinks and coffee. It’s pure, crisp water.",
    },
    {
      id: 2,
      name: "Nirmal",
      city: "Chennai",
      feedback: "It removed all the bad taste and odor from our tap water. It's refreshing to drink now!.",
    },
    {
      id: 3,
      name: "Vijay Kumar",
      city: "Coimbatore",
      feedback: "We use this RO system in our factory where we need large quantities of purified water for our production lines. It's been running smoothly for over a year without any major issues.",
    },
    {
      id: 4,
      name: "R. K. Samy",
      city: "Madurai",
      feedback: "Durga traders service very good, They are keep timing and quality also, I suggest to all, They are providing good sales and services at reasonable price, Thank you..",
    },
    {
      id: 5,
      name: "Chandru Kanagasabapathy",
      city: "Trichy",
      feedback: "Durga Traders playing a vital role in sales and service of the plant....Their expertise in this area making one of the pioneer in this field ....wish them best in luck....",
    },
    {
      id: 6,
      name: "Bharathi Senthil",
      city: "Madurai",
      feedback: "Friendly Customer service, low cost & immediate response.",
    },
    {
      id: 7,
      name: "Naveraj Naveraj",
      city: "Chennai",
      feedback: "Good service. Low service charge.",
    },
    {
      id: 8,
      name: "Kandasamy prakash",
      city: "Coimbatore",
      feedback: "Excellent service. On time service. Good work.",
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <Box sx={{ position: 'relative', py: 10, backgroundColor: '#0c3a64', color: '#fff', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #1e3a8a, #0c3a64)',
          opacity: 0.9,
          zIndex: 0
        }}
      />
      
      <Container sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
        {/* Header */}
        <Typography variant="subtitle1" sx={{ color: '#93c5fd', mb: 1 }}>
          What Our Client's Say
        </Typography>
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 6 }}>
          Our Testimonials
        </Typography>

        {/* Quote Icon */}
        <Typography
          component="div"
          sx={{
            fontSize: '10rem',
            opacity: 0.1,
            fontFamily: 'serif',
            position: 'absolute',
            right: 64,
            top: 0,
            zIndex: 0,
            color: '#fff',
          }}
        >
          "
        </Typography>


        {/* Feedback */}
        <Fade in={true} key={testimonials[currentSlide].id}>
          <Typography
            variant="body1"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials[currentSlide].feedback}
          </Typography>
        </Fade>

        {/* Name & Position */}
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {testimonials[currentSlide].name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#93c5fd', mb: 4 }}>
          {testimonials[currentSlide].city}
        </Typography>

        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          {testimonials.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: currentSlide === index ? 48 : 24,
                height: 8,
                borderRadius: 4,
                transition: 'all 0.3s ease',
                backgroundColor: currentSlide === index ? '#60a5fa' : 'rgba(255,255,255,0.4)',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AnimatedTestimonials;

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const AnimatedTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    { id: 1, name: "Ajmal", city: "Madurai", feedback: "We installed this RO system in our restaurant, and the difference in water quality is incredible. We no longer have issues with the taste of our drinks and coffee. It's pure, crisp water." },
    { id: 2, name: "Nirmal", city: "Chennai", feedback: "It removed all the bad taste and odor from our tap water. It's refreshing to drink now!" },
    { id: 3, name: "Vijay Kumar", city: "Coimbatore", feedback: "We use this RO system in our factory where we need large quantities of purified water for our production lines. It's been running smoothly for over a year without any major issues." },
    { id: 4, name: "R. K. Samy", city: "Madurai", feedback: "Durga traders service very good, They are keep timing and quality also, I suggest to all, They are providing good sales and services at reasonable price, Thank you." },
    { id: 5, name: "Chandru Kanagasabapathy", city: "Trichy", feedback: "Durga Traders playing a vital role in sales and service of the plant....Their expertise in this area making one of the pioneer in this field ....wish them best in luck...." },
    { id: 6, name: "Bharathi Senthil", city: "Madurai", feedback: "Friendly Customer service, low cost & immediate response." },
    { id: 7, name: "Naveraj Naveraj", city: "Chennai", feedback: "Good service. Low service charge." },
    { id: 8, name: "Kandasamy prakash", city: "Coimbatore", feedback: "Excellent service. On time service. Good work." }
  ];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, testimonials.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <Box
      sx={{
        position: 'relative',
        py: 10,
        backgroundColor: '#0D47A1',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Gradient Overlay (optional effect) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #1565C0, #0D47A1)',
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto', px: 2, zIndex: 1, textAlign: 'center' }}>
        <Typography variant="subtitle1" sx={{ color: 'white', mb: 1 }}>
          What Our Client's Say
        </Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Testimonials
        </Typography>

        <Box
          sx={{ mt: 6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
            {testimonials[currentSlide].feedback}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {testimonials[currentSlide].name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'White', mb: 4 }}>
            {testimonials[currentSlide].city}
          </Typography>
        </Box>

        {/* Decorative Quote Mark */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: 10, md: 50 },
            top: 10,
            fontSize: '5rem',
            zIndex: 0,
          }}
        >
          ❞
        </Box>

        {/* Navigation Dots */}
        <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: currentSlide === index ? 40 : 20,
                height: 8,
                borderRadius: 4,
                bgcolor: currentSlide === index ? '#29B6F6' : 'rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default AnimatedTestimonials;

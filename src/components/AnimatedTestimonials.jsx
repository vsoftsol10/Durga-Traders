import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import image from "../assets/person.png";
import backgroundImage from "../assets/drops.jpg"; 

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
        color: '#fff',
        overflow: 'hidden',
        // Add background image that remains fixed while scrolling
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', // This is the key property that keeps the background fixed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blue overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor:'rgba(2, 34, 121, 0.69)',
          zIndex: 1,
        }}
      />

      <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto', px: 2, zIndex: 1, textAlign: 'center' }}>
        <Typography variant="subtitle1" sx={{ color: 'white', mb: 1 }}>
          What Our Client's Say
        </Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Testimonials
        </Typography>

        {/* Avatar Circle */}
        <Box sx={{ mt: 6, mb: 4, position: 'relative', width: 100, height: 100, mx: 'auto' }}>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              bgcolor: '#e0e0e0',
              overflow: 'hidden',
              border: '4px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <img 
              src={image} 
              alt="testimonial avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </Box>
        </Box>

        <Box
          sx={{ mt: 2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 3, px: 2 }}>
            {testimonials[currentSlide].feedback}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {testimonials[currentSlide].name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'white', mb: 4 }}>
            {testimonials[currentSlide].city}
          </Typography>
        </Box>

        {/* Decorative Quote Marks */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: 10, md: 50 },
            top: 10,
            fontSize: '8rem',
            fontFamily: 'serif',
            opacity: 0.8,
            zIndex: 0,
            color:'yellow'
          }}
        >
          ❞
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 10, md: 50 },
            bottom: 10,
            fontSize: '8rem',
            fontFamily: 'serif',
            opacity: 0.8,
            transform: 'rotate(180deg)',
            zIndex: 0,
            color:'yellow'
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
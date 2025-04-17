import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Box, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

const AnimatedTestimonials = ({ testimonials }) => {
  // Create a ref for each testimonial card
  const testimonialRefs = useRef([]);
  testimonialRefs.current = [];

  // Function to add refs to the array
  const addToRefs = (el) => {
    if (el && !testimonialRefs.current.includes(el)) {
      testimonialRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Reset the array when component mounts
    testimonialRefs.current = testimonialRefs.current.slice(0, testimonials.length);

    // GSAP animation for cards
    testimonialRefs.current.forEach((card, index) => {
      // Initial state - hide cards
      gsap.set(card, { y: 50, opacity: 0 });

      // Create scroll trigger for each card
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.2, // Stagger effect
        ease: "power3.out"
      });
    });

    // Hover animations setup
    testimonialRefs.current.forEach((card) => {
      // Mouse enter animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Find and animate the quote icon inside this card
        const quoteIcon = card.querySelector('.quote-icon');
        if (quoteIcon) {
          gsap.to(quoteIcon, {
            rotate: 10,
            scale: 1.2,
            color: "#022279", // Updated to use the deep blue color
            duration: 0.4
          });
        }
      });

      // Mouse leave animation
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Reset the quote icon animation
        const quoteIcon = card.querySelector('.quote-icon');
        if (quoteIcon) {
          gsap.to(quoteIcon, {
            rotate: 0,
            scale: 1,
            color: "#bdbdbd",
            duration: 0.4
          });
        }
      });
    });

    // Cleanup event listeners
    return () => {
      testimonialRefs.current.forEach((card) => {
        card.removeEventListener('mouseenter', () => { });
        card.removeEventListener('mouseleave', () => { });
      });
    };
  }, [testimonials]);

  return (
    <Container maxWidth="xlg" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '3rem',
            color: '#022279', // Deep blue color as specified
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
              backgroundColor: '#00C7E8', // Bright cyan color as specified
              borderRadius: '2px'
            }
          }}
        >
          What Our Customers Say
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '45%', md: '30%' },
              padding: '15px',
              marginBottom: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
                  borderColor: '#00C7E8', // Add cyan border on hover
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
                {/* Rating stars added below */}
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
                    lineHeight: 1.6
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
                  borderLeft: '4px solid #00C7E8' // Added cyan accent on the left
                }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#022279', // Updated to deep blue color
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
    </Container>
  );
};

export default AnimatedTestimonials;
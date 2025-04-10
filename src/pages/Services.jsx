import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { keyframes } from '@mui/system';

// Import images
import reverseOsmosisImg from "../assets/service/Reverse-Osmosis.png";
import SeaWater from "../assets/service/SeaWater-Desalination.png";
import surfaceWater from "../assets/service/Surface-Water-Treatment.png";
import waterSoftening from "../assets/service/Water-Softening-System.png";
import ironRemoval from "../assets/service/Iron-Removal.png"
import dmPlant from "../assets/service/DM-Plant.png" 
import stp from "../assets/service/STP-Services.png"
import etp from "../assets/service/ETP-Services.webp"
import dispenser from "../assets/service/Dispenser-Services.png"
// Animation keyframes
const dropAnimation = keyframes`
  0% { transform: translateY(-20px); opacity: 0 }
  50% { transform: translateY(5px); opacity: 1 }
  100% { transform: translateY(30px); opacity: 0 }
`;

const pulseAnimation = keyframes`
  0% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.05); }
  100% { opacity: 0.2; transform: scale(1); }
`;

const bubbleAnimation = keyframes`
  0% { transform: translateY(0); opacity: 0.6 }
  100% { transform: translateY(-120px); opacity: 0 }
`;

// Styled components
const WaterDrop = styled('div')(({ theme, delay = 0 }) => ({
  position: 'absolute',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'rgba(33, 150, 243, 0.2)',
  animation: `${dropAnimation} 2s linear infinite`,
  animationDelay: `${delay}s`,
  zIndex: 1
}));

const Bubble = styled('div')(({ theme, size = 20, delay = 0 }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  animation: `${bubbleAnimation} ${2 + delay}s ease-in infinite`,
  animationDelay: `${delay}s`,
  zIndex: 1
}));

const AnimatedCard = styled(Card)(({ theme, color = 'blue' }) => {
  const colors = {
    blue: theme.palette.info.light,
    teal: theme.palette.info.main,
    cyan: theme.palette.primary.light,
    lightblue: theme.palette.primary.light,
    orange: theme.palette.warning.light,
    indigo: theme.palette.primary.dark,
    green: theme.palette.success.light,
    emerald: theme.palette.success.main,
    sky: theme.palette.info.light,
  };
  
  return {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${colors[color]}`,
    background: `linear-gradient(to bottom, white, ${colors[color]}15)`,
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[10],
      '& .glow-effect': {
        opacity: 0.4,
      },
      '& .arrow-icon': {
        transform: 'translateX(5px)',
      }
    },
  };
});

const GlowEffect = styled('div')(({ theme, color = 'blue' }) => {
  const colors = {
    blue: theme.palette.info.main,
    teal: theme.palette.info.dark,
    cyan: theme.palette.primary.main,
    lightblue: theme.palette.primary.light,
    orange: theme.palette.warning.main,
    indigo: theme.palette.primary.dark,
    green: theme.palette.success.main,
    emerald: theme.palette.success.dark,
    sky: theme.palette.info.light,
  };
  
  return {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    background: `radial-gradient(circle at center, ${colors[color]}30 0%, transparent 70%)`,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    animation: `${pulseAnimation} 3s infinite ease-in-out`,
    zIndex: 0,
  };
});

const Services = () => {
  // Use the imported image for all cards as a placeholder
  const cardsData = [
    { 
      title: 'Reverse Osmosis', 
      description: 'Advanced filtration technology removing 99% of contaminants for the purest drinking water possible.',
      color: 'blue',
      image: reverseOsmosisImg,
      path: '/services/reverse-osmosis'
    },
    { 
      title: 'SeaWater Desalination', 
      description: 'Converting seawater into fresh, potable water through specialized high-efficiency systems.',
      color: 'teal',
      image: SeaWater,
      path: '/services/seawater-desalination'
    },
    { 
      title: 'Surface Water Treatment', 
      description: 'Transforming river and lake water into safe, crystal-clear water for drinking and irrigation.',
      color: 'cyan',
      image: surfaceWater,
      path: '/services/surface-water-treatment'
    },
    { 
      title: 'Water Softening System', 
      description: 'Removing hardness minerals for softer water thats gentler on skin, clothes, and appliances.',
      color: 'lightblue',
      image: waterSoftening,
      path: '/services/water-softening'
    },
    { 
      title: 'Iron Removal', 
      description: 'Eliminating iron and related impurities to prevent staining and preserve appliance life.',
      color: 'orange',
      image: ironRemoval,
      path: '/services/iron-removal'
    },
    { 
      title: 'DM Plant', 
      description: 'Industrial-grade demineralization for ultra-pure water essential for specialized applications.',
      color: 'indigo',
      image: dmPlant,
      path: '/services/dm-plant'
    },
    { 
      title: 'STP Services', 
      description: 'Comprehensive sewage treatment solutions meeting environmental standards for discharge or reuse.',
      color: 'green',
      image: stp,
      path: '/services/stp-services'
    },
    { 
      title: 'ETP Services', 
      description: 'Advanced effluent treatment removing industrial contaminants for environmentally safe discharge.',
      color: 'emerald',
      image: etp,
      path: '/services/etp-services'
    },
    { 
      title: 'Dispenser Services', 
      description: 'Premium water dispensers for instant access to purified water in residential and commercial settings.',
      color: 'sky',
      image: dispenser,
      path: '/services/dispenser-services'
    },
  ];

  // Water drop effect for header
  const drops = Array(10).fill().map((_, index) => ({
    left: `${Math.random() * 90 + 5}%`,
    delay: Math.random() * 5
  }));

  // Bubbles for CTA section
  const bubbles = Array(15).fill().map((_, index) => ({
    left: `${Math.random() * 90 + 5}%`,
    bottom: `${Math.random() * 30}px`,
    size: Math.random() * 30 + 10,
    delay: Math.random() * 3
  }));

  return (
    <Box sx={{ 
      position: 'relative', 
      pt: 8, 
      pb: 12,
      px: { xs: 2, sm: 4, md: 6 },
      background: 'white',
      overflow: 'hidden'
    }}>
      {/* Animated water drops in header */}
      {drops.map((drop, index) => (
        <WaterDrop key={index} style={{ left: drop.left, top: 0 }} delay={drop.delay} />
      ))}

      {/* Header Section */}
      <Box sx={{ 
        position: 'relative',
        mb: 6,
        textAlign: 'center',
        maxWidth: '1200px',
        mx: 'auto',
      }}>
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            fontWeight: 700, 
            color: '#0D47A1',
            mb: 1,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' }
          }}
        >
          Our Services
        </Typography>
        <Box sx={{ 
          height: '4px', 
          width: '80px', 
          bgcolor: '#2196F3',
          mx: 'auto',
          mb: 2
        }} />
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#1976D2',
            maxWidth: '700px',
            mx: 'auto',
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Experience crystal-clear water with our premium purification technologies
        </Typography>
      </Box>
      
      {/* REPLACED: Grid container with Flexbox layout */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 4,
        maxWidth: '1300px',
        mx: 'auto',
        justifyContent: 'space-between'
      }}>
        {cardsData.map((card, index) => (
          <Box key={index} sx={{ 
            width: { 
              xs: '100%', 
              sm: 'calc(33.333% - 22px)' 
            },
            mb: 4
          }}>
            <AnimatedCard color={card.color} sx={{ height: '100%' }}>
              {/* Pulsing glow effect */}
              <GlowEffect className="glow-effect" color={card.color} />
              
              <CardActionArea 
                component={RouterLink} 
                to={card.path}
                sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    objectFit: 'contain',
                    p: 2,
                    height: '160px'
                  }}
                />
                <CardContent sx={{ 
                  position: 'relative', 
                  zIndex: 1,
                  flex: 1,
                  p: 3,
                  height: '140px',
                  overflow: 'hidden'
                }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ position: 'relative', zIndex: 1, p: 2 }}>
                <Button 
                  size="small" 
                  color="primary"
                  component={RouterLink}
                  to={card.path}
                  endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: 'transform 0.3s ease' }} />}
                >
                  Learn More
                </Button>
              </CardActions>
            </AnimatedCard>
          </Box>
        ))}
      </Box>
      
      {/* CTA Section */}
      <Box 
        sx={{ 
          position: 'relative',
          mt: 8, 
          p: { xs: 3, sm: 5 },
          maxWidth: '800px',
          mx: 'auto',
          textAlign: 'center',
          bgcolor: '#1E88E5',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 8
        }}
      >
        {/* Bubble animations */}
        {bubbles.map((bubble, index) => (
          <Bubble 
            key={index} 
            style={{ 
              left: bubble.left, 
              bottom: bubble.bottom,
              width: bubble.size,
              height: bubble.size
            }} 
            delay={bubble.delay} 
          />
        ))}
        
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h4" sx={{ 
            mb: 2, 
            color: 'white', 
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' }
          }}>
            Ready for Crystal Clear Water?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.9)' }}>
            Discover the perfect water purification solution for your home or business
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            component={RouterLink}
            to="/commercial-products"
            sx={{ 
              bgcolor: 'white', 
              color: '#1E88E5',
              px: { xs: 3, sm: 4 },
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                transform: 'scale(1.05)'
              }
            }}
          >
            Explore Products
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
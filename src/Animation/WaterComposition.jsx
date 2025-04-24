import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import FallsImg from '../assets/falls.jpg';
import WaterDrop from '../assets/water 2.png';

const MineralItem = ({ element, symbol, value, side }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const isLeft = side === 'left';
  const alignItems = isMobile ? 'flex-start' : isLeft ? 'flex-end' : 'flex-start';
  const textAlign = isMobile ? 'left' : isLeft ? 'right' : 'left';
  const marginSymbol = isLeft ? { mr: 1 } : { ml: 1 };
  
  return (
    <Box display="flex" flexDirection="column" alignItems={alignItems} mb={3}>
      <Box display="flex" alignItems="center">
        {(isLeft && !isMobile) && (
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            fontWeight="bold" 
            color="white" 
            {...marginSymbol}
          >
            {element}
          </Typography>
        )}
        <Box
          sx={{
            width: { xs: 32, sm: 36, md: 42 },
            height: { xs: 32, sm: 36, md: 42 },
            borderRadius: '50%',
            backgroundColor: '#00C7E8',
            color: 'white',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
          }}
        >
          {symbol}
        </Box>
        {(!isLeft || isMobile) && (
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            fontWeight="bold" 
            color="white" 
            {...marginSymbol}
          >
            {element}
          </Typography>
        )}
      </Box>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          color: '#90cdf4', 
          textAlign,
          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
        }}
      >
        {value} Mg / L
      </Typography>
    </Box>
  );
};

export default function WaterComposition() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const leftMinerals = [
    { element: "Calcium", symbol: "Ca", value: "19.1" },
    { element: "Magnesium", symbol: "Mg", value: "2.5" },
    { element: "Sodium", symbol: "Na", value: "9.5" }
  ];

  const rightMinerals = [
    { element: "Potassium", symbol: "K", value: "0.5" },
    { element: "Bicarbonate", symbol: "HCO", value: "35" },
    { element: "Chloride", symbol: "Cl", value: "12.1" }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 12 },
        px: { xs: 1, sm: 2 },
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Fixed Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${FallsImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      />

      {/* Blue overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor:'rgba(2, 34, 121, 0.69)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            sx={{ 
              color: '#00C7E8',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } 
            }} 
            gutterBottom
          >
            Mineral Water
          </Typography>
          <Typography 
            variant="h3" 
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}
          >
            Water Composition
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 2, sm: 4, md: 8 }} 
          alignItems="center" 
          justifyContent="center"
          sx={{ position: 'relative' }}
        >
          {/* Left side */}
          <Grid item xs={12} sm={5} md={5} sx={{ zIndex: 3 }}>
            {leftMinerals.map((mineral, index) => (
              <MineralItem
                key={index}
                {...mineral}
                side="left"
              />
            ))}
          </Grid>

          {/* Center space - smaller on mobile */}
          <Grid item xs={12} sm={2} md={2} sx={{ 
            display: { xs: 'none', sm: 'block' },
            height: '100%'
          }} />

          {/* Right side */}
          <Grid item xs={12} sm={5} md={5} sx={{ zIndex: 3 }}>
            {rightMinerals.map((mineral, index) => (
              <MineralItem
                key={index}
                {...mineral}
                side="right"
              />
            ))}
          </Grid>
        </Grid>
        
        {/* Water Drop Image - UPDATED: larger on mobile */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -40%)',
            zIndex: 2,
            width: { xs: 150, sm: 120, md: 180 },  // Increased from 80 to 120 for xs (mobile)
            height: 'auto',
            display: { xs: 'block', sm: 'block' },
            opacity: { xs: 0.9, md: 1 }  // Increased opacity slightly on mobile
          }}
        >
          <img
            src={WaterDrop}
            alt="Water droplet"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
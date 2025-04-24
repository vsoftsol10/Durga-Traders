import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import FallsImg from '../assets/falls.jpg';
<<<<<<< HEAD
import WaterDrop from '../assets/Water 2.png';
=======
import WaterDrop from '../assets/water 2.png';
>>>>>>> origin/master

const MineralItem = ({ element, symbol, value, side }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const isLeft = side === 'left';
  const alignItems = isMobile ? 'flex-start' : isLeft ? 'flex-end' : 'flex-start';
  const textAlign = isMobile ? 'left' : isLeft ? 'right' : 'left';
  const marginSymbol = isLeft ? { mr: 1 } : { ml: 1 };
  
  return (
<<<<<<< HEAD
    <Box display="flex" flexDirection="column" alignItems={alignItems} mb={3}>
=======
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems={alignItems} 
      // Increased bottom margin for better spacing between items
      mb={{ xs: 4, sm: 5, md: 6 }}
    >
>>>>>>> origin/master
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
<<<<<<< HEAD
          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
=======
          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
          mt: 1 // Added margin top for better spacing within each item
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
  const isLargeScreen = useMediaQuery('(min-width:1440px)');
>>>>>>> origin/master
  
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
<<<<<<< HEAD
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
=======
      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative', 
          zIndex: 2
        }}
      >
        <Box textAlign="center" mb={{ xs: 5, md: 10 }}>
>>>>>>> origin/master
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            sx={{ 
              color: '#00C7E8',
<<<<<<< HEAD
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } 
=======
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.40rem' } 
>>>>>>> origin/master
            }} 
            gutterBottom
          >
            Mineral Water
          </Typography>
          <Typography 
<<<<<<< HEAD
            variant="h3" 
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}
=======
            variant="h4" 
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '5rem' } }}
>>>>>>> origin/master
          >
            Water Composition
          </Typography>
        </Box>

        <Grid 
          container 
<<<<<<< HEAD
          spacing={{ xs: 2, sm: 4, md: 8 }} 
          alignItems="center" 
          justifyContent="center"
          sx={{ position: 'relative' }}
        >
          {/* Left side */}
          <Grid item xs={6} sm={5} md={5} sx={{ zIndex: 3 }}>
=======
          spacing={{ xs: 2, sm: 4, md: 8, lg: 12 }} 
          alignItems="center" 
          justifyContent="space-evenly"
          sx={{ position: 'relative' }}
        >
          {/* Left side - with improved vertical spacing */}
          <Grid 
            item 
            xs={6} 
            sm={5} 
            md={4}
            lg={4}
            sx={{ 
              zIndex: 3,
              pr: isLargeScreen ? 5 : 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'flex-start' : 'flex-end',
              // Added padding to create more vertical height for the column
              py: { xs: 2, sm: 3, md: 4 }
            }}
          >
>>>>>>> origin/master
            {leftMinerals.map((mineral, index) => (
              <MineralItem
                key={index}
                {...mineral}
                side="left"
              />
            ))}
          </Grid>

<<<<<<< HEAD
          {/* Right side - modified for mobile to take up remaining space */}
          <Grid item xs={6} sm={5} md={5} sx={{ zIndex: 3 }}>
=======
          {/* Empty space in center to create separation */}
          <Grid item xs={0} sm={2} md={4} lg={4} sx={{ 
            zIndex: 1,
            display: { xs: 'none', sm: 'block' } 
          }} />

          {/* Right side - with improved vertical spacing */}
          <Grid 
            item 
            xs={6} 
            sm={5} 
            md={4}
            lg={4}
            sx={{ 
              zIndex: 3,
              pl: isLargeScreen ? 5 : 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              // Added padding to create more vertical height for the column
              py: { xs: 2, sm: 3, md: 4 }
            }}
          >
>>>>>>> origin/master
            {rightMinerals.map((mineral, index) => (
              <MineralItem
                key={index}
                {...mineral}
                side="right"
              />
            ))}
          </Grid>
        </Grid>
        
<<<<<<< HEAD
        {/* Water Drop Image - hidden on mobile */}
=======
        {/* Water Drop Image - adjusted position to account for new spacing */}
>>>>>>> origin/master
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
<<<<<<< HEAD
            transform: 'translate(-50%, -40%)',
            zIndex: 2,
            width: { sm: 120, md: 180 },
            height: 'auto',
            display: { xs: 'none', sm: 'block' }, // Hidden on mobile (xs)
=======
            transform: 'translate(-50%, -30%)',
            zIndex: 2,
            width: { sm: 160, md: 160, lg: isLargeScreen ? 230 : 180 },
            height: 'auto',
            display: { xs: 'none', sm: 'block' }, 
>>>>>>> origin/master
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
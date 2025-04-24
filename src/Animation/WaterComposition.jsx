import { Box, Container, Typography, Grid } from '@mui/material';
import FallsImg from '../assets/falls.jpg';
import WaterDrop from '../assets/water 2.png';

const MineralItem = ({ element, symbol, value, side }) => {
  const isLeft = side === 'left';
  const alignItems = isLeft ? 'flex-end' : 'flex-start';
  const textAlign = isLeft ? 'right' : 'left';
  const marginSymbol = isLeft ? { mr: 1 } : { ml: 1 };

  return (
    <Box display="flex" flexDirection="column" alignItems={alignItems} mb={5}>
      <Box display="flex" alignItems="center">
        {isLeft && (
          <Typography variant="h6" fontWeight="bold" color="white" {...marginSymbol}>
            {element}
          </Typography>
        )}
        <Box
          sx={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            backgroundColor: '#00C7E8',
            color: 'white',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
          }}
        >
          {symbol}
        </Box>
        {!isLeft && (
          <Typography variant="h6" fontWeight="bold" color="white" {...marginSymbol}>
            {element}
          </Typography>
        )}
      </Box>
      <Typography variant="subtitle1" sx={{ color: '#90cdf4', textAlign }}>
        {value} Mg / L
      </Typography>
    </Box>
  );
};

export default function WaterComposition() {
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
        py: { xs: 8, md: 12 },
        px: 2,
        color: 'white',
        overflow: 'hidden',
        // Remove background image from here
      }}
    >
      {/* Fixed Background Image - positioned to stay fixed */}
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
          backgroundAttachment: 'fixed', // This is the key property for the fixed effect
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
        <Box textAlign="center" mb={8}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#00C7E8' }} gutterBottom>
            Mineral Water
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            Water Composition
          </Typography>
        </Box>

        <Grid container spacing={50} alignItems="center" justifyContent="center">
          {/* Left side */}
          <Grid item xs={12} md={6}>
            {leftMinerals.map((mineral, index) => (
              <MineralItem
                key={index}
                {...mineral}
                side="left"
              />
            ))}
          </Grid>

          {/* Right side */}
          <Grid item xs={12} md={6}>
            {rightMinerals.map((mineral, index) => (
              <MineralItem
                key={index}
                {...mineral}
                side="right"
              />
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -15%)',
            
            zIndex: 0,
            width: { xs: 100, sm: 150, md: 200 },  // Responsive widths
            height: 'auto',
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
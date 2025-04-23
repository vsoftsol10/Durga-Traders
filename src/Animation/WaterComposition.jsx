import { Box, Container, Typography, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import FallsImg from '../assets/falls.jpg';

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
        backgroundImage: `url(${FallsImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 8, md: 12 },
        px: 2,
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Blue overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(2, 34, 121, 0.73)',
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

        {/* Water droplet in center */}
        <Box
          sx={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -15%)',
            opacity: 0.6,
            zIndex: 0,
          }}
        >
          <svg viewBox="0 0 200 280" width="250">
            <path
              d="M100 0 C100 0, 0 150, 0 200 C0 245, 45 280, 100 280 C155 280, 200 245, 200 200 C200 150, 100 0, 100 0 Z"
              fill="#3B82F6"
              opacity="0.4"
            />
            <path
              d="M100 0 C100 0, 0 150, 0 200 C0 245, 45 280, 100 280 C155 280, 200 245, 200 200 C200 150, 100 0, 100 0 Z"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2"
            />
          </svg>
        </Box>
      </Container>
    </Box>
  );
}

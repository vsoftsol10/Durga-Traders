import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

// MUI Icons
import WaterIcon from '@mui/icons-material/Water';
import PeopleIcon from '@mui/icons-material/People';
import HandymanIcon from '@mui/icons-material/Handyman';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const CounterItem = ({ icon: IconComponent, count, label }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    setCurrentCount(0);
    const duration = 2000;
    const steps = 50;
    const increment = Math.ceil(count / steps);
    const stepTime = duration / steps;

    let timer;
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current >= count) {
        setCurrentCount(count);
        clearInterval(timer);
      } else {
        setCurrentCount(current);
      }
    };

    timer = setInterval(updateCounter, stepTime);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <Box
      textAlign="center"
      p={5}
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <IconComponent sx={{ fontSize: 60, mb: 3, color: '#00C7E8' }} />
      <Typography variant="h3" fontWeight="bold" mb={1}>
        {currentCount}+
      </Typography>
      <Typography variant="h6">{label}</Typography>
    </Box>
  );
};

export default function CounterBox() {
  const counters = [
    { icon: WaterIcon, count: 400, label: 'Water purifiers delivered' },
    { icon: PeopleIcon, count: 800, label: 'Happy customers' },
    { icon: HandymanIcon, count: 30, label: 'Expert workers' },
    { icon: Inventory2Icon, count: 1000, label: 'Orders fulfilled' },
  ];

  return (
    <Box sx={{ backgroundColor: '#022279', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {counters.map((counter, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CounterItem
                icon={counter.icon}
                count={counter.count}
                label={counter.label}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

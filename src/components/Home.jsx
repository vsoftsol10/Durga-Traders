import React from 'react';
import './home.css';
import Header from './Header';
import Footer from './Footer';
import Dtaqua from '../assets/DT-AQUATOUCH.png';
import Particles from './Particles/Particles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const CustomCard = ({ title, image, description, altText }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={altText}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

const Home = () => {
 

  return (
    <div>
      {/* <Header /> */}
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <Particles
          particleColors={['#a1c8e8', '#1d7eb5']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className='banner'>

      </div>

      

      

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
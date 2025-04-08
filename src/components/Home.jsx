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
  const cardsData = [
    { title: 'AQUA-01', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.', altText: 'Aqua-Img 1' },
    { title: 'AQUA-02', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Lizards are found in various habitats, ranging from deserts to rainforests.', altText: 'Aqua-Img 2' },
    { title: 'AQUA-03', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Some species of lizards can change color for camouflage.', altText: 'Aqua-Img 3' },
    { title: 'AQUA-04', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Lizards are often insectivores, feeding on small insects and spiders.', altText: 'Aqua-Img 4' },
    { title: 'AQUA-05', image: '/static/images/cards/contemplative-reptile.jpg', description: 'The iguana is a popular pet lizard species known for its size.', altText: 'Aqua-Img 5' },
    { title: 'AQUA-06', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Some lizards can grow to be over 6 feet long, like the Komodo dragon.', altText: 'Aqua-Img 6' },
    { title: 'AQUA-07', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Lizards use their long tails for balance and defense.', altText: 'Aqua-Img 7' },
    { title: 'AQUA-08', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Many lizards are arboreal, living in trees or shrubs.', altText: 'Aqua-Img 8' },
    { title: 'AQUA-09', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Some lizards can run incredibly fast, like the spiny-tailed lizard.', altText: 'Aqua-Img 9' },
  ];

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

      <div className='services'>
        <h2>Services</h2>
        <Grid container spacing={3} justifyContent="center">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CustomCard
                title={card.title}
                image={card.image}
                description={card.description}
                altText={card.altText}
              />
            </Grid>
          ))}
        </Grid>
        </div>

      

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
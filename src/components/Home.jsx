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
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';  // Added Box for alignment
import Rating from '@mui/material/Rating';  // Added Rating for star rating

const CustomCard = ({ title, image, description, altText }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={altText} height="140" image={image} />
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

  const services = [
    { title: 'Wide Service Network', alt: 'ServiceImg1', image: '/path/to/image1.jpg' },
    { title: 'Easy Returns', alt: 'ServiceImg2', image: '/path/to/image2.jpg' },
    { title: 'Guarantee', alt: 'ServiceImg3', image: '/path/to/image3.jpg' },
    { title: 'Free 1 Year Warranty', alt: 'ServiceImg4', image: '/path/to/image4.jpg' },
  ];

  const testimonials = [
    {
      name: 'Nirmal',
      location: 'Chennai',
      feedback: 'It removed all the bad taste and odor from our tap water. It’s refreshing to drink now!',
      rating: 4,
    },
    {
      name: 'Vijay Kumar',
      location: 'Coimbatore',
      feedback: 'We use this RO system in our factory where we need large quantities of purified water for our production lines. It’s been running smoothly for over a year without any major issues.',
      rating: 5,
    },
    {
      name: 'Ajmal',
      location: 'Madurai',
      feedback: 'We installed this RO system in our restaurant, and the difference in water quality is incredible. We no longer have issues with the taste of our drinks and coffee. It’s pure, crisp water.',
      rating: 3,
    },
  ];

  return (
    <div>
      <Header />
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

      <div className="banner" style={{ height: '250px', backgroundColor: '#f0f0f0' }}>
        <Typography variant="h4" align="center" style={{ paddingTop: '100px' }}>
          {/* Add banner content here if needed */}
        </Typography>
      </div>

      <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
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
      </Container>

      <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Quality Service
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={service.image}
                  alt={service.alt}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Typography variant="h6" style={{ marginTop: '20px' }}>
                  {service.title}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Testimonial
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, height: '100%' }}> {/* Ensuring equal card height */}
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name} - {testimonial.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {testimonial.feedback}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Rating name={`rating-${index}`} value={testimonial.rating} precision={0.5} readOnly />
                    <Typography variant="body2" sx={{ marginLeft: 1 }}>
                      {testimonial.rating} / 5
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;

import { Box, Container, Typography, Breadcrumbs, Link, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './CommercialProduct.css';
import ROimg from '../assets/RO-bck.png';
import ClickSpark from './ClickSpark/ClickSpark';

const CommercialProducts = () => {
  const breadcrumbs = [
    <Link href="/" underline="hover" color="inherit" key="home">
      Home
    </Link>,
    <Typography key="commercial-products">Commercial Products</Typography>
  ];

  const products = [
    {
      id: 1,
      image: '/path/to/product1.jpg',
      title: 'DT-250 AUTO',
      price: '$99.99',
      description: 'Description for product 1'
    },
    {
      id: 2,
      image: '/path/to/product2.jpg',
      title: 'DT-500 AUTO',
      price: '$149.99',
      description: 'Description for product 2'
    },
    {
      id: 3,
      image: '/path/to/product3.jpg',
      title: 'DT-1000 AUTO',
      price: '$199.99',
      description: 'Description for product 3'
    },
    {
      id: 4,
      image: '/path/to/product4.jpg',
      title: 'DT-3000 AUTO',
      price: '$249.99',
      description: 'Description for product 4'
    },
    {
      id: 5,
      image: '/path/to/product5.jpg',
      title: 'DT-5000 AUTO',
      price: '$299.99',
      description: 'Description for product 5'
    },
    {
      id: 6,
      image: '/path/to/product6.jpg',
      title: 'DT-100 CLOSED',
      price: '$349.99',
      description: 'Description for product 6'
    },
    {
      id: 7,
      image: '/path/to/product7.jpg',
      title: 'DT-100 OPEN',
      price: '$399.99',
      description: 'Description for product 7'
    }
  ];

  return (
    <div>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      <Header />
      <Container sx={{ minHeight: '300px' }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Commercial Products
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Breadcrumbs separator="››">
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
      </Container>

      <Container maxWidth='xlg' sx={{ height: '300px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ flex: 1, pr: 2 }}>
            <Typography variant="h4">
              Clean, Safe, and Pure Water for Your Family
            </Typography>
            <Typography>
              At <b>Durga Traders</b>, we understand the importance of clean and safe drinking water. That's why we offer state-of-the-art Reverse Osmosis (RO) Water Purification Systems, designed to remove impurities and provide you with water that's not only safe to drink but also better for your health.
              Our RO systems are the best solution for households, offices, and businesses that need a reliable and efficient water purification system.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            {/* <img
              src={ROimg}
              alt="RO Water Purification System"
              style={{
                width: '50%',
                height: 'auto',
                borderRadius: '80px',
                objectFit: 'cover'
              }}
            /> */}
          </Box>
        </Box>
      </Container>

      <Container>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4">
            Our Product
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" color="text.primary">
                      {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 'auto' }}
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
      </ClickSpark>
    </div>
  );
};

export default CommercialProducts;
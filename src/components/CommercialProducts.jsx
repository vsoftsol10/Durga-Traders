import { Box, Container, Typography, Breadcrumbs, Link, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './CommercialProduct.css';
import RoImg from '../assets/RObck.jpg';


const CommercialProducts = () => {

  const navigate = useNavigate();

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
      title: 'Product 1',
      price: '$99.99',
    },
    {
      id: 2,
      image: '/path/to/product2.jpg',
      title: 'Product 2',
      price: '$149.99',
    },
    {
      id: 3,
      image: '/path/to/product3.jpg',
      title: 'Product 3',
      price: '$199.99',
    },
    {
      id: 4,
      image: '/path/to/product4.jpg',
      title: 'Product 4',
      price: '$249.99',
    },
    {
      id: 5,
      image: '/path/to/product5.jpg',
      title: 'Product 5',
      price: '$299.99',
    },
    {
      id: 6,
      image: '/path/to/product6.jpg',
      title: 'Product 6',
      price: '$349.99',
    },
    {
      id: 7,
      image: '/path/to/product7.jpg',
      title: 'Product 7',
      price: '$399.99',
    }
  ];

  return (
    <div>
      {/* <Header /> */}
      <Container maxWidth="xl" sx={{ minHeight: '300px' }}>
        <Box sx={{ textAlign: 'center', mb: 4, pt: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Commercial Products
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs separator="››">
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
      </Container>

      {/* Wider hero section */}
      <Box sx={{ width: '100%', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="xl" sx={{ mb: 8, py: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 8,
              borderRadius: 2,
              width: '100%',
            }}
          >
            <Box sx={{ flex: 1.5, width: '100%' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#0277bd' }}>
                Clean, Safe, and Pure Water for Your Family
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                At <b>Durga Traders</b>, we understand the importance of clean and safe drinking water. That's why we offer state-of-the-art Reverse Osmosis (RO) Water Purification Systems, designed to remove impurities and provide you with water that's not only safe to drink but also better for your health.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our RO systems are the best solution for households, offices, and businesses that need a reliable and efficient water purification system.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={RoImg}
                alt="RO Water Purification System"
                style={{
                  width: '90%',
                  height: 'auto',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold',
            borderBottom: '3px solid #0277bd',
            pb: 1,
            display: 'inline-block'
          }}>
            Our Products
          </Typography>
        </Box>
        <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center' }}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ maxWidth: '1500px' }}
          >
            {products.map((product) => (
              <Grid
                item xs={6} sm={6} md={4} lg={3}
                key={product.id}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  sx={{
                    width: { xs: '100%', sm: '350px' },
                    maxWidth: '350px',
                    height: '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                      {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.primary" sx={{ mb: 2 }}>
                      {product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate(`/product/${product.id}`)}
                      sx={{
                        mt: 'auto',
                        py: 1.5,
                        backgroundColor: '#0277bd',
                        '&:hover': {
                          backgroundColor: '#01579b'
                        }
                      }}
                    >
                      More Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default CommercialProducts;
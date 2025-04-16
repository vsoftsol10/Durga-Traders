import { Box, Container, Typography, Breadcrumbs, Link, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommercialProduct.css';
import RoImg from '../assets/RObck.jpg';
import CommercialOne from '../assets/CommercialOne.jpeg';
import CommercialTwo from '../assets/CommercialTwo.jpeg';
import CommercialFour from '../assets/CommercialFour.jpeg';
import CommercialFive from '../assets/CommercialFive.jpeg';
import CommercialSix from '../assets/CommercialSix.jpeg';
import CommercialSeven from '../assets/CommercialSeven.jpeg';
import CommercialEight from '../assets/CommercialEight.jpeg';


const CommercialProducts = () => {
  const [animated, setAnimated] = useState(false);
  const [openPincodeModal, setOpenPincodeModal] = useState(false);
  const [pincode, setPincode] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [resultType, setResultType] = useState(''); // 'success' or 'error'

  const navigate = useNavigate();

  useEffect(() => {
    setAnimated(true);
    
    // Set a timeout to show the pincode modal after 5 seconds
    const timer = setTimeout(() => {
      setOpenPincodeModal(true);
    }, 5000);
    
    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const breadcrumbs = [
    <Link href="/" underline="hover" color="inherit" key="home">
      <b>Home</b>
    </Link>,
    <Typography key="commercial-products"><b>Commercial Products</b></Typography>
  ];

  const isTamilNaduPincode = (pincode) => {
    const pin = parseInt(pincode);
    return pin >= 600001 && pin <= 643253;
  };


  const products = [
    {
      id: 1,
      image: CommercialOne,
      title: 'DT-250 AUTO',
      model: '2251AMO',
    },
    {
      id: 2,
      image: CommercialTwo,
      title: 'DT-500 AUTO',
      model: '2501AMO',
    },
    {
      id: 3,
      image: CommercialFour,
      title: 'DT-2000 AUTO',
      model: '22K1AMO',
    },
    {
      id: 4,
      image: CommercialFive,
      title: 'DT-1000 AUTO',
      model: '21K1AMO',
    },
    {
      id: 5,
      image: CommercialSix,
      title: 'DT-5000 AUTO',
      model: '25K1AMO',
    },
    {
      id: 6,
      image: CommercialSeven,
      title: 'DT-100 CLOSED',
      model: '21C1AMO',
    },
    {
      id: 7,
      image: CommercialEight,
      title: 'DT-100 OPEN',
      model: '21C2AMO',
    }
  ];

  // Custom styles for the zoom-out animation
  const headingStyle = {
    fontWeight: 'bold',
    fontSize: 34,
    transform: animated ? 'scale(2)' : 'scale(0.5)',
    opacity: animated ? 1 : 0,
    transition: 'transform 1.5s ease-out, opacity 1.5s ease-in',
  };

  // Theme colors
  const primaryColor = '#022279';
  const secondaryColor = '#00c7e8';

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="xl" sx={{minHeight: 100}}>
        <Box sx={{ mb: 4, marginTop: 6 }}>
          <Breadcrumbs separator="››">
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{
            fontWeight: 'bold',
            fontSize: '4rem',
            borderBottom: `3px solid ${primaryColor}`,
            pb: 1,
            display: 'inline-block',
            color: primaryColor
          }}>
            Durga Commercial Water Product
          </Typography>

          <Typography sx={{
            fontSize: '1.5rem',
            pb: 1,
            display: 'inline-block',
            color: primaryColor,
            mt: 2
          }}>
            Choose Water Purifier that best suits your needs & budget
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
                    },
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    p: 3,
                    backgroundColor: '#f8f9fa'
                  }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: primaryColor }}>
                      {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.primary" sx={{ mb: 2 }}>
                      {product.model}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate(`/product/${product.id}`)}
                      sx={{
                        mt: 'auto',
                        py: 1.5,
                        backgroundColor: secondaryColor,
                        '&:hover': {
                          backgroundColor: primaryColor
                        },
                        borderRadius: '8px',
                        fontWeight: 'bold'
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
        {/* Wider hero section */}
        <Box sx={{ width: '100%', backgroundColor: '#f0f6ff', borderRadius: '16px', mb: 6 }}>
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
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: primaryColor }}>
                  Clean, Safe, and Pure Water for Your Family
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  At <b>Durga Traders</b>, we understand the importance of clean and safe drinking water. That's why we offer state-of-the-art Reverse Osmosis (RO) Water Purification Systems, designed to remove impurities and provide you with water that's not only safe to drink but also better for your health.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Our RO systems are the best solution for households, offices, and businesses that need a reliable and efficient water purification system.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    py: 1.5,
                    px: 4,
                    backgroundColor: secondaryColor,
                    '&:hover': {
                      backgroundColor: primaryColor
                    },
                    borderRadius: '8px',
                    fontWeight: 'bold'
                  }}
                >
                  Learn More
                </Button>
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
      </Container>
      {/* <Footer /> */}
      {openPincodeModal && (
        <Box
          sx={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <Box sx={{ 
            backgroundColor: '#fff',
            p: 4, 
            borderRadius: 2, 
            textAlign: 'center', 
            maxWidth: 400,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            border: `2px solid ${secondaryColor}`
          }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: primaryColor }}>
              Share location Pin code
            </Typography>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="e.g. 600001"
              style={{ 
                padding: '12px', 
                width: '80%', 
                marginBottom: '20px', 
                fontSize: '16px',
                borderRadius: '8px',
                border: `1px solid ${secondaryColor}`,
                outline: 'none'
              }}
            />
            <br />
            <Button
              variant="contained"
              onClick={() => {
                if (isTamilNaduPincode(pincode)) {
                  setResultType('success');
                  setResultMessage('🎉 Yay! We deliver to your area in Tamil Nadu!');
                } else {
                  setResultType('error');
                  setResultMessage('🚫 Sorry, service not available in your region.');
                }
              }}
              sx={{ 
                backgroundColor: secondaryColor, 
                '&:hover': { backgroundColor: primaryColor },
                borderRadius: '8px',
                py: 1.2,
                px: 3,
                fontWeight: 'bold'
              }}
            >
              Submit
            </Button>

            <Box sx={{ mt: 3, backgroundColor: '#f0f6ff', p: 2, borderRadius: '8px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: primaryColor }}>
                Why we collect Pin code?
              </Typography>
              <Typography variant="body1">
                Suppliers available in Tamil Nadu Regions only
              </Typography>
            </Box>

            {resultMessage && (
              <Typography sx={{ 
                mt: 3, 
                color: resultType === 'success' ? 'green' : 'red', 
                fontWeight: 'bold',
                p: 2,
                backgroundColor: resultType === 'success' ? '#e8f5e9' : '#ffebee',
                borderRadius: '8px'
              }}>
                {resultMessage}
              </Typography>
            )}

            {(resultMessage && (
              <Button 
                onClick={() => setOpenPincodeModal(false)} 
                sx={{ 
                  mt: 2,
                  backgroundColor: primaryColor,
                  color: 'white',
                  '&:hover': { backgroundColor: secondaryColor },
                  borderRadius: '8px',
                  py: 1,
                  px: 3
                }}
              >
                Continue
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default CommercialProducts;
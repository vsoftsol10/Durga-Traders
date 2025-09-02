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
      description: 'Advanced commercial water purification system designed for small to medium businesses. Features state-of-the-art reverse osmosis technology with automated operation for consistent water quality.',
    },
    {
      id: 2,
      image: CommercialTwo,
      title: 'DT-500 AUTO',
      model: '2501AMO',
      description: 'High-capacity commercial purifier with enhanced filtration technology. Perfect for restaurants, cafes, and small industrial applications with moderate water consumption needs.',
    },
    {
      id: 3,
      image: CommercialFour,
      title: 'DT-2000 AUTO',
      model: '22K1AMO',
      description: 'Premium heavy-duty water purification system for large commercial facilities. Features multi-stage filtration and intelligent monitoring for optimal performance.',
    },
    {
      id: 4,
      image: CommercialFive,
      title: 'DT-1000 AUTO',
      model: '21K1AMO',
      description: 'Versatile commercial water system with advanced contaminant removal capabilities. Ideal for healthcare facilities, laboratories, and medium-sized manufacturing plants.',
    },
    {
      id: 5,
      image: CommercialSix,
      title: 'DT-5000 AUTO',
      model: '25K1AMO',
      description: 'Our most powerful commercial water purification solution. Engineered for industrial applications with extreme water quality demands and high volume requirements.',
    },
    {
      id: 6,
      image: CommercialSeven,
      title: 'DT-100 CLOSED',
      model: '21C1AMO',
      description: 'Compact closed-system design offering reliable purification in a space-saving format. Perfect for offices, retail spaces, and areas with limited installation space.',
    },
    {
      id: 7,
      image: CommercialEight,
      title: 'DT-100 OPEN',
      model: '21C2AMO',
      description: 'Open architecture water purification system allowing easy maintenance and filter replacement. Designed for environments where regular servicing is a priority.',
    }
  ];

  // Theme colors
  const primaryColor = '#022279';
  const secondaryColor = '#00c7e8';

  return (
    <div>
      <Container maxWidth="xl" sx={{ minHeight: 100 }}>
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
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4rem' }, 
            pb: 1,
            display: 'inline-block',
            color: primaryColor
          }}>
            Durga Commercial Water Product
          </Typography>

          <Typography sx={{
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.5rem' },
            pb: 1,
            display: 'inline-block',
            color: primaryColor,
            mt: 2
          }}>
            Choose Water Purifier that best suits your needs & budget
          </Typography>
        </Box>

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
                <Typography variant="h4" sx={{
                  mb: 3,
                  fontWeight: 'bold',
                  color: primaryColor,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem' }
                }}>
                  Clean, Safe, and Pure Water for Your Family
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'black' }}>
                  At <b>Durga Traders</b>, we provide cutting-edge commercial water systems designed to meet the highest standards of purity, performance, and reliability. Whether you're a business, factory, hotel, or healthcare center, our water solutions ensure your team and customers enjoy clean, safe, and great-tasting water every single time.
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

        {/* 100+ Happy Customers Section */}
        <Box sx={{ width: '100%', backgroundColor: '#022279', color: 'white', py: 5, mb: 6, borderRadius: '16px' }}>
          <Container maxWidth="xl">
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: { xs: 4, md: 8 }
            }}>
              <Box>
                <Typography variant="h2" sx={{ 
                  fontWeight: 'bold', 
                  fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                  color: '#00c7e8'
                }}>
                  2000+
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } 
                }}>
                  Happy Customers
                </Typography>
              </Box>
              
              <Box sx={{ 
                maxWidth: '600px',
                borderLeft: { xs: 'none', md: '4px solid #00c7e8' },
                pl: { xs: 0, md: 4 }
              }}>
                <Typography variant="body1" sx={{ 
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontStyle: 'italic'
                }}>
                  "Durga Traders has consistently delivered exceptional commercial water purification solutions for our hotel chain. Their systems are reliable, efficient, and have significantly improved water quality across all our properties."
                </Typography>
               
              </Box>
            </Box>
          </Container>
        </Box>

        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: primaryColor,
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Our Commercial Products
          </Typography>
        </Box>

        {/* Alternating Product Layout */}
        <Box sx={{ mb: 8 }}>
          {products.map((product, index) => (
            <Box 
              key={product.id}
              sx={{
                display: 'flex',
                flexDirection: { 
                  xs: 'column', 
                  md: index % 2 === 0 ? 'row' : 'row-reverse' 
                },
                mb: 8,
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                },
                transition: 'box-shadow 0.3s ease'
              }}
            >
              {/* Product Image */}
              <Box 
                sx={{ 
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    minHeight: '350px',
                  }}
                />
              </Box>
              
              {/* Product Details */}
              <Box 
                sx={{ 
                  flex: 1,
                  padding: { xs: 3, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h2" 
                  sx={{
                    fontWeight: 'bold',
                    color: primaryColor,
                    mb: 1,
                    fontSize: { xs: '1.75rem', md: '2rem' }
                  }}
                >
                  {product.title}
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'text.primary',
                    mb: 3,
                    fontWeight: '500' 
                  }}
                >
                  Model: {product.model}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'text.secondary' 
                  }}
                >
                  {product.description}
                </Typography>
                
                <Button
                  variant="contained"
                  onClick={() => navigate(`/product/${product.id}`)}
                  sx={{
                    alignSelf: 'flex-start',
                    py: 1.5,
                    px: 4,
                    background: 'linear-gradient(90deg, #022279 0%, #00C7E8 100%)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #021a5c 0%, #00a5c7 100%)'
                    },
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    color: '#fff',
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  More Details
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Box textAlign="center" mb={5}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                color: primaryColor,
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Our Product Range
            </Typography>
          </Box>

          <Grid container spacing={18} justifyContent="center">
            {/* Commercial RO Plants */}
            <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ width: { lg: '20%' } }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: primaryColor
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 22h12a2 2 0 0 0 2-2V7l-5-5H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
                      <path d="M10 10v7"></path>
                      <path d="M14 10v7"></path>
                      <path d="M10 14h4"></path>
                    </svg>
                  </Box>
                  <Typography variant="h6" component="h3" align="center" sx={{
                    fontWeight: 'bold',
                    color: primaryColor,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}>
                    Commercial RO Plants
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✅ Advanced Reverse Osmosis systems designed for high-volume usage and consistent output. Ideal for industries, restaurants, and large institutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Industrial Water Purifiers */}
            <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ width: { lg: '20%' } }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: primaryColor
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 22h20"></path>
                      <path d="M5 12v10"></path>
                      <path d="M19 12v10"></path>
                      <path d="M5 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4H5V8Z"></path>
                      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                      <path d="M9 12v0"></path>
                      <path d="M15 12v0"></path>
                    </svg>
                  </Box>
                  <Typography variant="h6" component="h3" align="center" sx={{
                    fontWeight: 'bold',
                    color: primaryColor,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}>
                    Industrial Water Purifiers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✅ Remove harmful contaminants and deliver crystal-clear water with energy-efficient purification systems built for continuous use.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Hot & Cold Water Dispensers */}
            <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ width: { lg: '20%' } }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: primaryColor
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v8"></path>
                      <path d="M4 10h16"></path>
                      <path d="M5.5 14h12.5"></path>
                      <path d="M6.5 18h10.5"></path>
                      <path d="M8 22h8"></path>
                      <path d="M17 22v-2.78"></path>
                      <path d="M19.66 15l-3.46-3.48a4 4 0 0 0-5.42-.24L7 14.74"></path>
                    </svg>
                  </Box>
                  <Typography variant="h6" component="h3" align="center" sx={{
                    fontWeight: 'bold',
                    color: primaryColor,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}>
                    Hot & Cold Water Dispensers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✅ Smart temperature control, sleek designs, and hygienic dispensing for corporate offices, schools, and public facilities.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Water Softeners */}
            <Grid item xs={12} sm={6} md={6} lg={2.4} sx={{ width: { lg: '20%' } }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: primaryColor
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 7v9a3 3 0 0 0 5.9 0"></path>
                      <path d="M13.8 7.8c.1-.5.2-1 .2-1.5a3.3 3.3 0 0 0-6.4-1"></path>
                      <path d="M16 22l4-4"></path>
                      <path d="M20 22l-4-4"></path>
                      <path d="M7 8l.1.9"></path>
                      <path d="M3.2 14.8a4 4 0 0 0 5.7 5.7 4 4 0 1 0-5.7-5.7"></path>
                    </svg>
                  </Box>
                  <Typography variant="h6" component="h3" align="center" sx={{
                    fontWeight: 'bold',
                    color: primaryColor,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}>
                    Water Softeners
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✅ Reduce hardness, protect your appliances, and increase the lifespan of plumbing systems.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* UV & UF Systems */}
            <Grid item xs={12} sm={6} md={6} lg={2.4} sx={{ width: { lg: '20%' } }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: primaryColor
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2c0 4-6 4-6 0"></path>
                      <path d="M2 3v5.5a8 8 0 0 0 10 7.5"></path>
                      <path d="m8 21 1-1c6.1-6.1 10-12 9-5s-8 9-2 6"></path>
                    </svg>
                  </Box>
                  <Typography variant="h6" component="h3" align="center" sx={{
                    fontWeight: 'bold',
                    color: primaryColor,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}>
                    UV & UF Systems
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✅ Chemical-free purification with advanced UV/UF technology, suitable for hospitals and food processing units.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>

    </div>
  );
};

export default CommercialProducts;
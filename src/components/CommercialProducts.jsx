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
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4rem' }, // Responsive font size
            borderBottom: `3px solid ${primaryColor}`,
            pb: 1,
            display: 'inline-block',
            color: primaryColor
          }}>
            Durga Commercial Water Product
          </Typography>

          <Typography sx={{
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.5rem' }, // Responsive font size
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
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem' } // Responsive heading
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

        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
              fontWeight: 'bold',
              color: primaryColor,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60%',
                height: '3px',
                backgroundColor: secondaryColor,
                bottom: '-10px',
                left: '20%',
                borderRadius: '2px',
              }
            }}
          >
            Our Commercial Products
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
                    <Typography gutterBottom variant="h5" component="div" sx={{
                      fontWeight: 'bold',
                      color: primaryColor,
                      fontSize: { xs: '1.25rem', md: '1.5rem' } // Responsive product title
                    }}>
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
                        background: 'linear-gradient(90deg, #022279 0%, #00C7E8 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #021a5c 0%, #00a5c7 100%)' // slightly darker gradient on hover
                        },
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        color: '#fff',
                        textTransform: 'none'
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

        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Box textAlign="center" mb={5}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
                fontWeight: 'bold',
                color: primaryColor,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '60%',
                  height: '3px',
                  backgroundColor: secondaryColor,
                  bottom: '-10px',
                  left: '20%',
                  borderRadius: '2px',
                }
              }}
            >
              Our Product Range
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
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
                    fontSize: { xs: '1rem', md: '1.25rem' } // Responsive card title
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
                    fontSize: { xs: '1rem', md: '1.25rem' } // Responsive card title
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
                    fontSize: { xs: '1rem', md: '1.25rem' } // Responsive card title
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
                    fontSize: { xs: '1rem', md: '1.25rem' } // Responsive card title
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
                    fontSize: { xs: '1rem', md: '1.25rem' } // Responsive card title
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

      {openPincodeModal && (
        <Box
          sx={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            overflow: 'auto', // Allow scrolling if modal is larger than screen
            padding: '20px' // Consistent padding around modal
          }}
        >
          <Box sx={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '16px',
            textAlign: 'center',
            width: '380px', // Fixed width
            minWidth: '380px', // Minimum width to prevent shrinking
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            border: `2px solid ${secondaryColor}`,
            margin: 'auto', // Center the modal
            position: 'relative' // For positioning of elements inside
          }}>
            {/* Add close button here */}
            <Button
              onClick={() => setOpenPincodeModal(false)}
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                minWidth: '36px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                p: 0,
                color: 'grey.500',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                  color: 'grey.700'
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Button>

            <Typography variant="h5" sx={{
              fontWeight: 'bold',
              mb: 3,
              color: primaryColor,
              fontSize: '1.5rem'  // Fixed font size
            }}>
              Share location Pin code
            </Typography>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="e.g. 600001"
              style={{
                padding: '12px',
                width: '280px', // Fixed width
                marginBottom: '24px',
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
                  setResultMessage('🎉 Great news! We deliver to your location.');
                } else {
                  setResultType('error');
                  setResultMessage('🚫 Sorry, our service is not yet available in your area.');
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

            <Box sx={{
              mt: 3,
              backgroundColor: '#f0f6ff',
              p: 2.5,
              borderRadius: '8px'
            }}>
              <Typography variant="h6" sx={{
                fontWeight: 'bold',
                color: primaryColor,
                fontSize: '1rem' // Fixed font size
              }}>
                Why we collect Pin code?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '0.95rem', color: 'black' }}>
                We collect your PIN code to connect you with the nearest available suppliers and ensure faster service in your region.
              </Typography>
            </Box>

            {resultMessage && (
              <Typography sx={{
                mt: 3,
                color: resultType === 'success' ? 'green' : 'red',
                fontWeight: 'bold',
                p: 2,
                backgroundColor: resultType === 'success' ? '#e8f5e9' : '#ffebee',
                borderRadius: '8px',
                fontSize: '1rem' // Fixed font size
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
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './home.css';
import CounterBox from '../Animation/CounterBox';
import AnimatedTestimonials from './AnimatedTestimonials';
import WaterComposition from '../Animation/WaterComposition';
import Warranty from '../assets/Warranty icon.png';
import FreeConsult from '../assets/Free consultation icon.png';
import PurchaseSupport from '../assets/Purchase support icon.png';
import Support from '../assets/Service support icon.png';
import AquaImg from '../assets/about-1.png';
import HydrateImg from '../assets/Hydrateman.png';
import AFT from '../assets/Advance Filtration.png';
import CHS from '../assets/Commitment 001.png';
import Sustain from '../assets/Sustainability.png';
import CustSats from '../assets/Customer.png';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import Carousel from '../Animation/Carousel';
import BookDemo from '../assets/Book demo icon.png';
import BestSellingProducts from './BestSellingProducts';
import CuttingEdge from './CuttingEdge';
import DurgaPurifier from './DurgaPurifier';


const Home = () => {
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const primaryColor = '#022279';
  const secondaryColor = '#00c7e8';

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 5,
        ease: 'power5.out',
      }
    );

  }, []);

  const minerals = [
    { id: 'calcium', symbol: 'Ca', name: 'Calcium', value: '19.1 Mg / L', description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.' },
    { id: 'magnesium', symbol: 'Mg', name: 'Magnesium', value: '2.5 Mg / L', description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.' },
    { id: 'sodium', symbol: 'Na', name: 'Sodium', value: '9.5 Mg / L', description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.' },
    { id: 'potassium', symbol: 'K', name: 'Potassium', value: '0.5 Mg / L', description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.' },
    { id: 'bicarbonate', symbol: 'HCO', name: 'Bicarbonate', value: '35 Mg / L', description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.' },
    { id: 'chloride', symbol: 'Cl', name: 'Chloride', value: '12.1 Mg / L', description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.' },
  ];

  const services = [
    {
      image: AFT,
      title: 'Updated Filtration Technology',
      description: 'Our systems use the latest filtration technologies to ensure your water is purified to the highest standards',
    },
    {
      image: CHS,
      title: 'Commitment to Health and Safety',
      description: 'We understand the importance of clean water for your health. Our products are rigorously tested to meet the highest safety standards.',
    },
    {
      image: Sustain,
      title: 'Sustainability',
      description: 'We deliver clean water while caring for the planet. Our eco-friendly filters cut plastic waste by replacing bottled water with sustainable solutions. Pure water, greener future.',
    },
    {
      image: CustSats,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We offer personalized customer support and services to ensure you are always happy with your water filter system.',
    },
  ];

  const service = [{
    image: BookDemo,
    title: 'Book Demo'
  },
  {
    image: FreeConsult,
    title: 'Free Consultation'
  },
  {
    image: PurchaseSupport,
    title: 'Purchase Support'
  },
  {
    image: Warranty,
    title: 'Extended Warranty'
  },
  {
    image: Support,
    title: 'Services Support'
  }
  ]

  return (
    <div>
      <Carousel />
      <BestSellingProducts />
      <CounterBox />
      

      <Container maxWidth="xlg" style={{ paddingTop: '40px' }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: { xs: '80%', sm: '40%' },
              marginBottom: { xs: '20px', sm: '0' },
            }}
            display="flex"
            justifyContent="center"
          >
            <img
              src={AquaImg}
              alt="water"
              ref={imageRef}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '60%' },
              paddingLeft: { sm: '20px' },
            }}
            textAlign="center"
          >
            <Typography variant="h3" align="center" sx={{ color: primaryColor, position: 'relative', display: 'inline-block' }}>
              Your Trusted Partner for<br /> Clean & Safe Water !
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginTop: '20px', color: 'black', fontSize: '20px' }}>
              Water is vital for the survival of every living creature, not just humans. Regular intake of clean, pure water is crucial for maintaining good health. When choosing water, it's important to ensure it meets natural pH balance standards and tastes refreshing. Without these qualities, your health could be at risk in the near future.
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ marginTop: '20px' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: primaryColor,
                  color: 'white',
                  padding: '10px 20px',
                  '&:hover': {
                    backgroundColor: secondaryColor,
                    color: 'black',
                    boxShadow: '0 4px 8px rgba(50, 175, 197, 0.49)'
                  },
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ paddingTop: '40px' }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: '3rem',
              color: primaryColor,
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Why Durga Traders ?
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '45%', md: '22%' },
                padding: '10px',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              <Card
                sx={{
                  height: '389px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  borderRadius: '15px',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '50%',
                      height: 'auto',
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                </CardContent>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ marginBottom: '5px', fontWeight: 'bold', color: primaryColor }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* <WaterComposition /> */}

      <Box sx={{ width: '100%', backgroundColor: '#e3f2fd', py: 6 }}>
        <Container maxWidth="xl">
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            sx={{
              padding: { xs: '30px', md: '40px' },
              gap: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: 'center',
                width: '100%'
              }}
            >
              <img
                src={HydrateImg}
                alt="Hydrate"
                style={{
                  width: '90%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0, 140, 210, 0.15)'
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 1.2,
                textAlign: 'left',
                zIndex: 1
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  color: primaryColor,
                  fontWeight: 'bold',
                  mb: 3
                }}
              >
                Hydration is Key
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#424242'
                }}
              >
                Staying hydrated is crucial for maintaining good health. Our products are designed to help you achieve optimal hydration levels every day. Learn more about the benefits of drinking clean and purified water.
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate('/blog')}
                sx={{
                  mt: 3,
                  backgroundColor: secondaryColor,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: primaryColor,
                  },
                  borderRadius: '8px',
                  px: 3,
                  py: 1
                }}
              >
                Discover More Details
              </Button>

            </Box>

            {/* Water effect background elements */}
            <Box
              sx={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${secondaryColor}20 0%, ${secondaryColor}00 70%)`,
                bottom: '-50px',
                right: '10%',
                zIndex: 0
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${secondaryColor}20 0%, ${secondaryColor}00 70%)`,
                top: '-30px',
                left: '15%',
                zIndex: 0
              }}
            />
          </Box>
        </Container>
      </Box>
      <CuttingEdge/>
      <DurgaPurifier/>

      <AnimatedTestimonials />

      <Container maxWidth="xl" style={{ paddingTop: '40px' }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: '3rem',
              color: primaryColor,
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Services
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {service.map((services, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '45%', md: '19%' }, // Changed this
                padding: '10px',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '15px',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Box
                    component="img"
                    src={services.image}
                    alt={services.title}
                    sx={{
                      width: '60%',
                      height: 'auto',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(0.9)',
                        cursor: 'pointer',
                      },
                    }}
                  />
                </Link>
                <CardContent>
                  <Typography
                    variant="h6"
                    component={Link}
                    to="/contact"
                    sx={{
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      color: primaryColor,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: secondaryColor,
                      }
                    }}
                  >
                    {services.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

    </div>
  );
};

export default Home;
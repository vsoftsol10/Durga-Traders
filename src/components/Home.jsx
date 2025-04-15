import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './home.css';
import AnimatedTestimonials from './AnimatedTestimonials';
import WavyDivider from '../Animation/WavyDivider';
import HomeOne from '../assets/Durga Traders gif home page.gif';
import BigSale from '../assets/Offersales.gif';
import BestSell1 from '../assets/bestseller1.png';
import BestSell2 from '../assets/bestseller2.png';
import BestSell3 from '../assets/bestseller3.png';
import BestSell4 from '../assets/bestseller4.png';
import AquaImg from '../assets/about-1.png';
import HydrateImg from '../assets/Hydrateman.png';
import AFT from '../assets/Advance Filtration.png';
import CHS from '../assets/Commitment 001.png';
import Sustain from '../assets/Sustainability.png';
import CustSats from '../assets/Customer.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

// Fixed images array for carousel - only one image
const carouselImages = [
  HomeOne,
];

const Home = () => {
  const sliderRef = useRef(null);
  const imageRef = useRef(null);

  // Modified settings to handle single image correctly
  const settings = {
    dots: true,
    infinite: carouselImages.length > 1, // Only enable infinite if more than one image
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: carouselImages.length > 1, // Only enable autoplay if more than one image
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: carouselImages.length > 1, // Only show arrows if more than one image
    className: "center"
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );

    if (sliderRef.current && carouselImages.length > 1) {
      sliderRef.current.slickPlay();
    }
  }, []);


  const services = [
    {
      image: AFT,
      title: 'Advanced Filtration Technology',
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
      description: 'We are not just about providing clean water, but also protecting our planet. Our eco-friendly filtration systems help reduce environmental impact by eliminating the need for bottled water, reducing plastic waste, and promoting long-term sustainable water solutions.',
    },
    {
      image: CustSats,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We offer personalized customer support and services to ensure you are always happy with your water filter system.',
    },
  ];

  const products = [
    {
      title: 'DT-ROMA',
      modelName: 'WP-1000',
      description: 'An advanced water purifier with multi-stage filtration.',
      image: BestSell1,
      alt: 'product1',
    },
    {
      title: 'Water Purifier 2',
      modelName: 'WP-2000',
      description: 'A high-performance purifier for large families.',
      image: BestSell2,
      alt: 'product2',
    },
    {
      title: 'Water Purifier 3',
      modelName: 'WP-3000',
      description: 'Compact and efficient purifier for apartments.',
      image: BestSell3,
      alt: 'product3',
    },
    {
      title: 'Water Purifier 4',
      modelName: 'WP-4000',
      description: 'A premium purifier with state-of-the-art technology.',
      image: BestSell4,
      alt: 'product4',
    },
  ];

  const testimonials = [
    {
      name: 'Nirmal',
      location: 'Chennai',
      feedback: 'It removed all the bad taste and odor from our tap water. Its refreshing to drink now!',
    },
    {
      name: 'Vijay Kumar',
      location: 'Coimbatore',
      feedback: 'We use this RO system in our factory where we need large quantities of purified water for our production lines. Its been running smoothly for over a year without any major issues.',
    },
    {
      name: 'Ajmal',
      location: 'Madurai',
      feedback: 'We installed this RO system in our restaurant, and the difference in water quality is incredible. We no longer have issues with the taste of our drinks and coffee. Its pure, crisp water.',
    },
    {
      name: 'Gobi Dass',
      location: 'Madurai',
      feedback: 'We bought RO for our house, from Enquiry,Site visit,product explanation to execution, their approach was very Proffessional and also suggested us a correct and essential products.I strongly recommend Durga Traders for water related solutions.',
    },
    {
      name: 'Chandru Kanagasabapathy',
      location: 'Madurai',
      feedback: 'Durga Traders playing a vital role in sales and service of the plant....Their expertise in this area making one of the pioneer in this field ....wish them best in luck....',
    },
  ];

  return (
    <div>
     <div style={{ position: 'relative' }}>
  <img
    src={HomeOne}
    alt="homeSlide"
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  />
  
  {/* New Wavy Divider */}
  <WavyDivider topColor="#ffffff" bottomColor="#ffffff" />
</div>

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
            <Typography variant="h3" align="center">
              Your Trusted Partner for<br /> Clean and Safe Water
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginTop: '20px' }}>
              Water is vital for the survival of every living creature, not just humans. Regular intake of clean, pure water is crucial for maintaining good health. When choosing water, it's important to ensure it meets natural pH balance standards and tastes refreshing. Without these qualities, your health could be at risk in the near future.
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ marginTop: '20px' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00bcd4',
                  color: 'white',
                  padding: '10px 20px',
                  '&:hover': {
                    backgroundColor: '#008c99',
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
              color: '#0277bd',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60%',
                height: '3px',
                bottom: '-10px',
                left: '20%',
                backgroundColor: '#00bcd4',
                borderRadius: '2px',
              }
            }}
          >
            Why Durga Traders
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
                  <Typography variant="h6" sx={{ marginBottom: '5px', fontWeight: 'bold' }}>
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

      <div>
        <img src={BigSale} alt='off' style={{ width: '100%' }} />
      </div>

      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 5, md: 10 }, pt: '40px' }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#0277bd',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60%',
                height: '3px',
                bottom: '-10px',
                left: '20%',
                backgroundColor: '#00bcd4',
                borderRadius: '2px',
              }
            }}
          >
            Our Best Selling Products
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '48%', md: '28%' },
                padding: '10px',
                textAlign: 'center',
                marginBottom: '20px',
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                {/* Image Section */}
                <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    style={{
                      width: '70%',
                      height: 'auto',
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                </CardContent>

                {/* Text Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ marginBottom: '5px', fontWeight: 'bold' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                    {product.modelName}
                  </Typography>
                  <Typography sx={{ marginBottom: '10px' }} paragraph>
                    {product.description}
                  </Typography>
                </CardContent>

                {/* Button */}
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button size="small" variant="contained" color="primary">
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

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
                  color: '#0277bd',
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
            </Box>

            {/* Water effect background elements */}
            <Box
              sx={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(3,169,244,0.1) 0%, rgba(3,169,244,0) 70%)',
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
                background: 'radial-gradient(circle, rgba(3,169,244,0.1) 0%, rgba(3,169,244,0) 70%)',
                top: '-30px',
                left: '15%',
                zIndex: 0
              }}
            />
          </Box>
        </Container>
      </Box>

      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Home;
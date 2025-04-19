import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnimatedTestimonials from './AnimatedTestimonials';
import HomeOne from '../assets/Commercial & Residential.gif';
import HomeTwo from '../assets/residential purifier.gif';
import HomeThree from '../assets/COMMERCIAL purifier.gif';
import HomeFour from '../assets/Water Importance.gif';
import HomeFive from '../assets/Weather Water.gif';
import BigSale from '../assets/Offersales.gif';
import BestSellOne from '../assets/Durga Product 01.png';
import BestSellTwo from '../assets/Durga Product 03.png';
import BestSellThree from '../assets/Durga Product 04.png';
import BestSellFour from '../assets/Durga Product 02.png';
import Bookdemo from '../assets/Book demo icon.png';
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Box } from '@mui/material';


const Home = () => {
  const sliderRef = useRef(null);
  const imageRef = useRef(null);
  const questionMarkRef = useRef(null);
  const exclamationMarkRef = useRef(null);
  const navigate = useNavigate();


  // Define the colors to match the CommercialProducts page
  const primaryColor = '#022279';
  const secondaryColor = '#00c7e8';

  const carouselImages = [HomeOne, HomeTwo, HomeThree, HomeFour, HomeFive];

  const settings = {
    dots: true,
    infinite: carouselImages.length > 1,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: carouselImages.length > 1,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: carouselImages.length > 1,
    className: "center"
  };

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

    if (sliderRef.current && carouselImages.length > 1) {
      sliderRef.current.slickPlay();
    }

    // Animation for the question mark
    if (questionMarkRef.current) {
      // Create a hanging/swinging animation
      gsap.to(questionMarkRef.current, {
        rotation: 15,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        repeatDelay: 2
      });
    }

    // Animation for the exclamation mark
    if (exclamationMarkRef.current) {
      // Create a slightly different hanging animation
      gsap.to(exclamationMarkRef.current, {
        rotation: -15,
        duration: 1.8,
        ease: "elastic.out(1, 0.4)",
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        repeatDelay: 1.5,
        delay: 0.5 // Slightly offset from question mark for visual interest
      });
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
      description: 'We deliver clean water while caring for the planet. Our eco-friendly filters cut plastic waste by replacing bottled water with sustainable solutions. Pure water, greener future.',
    },
    {
      image: CustSats,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We offer personalized customer support and services to ensure you are always happy with your water filter system.',
    },
  ];

  const products = [
    {
      title: 'DT-CLEANWATER',
      modelName: '1101AMOT',
      descriptionOne: 'Purification Cartridges: Sediment Filter, Pre-Activated Carbon Absorber, UF Membrane, UV Disinfection Column...',
      image: BestSellOne,
      alt: 'product1',
    },
    {
      title: 'DT-WATERLILY',
      modelName: '1301AMOT',
      descriptionOne: 'Purification Cartridges: Sediment Filter, Pre-Activated Carbon Absorber, UF Membrane, UV Disinfection Column..',
      image: BestSellTwo,
      alt: 'product2',
    },
    {
      title: 'DT-ROMA',
      modelName: '1401AMOT',
      descriptionOne: 'Purification Cartridges: Sediment Filter, Pre-Activated Carbon Absorber, UF Membrane, UV Disinfection Co....',
      image: BestSellThree,
      alt: 'product3',
    },
    {
      title: 'DT-AQUATOUCH',
      modelName: '1201AMOT',
      descriptionOne: 'Purification Cartridges: Sediment Filter, Pre-Activated Carbon Absorber, UF Membrane, UV Disinfection Column...',
      image: BestSellFour,
      alt: 'product4',
    },
  ];

  const service = [{
    image: Bookdemo,
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
    {
      name: 'R. K. Samy',
      location: 'Madurai',
      feedback: 'Durga traders service very good, They are keep timing and quality also, I suggest to all, They are providing good sales and services at reasonable price, Thank you.'
    },
    {
      name: 'Kandasamy Prakash',
      location: 'Karaikudi',
      feedback: 'Excellent service. On time service. Good work.'
    },
    {
      name: 'Bharati Senthil',
      location: 'Thiruvanamalai',
      feedback: 'Friendly Customer service, low cost & immediate response'
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Slider ref={sliderRef} {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '750px',
                  // objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 5, md: 10 }, pt: '40px' }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: '3rem',
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
            Best Selling Products
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '48%', md: '23%' },
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
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Image Section */}
                <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    style={{
                      width: '100%',
                      height: '300px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                </CardContent>

                {/* Text Content */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '5px',
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: '5px', fontWeight: 'bold', color: primaryColor }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    {product.modelName}
                  </Typography>
                  <Typography sx={{ marginBottom: '20px' }} paragraph>
                    {product.descriptionOne}
                  </Typography>
                  <Typography sx={{ marginBottom: '20px' }} paragraph>
                    {product.descriptionTwo}
                  </Typography>

                  {/* Book Demo + Read More */}
                  <Box display="flex" alignItems="center" gap={5}>
                    <Link to="/contact">
                      <img
                        src={Bookdemo}
                        alt="Book Demo"
                        style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                      />
                    </Link>

                    <Typography
                      component={Link}
                      to="/personal-products"
                      sx={{
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        color: secondaryColor,
                        '&:hover': {
                          textDecoration: 'underline',
                          color: primaryColor
                        }
                      }}
                    >
                      Read More
                    </Typography>
                  </Box>
                </Box>
              </Card>

            </Box>
          ))}
        </Box>
      </Container>

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
              Your Trusted Partner for<br /> Clean & Safe Water
              <span ref={exclamationMarkRef} style={{
                display: 'inline-block',
                fontSize: '1.1em',
                fontWeight: 'bold',
                marginLeft: '5px',
                color: secondaryColor,
                transform: 'translateY(-3px)',
                transformOrigin: 'top center'
              }}>!</span>
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginTop: '20px', color: 'black' }}>
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
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60%',
                height: '3px',
                bottom: '-10px',
                left: '20%',
                backgroundColor: secondaryColor,
                borderRadius: '2px',
              }
            }}
          >
            Why Durga Traders
            <span ref={questionMarkRef} style={{
              display: 'inline-block',
              fontSize: '1.1em',
              fontWeight: 'bold',
              marginLeft: '5px',
              color: secondaryColor,
              transform: 'translateY(-3px)',
              transformOrigin: 'top center'
            }}>?</span>
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

      <div>
        <img src={BigSale} alt='off' style={{ width: '100%' }} />
      </div>

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

      <AnimatedTestimonials testimonials={testimonials} />

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
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60%',
                height: '3px',
                bottom: '-10px',
                left: '20%',
                backgroundColor: secondaryColor,
                borderRadius: '2px',
              }
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
                <CardContent sx={{ flexGrow: 1 }}>
                  <img
                    src={services.image}
                    alt={services.title}
                    style={{
                      width: '60%',
                      height: 'auto',
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                </CardContent>
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
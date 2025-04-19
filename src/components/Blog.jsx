import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Breadcrumbs, Link, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import BlogImag from '../assets/BlogImg.png';

const Blog = () => {
    const primaryColor = '#022279';
    const secondaryColor = '#00c7e8';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        <Link href="/" underline="hover" color="inherit" key="home">
            Home
        </Link>,
        <Typography key="blogs"><b>Blogs</b></Typography>
    ];

    const navigate = useNavigate();


    return (
        <div>
            {/* Background Image Overlay */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${BlogImag})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: -1
                }}
            />

            <Container maxWidth="xl" sx={{ minHeight: 100 }}>
                <Box sx={{ mb: 4, marginTop: 6 }}>
                    <Breadcrumbs separator="››">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Box>
            </Container>

            <Container>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            color: primaryColor,
                            fontWeight: 'bold',
                            mb: 3
                        }}
                    >
                        Hydration is Key to Optimal Health
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            color: 'black'
                        }}
                    >
                        Staying hydrated is crucial for maintaining good health and wellbeing. Our premium water purification products are designed to help you achieve optimal hydration levels every day. Learn more about the transformative benefits of drinking clean, purified water and how it can revolutionize your health journey.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth="xl" sx={{ mt: 6 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: primaryColor,
                                fontWeight: 'bold',
                                mb: 2
                            }}
                        >
                            Why Hydration Matters
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: 'black'
                            }}
                        >
                            Water is essential for nearly every bodily function. Proper hydration supports brain function, digestion, joint and muscle health, detoxification, and body temperature regulation. Staying consistently hydrated enhances energy levels and promotes overall well-being.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(0, 199, 232, 0.1)',
                                padding: 3,
                                borderRadius: 2,
                                border: `1px solid ${secondaryColor}`
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 2, color: primaryColor, fontWeight: 'bold' }}>
                                Key Benefits of Proper Hydration:
                            </Typography>
                            <Typography component="div">
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                        <Box component="span" sx={{ color: secondaryColor, mr: 2, fontSize: '1.5rem' }}>💧</Box>
                                        <span><b>Brain Function:</b> Enhances mood, memory, and cognitive performance.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                        <Box component="span" sx={{ color: secondaryColor, mr: 2, fontSize: '1.5rem' }}>🔄</Box>
                                        <span><b>Digestive Health:</b> Aids in digestion and prevents constipation.​</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                        <Box component="span" sx={{ color: secondaryColor, mr: 2, fontSize: '1.5rem' }}>💪</Box>
                                        <span><b>Joint and Muscle Health:</b> Keeps joints lubricated and muscles functioning properly.​</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                        <Box component="span" sx={{ color: secondaryColor, mr: 2, fontSize: '1.5rem' }}>🌱</Box>
                                        <span><b>Detoxification:</b> Helps flush out toxins through urine and sweat.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                        <Box component="span" sx={{ color: secondaryColor, mr: 2, fontSize: '1.5rem' }}>🌡️</Box>
                                        <span><b>Temperature Regulation:</b> Maintains normal body temperature.​</span>
                                    </li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="xl" sx={{ mt: 6 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundImage: `url(${BlogImag})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: 350,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(2, 34, 121, 0.7)',
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'white',
                                    position: 'relative',
                                    zIndex: 1,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    padding: 3
                                }}
                            >
                                How Much Water Do You Need?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ px: 2 }}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    color: primaryColor,
                                    fontWeight: 'bold',
                                    mb: 2
                                }}
                            >
                                Daily Water Intake Recommendations
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    mb: 3
                                }}
                            >
                                While individual needs vary, general guidelines suggest:
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{
                                        width: 40,
                                        height: 40,
                                        backgroundColor: secondaryColor,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>
                                        01
                                    </Box>
                                    <Typography><b>Adult Women:</b> Approximately 2.7 liters (91 ounces) of total water per day</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{
                                        width: 40,
                                        height: 40,
                                        backgroundColor: secondaryColor,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>
                                        02
                                    </Box>
                                    <Typography><b>Adult Men:</b> Approximately 3.7 liters (125 ounces) of total water per day</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{
                                        width: 40,
                                        height: 40,
                                        backgroundColor: secondaryColor,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>
                                        03
                                    </Box>
                                    <Typography><b>Active Individuals:</b> Additional 16-20 ounces for every hour of exercise</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="xl" sx={{ mt: 6, mb: 8 }}>
                <Card sx={{
                    backgroundColor: 'rgba(2, 34, 121, 0.05)',
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden'
                }}>
                    <CardContent sx={{ padding: 4 }}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: primaryColor,
                                fontWeight: 'bold',
                                mb: 3
                            }}
                        >
                            Our Commitment to Your Health
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                mb: 3
                            }}
                        >
                            Our water purification systems ensure you have access to clean, safe, and great-tasting water, supporting your hydration needs every day. We're dedicated to providing innovative solutions that make staying hydrated easier and more enjoyable.
                        </Typography>

                        <Grid container spacing={4} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    border: `1px solid ${secondaryColor}`,
                                    borderRadius: 2,
                                    padding: 3,
                                    height: '100%',
                                    backgroundColor: 'white'
                                }}>
                                    <Typography variant="h5" sx={{ color: primaryColor, mb: 2, fontWeight: 'bold' }}>
                                        Signs of Dehydration
                                    </Typography>
                                    <Typography component="div">
                                        <ul style={{ paddingLeft: '20px' }}>
                                            <li>Thirst and dry mouth</li>
                                            <li>Dark yellow urine</li>
                                            <li>Fatigue and dizziness</li>
                                            <li>Headaches</li>
                                            <li>Decreased concentration</li>
                                        </ul>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    border: `1px solid ${secondaryColor}`,
                                    borderRadius: 2,
                                    padding: 3,
                                    height: '100%',
                                    backgroundColor: 'white'
                                }}>
                                    <Typography variant="h5" sx={{ color: primaryColor, mb: 2, fontWeight: 'bold' }}>
                                        Hydration Tips
                                    </Typography>
                                    <Typography component="div">
                                        <ul style={{ paddingLeft: '20px' }}>
                                            <li>Carry a reusable water bottle</li>
                                            <li>Set reminders throughout the day</li>
                                            <li>Flavor water with fresh fruits</li>
                                            <li>Eat water-rich foods</li>
                                            <li>Limit dehydrating beverages</li>
                                        </ul>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    border: `1px solid ${secondaryColor}`,
                                    borderRadius: 2,
                                    padding: 3,
                                    height: '100%',
                                    backgroundColor: 'white'
                                }}>
                                    <Typography variant="h5" sx={{ color: primaryColor, mb: 2, fontWeight: 'bold' }}>
                                        Our Solutions
                                    </Typography>
                                    <Typography component="div">
                                        <ul style={{ paddingLeft: '20px' }}>
                                            <li>Home filtration systems</li>
                                            <li>Portable water filters</li>
                                            <li>Hydration tracking apps</li>
                                            <li>Water quality testing</li>
                                            <li>Sustainable practices</li>
                                        </ul>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <Button
                                variant="contained"
                                onClick={() => navigate('/personal-products')}
                                sx={{
                                    backgroundColor: secondaryColor,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '10px 30px',
                                    '&:hover': {
                                        backgroundColor: primaryColor
                                    }
                                }}
                            >
                                Explore Our Products
                            </Button>

                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default Blog;
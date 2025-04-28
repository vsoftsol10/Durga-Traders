import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import BestSellOne from '../assets/bestseller1.png';
import BestSellTwo from '../assets/bestseller3.png';
import BestSellThree from '../assets/bestseller4.png';
import BestSellFour from '../assets/bestseller2.png';
// import BookDemo from '../assets/Book demo icon.png';

// Styled components
const ProductCard = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.31)', // stronger shadow
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)', // deeper on hover
    },
}));


const BookDemoBadge = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#022279', // Dark blue color from your screenshot
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    zIndex: 1,
}));

const ProductImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '250px',
    objectFit: 'contain',
    marginBottom: '20px',
}));

const ModelName = styled(Typography)(({ theme }) => ({
    color: '#0066cc', // Blue color from your screenshot
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '8px',
}));

const Description = styled(Typography)(({ theme }) => ({
    color: '#333',
    fontSize: '0.9rem',
    marginBottom: '20px',
}));

// const AddToCartButton = styled(Button)(({ theme }) => ({
//     backgroundColor: '#ffed00', // Yellow color from your screenshot
//     color: '#000',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     textTransform: 'none',
//     fontWeight: 'bold',
//     '&:hover': {
//         backgroundColor: '#e6d500',
//     },
// }));

const MoreDetailsButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#00247d', // Dark blue color from your screenshot
    color: 'white',
    borderRadius: '20px',
    padding: '8px 16px',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#022279',
    },
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
    gap: '10px',
}));

// Sample product data
const products = [
    {
        id: 1,
        name: 'DT-Cleanwater',
        image: BestSellOne,
        description: 'RO+UV+UF 8 Stage Purification...',
    },
    {
        id: 2,
        name: 'DT-Roma',
        image: BestSellTwo,
        description: 'RO+UV+UF 8 Stage Purification...',
    },
    {
        id: 3,
        name: 'DT-AquaTouch',
        image: BestSellThree,
        description: 'RO+UV+UF 8 Stage Purification...',
    },
    {
        id: 4,
        name: 'DT-WaterLily',
        image: BestSellFour,
        description: 'RO+UV+UF 8 Stage Purification...',
    },
];

const BestSellingProducts = () => {
    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                fontWeight="bold"
                sx={{
                    mb: 6,
                    position: 'relative',
                    color: '#022279',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 60,
                        height: 4,
                        borderRadius: 4,
                    },
                }}
            >
                Best Selling Products
            </Typography>

            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                gap={4}
            >
                {products.map((product) => (
                    <Box key={product.id} width={{ xs: '100%', sm: '48%', md: '23%' }}>
                        <ProductCard>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <BookDemoBadge>
                                    <Typography variant="caption" fontWeight="bold">BOOK</Typography>
                                    <Typography variant="caption">DEMO</Typography>
                                </BookDemoBadge>
                            </Link>

                            <ProductImage
                                src={product.image}
                                alt={product.name}
                            />

                            <Box>
                                <ModelName variant="h6">
                                    {product.name}
                                </ModelName>

                                <Description variant="body2">
                                    {product.description}
                                </Description>
                            </Box>

                            <ButtonsContainer>
                                {/* <AddToCartButton
                                    variant="contained"
                                    startIcon={<ShoppingCartIcon />}
                                >
                                    Add to cart
                                </AddToCartButton> */}
 <Link to="/personal-products" style={{ textDecoration: 'none' }}>
 
                                <MoreDetailsButton
                                    variant="contained"
                                >
                                    More Details
                                </MoreDetailsButton>
 </Link>
                            </ButtonsContainer>
                        </ProductCard>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default BestSellingProducts;
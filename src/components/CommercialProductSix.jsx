import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Typography, Box, Button, Breadcrumbs, Link,
    Card, CardMedia, Divider, Paper, Grid, Table, TableBody,
    TableCell, TableContainer, TableRow, Rating, Stack
} from '@mui/material';
import CommercialSeven from '../assets/CommercialSeven.jpeg';

const CommercialProductSix = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(4.5); // optional product rating

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        <Link href="/" underline="hover" color="inherit" key="home">
            Home
        </Link>,
        <Link href="/commercial-products" underline="hover" color="inherit" key="products">
            Commercial Products
        </Link>,
        <Typography key="product-detail">DT-100 CLOSED</Typography>
    ];

    const specifications = [
        { name: "Product Code", value: "21C1AMO" },
        { name: "MODEL", value: "DT-100 CLOSED" },
        { name: "CATEGORY", value: "COMMERCIAL SYSTEM" },
        { name: "TECHNOLOGY", value: "REVERSE OSMOSIS SYSTEM" },
        { name: 'FILTER HOUSING 20"', value: "3 NOS" },
        { name: "FILTER", value: "3 NOS" },
        { name: "HIGH PRESSURE PUMP", value: "CRI CLaRO 150 (1.5 HP) / ALGO -1.5HP" },
        { name: "MEMBRANE HOUSING", value: "4021 FRP (UKL)" },
        { name: "INPUT VOLTAGE", value: "230 VOLT" },
        { name: "LPS", value: "1 NO (DANFOSS)" },
        { name: "PRESSURE GAUGE", value: "1 NO" },
        { name: "FLOW METER", value: "1 NO" },
        { name: "PIPE LINE", value: "CPVC" },
        { name: "SKID DIMENSION", value: '18" × 40" × 45"' },
        { name: "SKID", value: "MS CLOSED" },
        { name: "MEMBRANE", value: "4021 - 2 NOS (HJC)" },
        { name: "RAW WATER PUMP", value: "0.5HP" },
        { name: "TYPE", value: "AUTOMATIC" },
        { name: "FLOAT", value: "1 NO" },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Breadcrumbs */}
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Breadcrumbs separator="››" sx={{ justifyContent: 'center' }}>
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>

            {/* Back Button */}
            <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/commercial-products')}
                >
                    Back to Products
                </Button>
            </Box>

            <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" color="#0277bd" sx={{ mb: 3 }}>
                    DT-100 CLOSED
                </Typography>

                {/* Layout: Image left | Specs right */}
                <Grid container spacing={4} sx={{ mb: 4, justifyContent: 'center' }}>
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={CommercialSeven}
                                alt="DT-100 CLOSED"
                                sx={{ height: 300, objectFit: 'cover' }}
                            />
                        </Card>

                        {/* Product Rating */}
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                <Typography variant="subtitle1" fontWeight="medium">
                                    Product Rating:
                                </Typography>
                                <Rating
                                    name="product-rating"
                                    value={value}
                                    precision={0.1}
                                    onChange={(event, newValue) => setValue(newValue)}
                                />
                                <Typography variant="body2" color="text.secondary">
                                    ({value} out of 5)
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right Side: Specifications Table */}
                    <Grid item xs={12} md={7}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            SPECIFICATIONS
                        </Typography>

                        <TableContainer component={Paper} variant="outlined">
                            <Table size="small">
                                <TableBody>
                                    {specifications.map((spec, idx) => (
                                        <TableRow key={idx} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                                            <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>{spec.name}</TableCell>
                                            <TableCell>{spec.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                {/* Product Description + Features + CTA */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Product Code: 21C1AMO
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                        The DT-100 CLOSED is a high-capacity reverse osmosis system designed for commercial applications. It offers superior filtration, ideal for medium to large commercial establishments that require purified water with a daily production capacity of 5000 liters.
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Key Features:
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, textAlign: 'left', marginX: 'auto', maxWidth: 400 }}>
                        <Typography component="li" sx={{ mb: 1 }}>
                            Fully automatic operation with digital controls
                        </Typography>
                        <Typography component="li" sx={{ mb: 1 }}>
                            Advanced 6-stage filtration with mineral enhancement
                        </Typography>
                        <Typography component="li" sx={{ mb: 1 }}>
                            Dual flush technology for membrane longevity
                        </Typography>
                        <Typography component="li" sx={{ mb: 1 }}>
                            Space-saving closed MS skid design for easier installation
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />
                    <Box textAlign="center">
                        <Button
                            variant="contained"
                            href="https://wa.me/917094310049"
                            sx={{
                                backgroundColor: '#0277bd',
                                '&:hover': {
                                    backgroundColor: '#01579b'
                                },
                                py: 1.5,
                                px: 4
                            }}
                        >
                            Contact for Pricing
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default CommercialProductSix;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Typography, Box, Button, Breadcrumbs, Link,
    Card, CardMedia, Divider, Paper, Grid, Table, TableBody,
    TableCell, TableContainer, TableRow, Rating, Stack
} from '@mui/material';
import CommercialSix from '../assets/CommercialSix.jpeg';

const CommercialProductFive = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(4.5);

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
        <Typography key="product-detail">DT-5000 AUTO</Typography>
    ];

    const specifications = [
        { name: "MODEL", value: "DT-5000 AUTO" },
        { name: "Product Code", value: "25K1AMO" },
        { name: "SPECIFICATION FOR INDUSTRIAL SYSTEM", value: "MODEL: 5000 LPH SS CLASSIC AUTO" },
        { name: "PANEL", value: "ASTERO" },
        { name: "PANEL MODEL", value: "RO ASTERO (3-3) NXT-7.5HP" },
        { name: "INPUT VOLTAGE", value: "430 VOLT AC (50Hz)" },
        { name: "MEMBRANE", value: "OTAYO BW -8040 MEMBRANE (5 NOS)" },
        { name: "PUMP", value: "CRI MVC- 10/16TR (7.5 HP) - III PHASE" },
        { name: "VESSEL", value: "FRP VESSEL / 3072 FRB - 2 NOS (TATA)" },
        { name: "MEMBRANE HOUSING", value: "80120 - 1 NO & 8080 - 1 NO (UKL MAKE)" },
        { name: "FILTER HOUSING", value: "UPVC 30\" X 5 – 1 NO" },
        { name: "FILTER", value: "5 NOS 30\" X 2.5\" WOUND" },
        { name: "4\" DISTRIBUTION SET", value: "2 NOS" },
        { name: "HUB & LATERAL", value: "175MM – 2 NOS" },
        { name: "MULTIPORT VALVE", value: "50 NB – SFV – 2 NOS (UKL MAKE)" },
        { name: "PEBBLES", value: "11 BAG" },
        { name: "SILEX", value: "12 BAG" },
        { name: "CARBON", value: "150 KG" },
        { name: "LPS", value: "1 NO (DANFOSS)" },
        { name: "HPS", value: "1 NO (DANFOSS)" },
        { name: "PRESSURE GUAGE", value: "3 NOS" },
        { name: "FLOW METER", value: "2 NOS (UKL)" },
        { name: "FLOAT", value: "1 NO" },
        { name: "PIPE LINE", value: "UPVC / CPVC (SS PIPE LINE OPTION NOT INCLUDED)" },
        { name: "SKID", value: "SS" },
        { name: "SKID DIMENSION", value: `60" (H) x 84" (W) x 28" (L)` },
        { name: "RAW WATER PUMP", value: "5.0 HP – 1 NO" },
        { name: "DOSING PUMP", value: "UKL / E DOSE / I DOSE" },
        { name: "ANTISCALANT", value: "GENESYS LS" },
        { name: "UV", value: "OPTION NOT INCLUDED (PLASMA)" },
        { name: "TECHNOLOGY", value: "REVERSE OSMOSIS SYSTEM" },
        { name: "APPLICATION", value: "SUITABLE FOR PURIFICATION OF BRACKISH WATER" },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Breadcrumbs */}
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Breadcrumbs separator="››" sx={{ justifyContent: 'center', display: 'flex' }}>
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>

            {/* Back Button */}
            <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Button variant="outlined" onClick={() => navigate('/commercial-products')}>
                    Back to Products
                </Button>
            </Box>

            {/* Main Product Content */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="bold" color="#0277bd" sx={{ mb: 3 }}>
                        DT-5000 AUTO
                    </Typography>

                    {/* Image + Rating + Specs Side by Side */}
                    <Grid container spacing={4} justifyContent="center" alignItems="flex-start" sx={{ mb: 4 }}>
                        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={CommercialSix}
                                    alt="DT-5000 AUTO"
                                    sx={{
                                        height: 300,
                                        objectFit: 'cover',
                                    }}
                                />
                            </Card>

                            <Box sx={{ mt: 2 }}>
                                <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        Product Rating:
                                    </Typography>
                                    <Rating
                                        name="product-rating"
                                        value={value}
                                        precision={0.5}
                                        onChange={(event, newValue) => setValue(newValue)}
                                    />
                                    <Typography variant="body2" color="text.secondary">
                                        ({value} out of 5)
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                SPECIFICATIONS
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableContainer component={Paper} variant="outlined" sx={{ maxWidth: 600 }}>
                                    <Table size="small">
                                        <TableBody>
                                            {specifications.map((spec, index) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}
                                                >
                                                    <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>
                                                        {spec.name}
                                                    </TableCell>
                                                    <TableCell>{spec.value}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Description + Features + CTA */}
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Product Code: 25K1AMO
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            The DT-5000 AUTO is a high-output reverse osmosis system engineered for industrial-scale operations.
                            Designed to purify brackish water at a rate of 5000 LPH, it’s perfect for factories, hospitals,
                            and other high-demand applications.
                        </Typography>

                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Key Features:
                        </Typography>

                        <Box component="ul" sx={{ pl: 2, textAlign: 'left', display: 'inline-block' }}>
                            <Typography component="li" sx={{ mb: 1 }}>
                                High-capacity output with 5 membrane units
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Digital automatic control system (ASTERO panel)
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Durable stainless steel skid construction
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Suitable for large-scale, continuous operations
                            </Typography>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box textAlign="center">
                            <Button
                                variant="contained"
                                href="https://wa.me/917094310049"
                                sx={{
                                    backgroundColor: '#0277bd',
                                    '&:hover': { backgroundColor: '#01579b' },
                                    py: 1.5,
                                    px: 4
                                }}
                            >
                                Contact for Pricing
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default CommercialProductFive;

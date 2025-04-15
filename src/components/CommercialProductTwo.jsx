import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Typography, Box, Button, Breadcrumbs, Link,
    Card, CardMedia, Divider, Paper, Grid, Table, TableBody,
    TableCell, TableContainer, TableRow, Rating, Stack
} from '@mui/material';
import CommercialTwo from '../assets/CommercialTwo.jpeg';

const CommercialProductTwo = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(4.5);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        <Link href="/" underline="hover" color="inherit" key="home">Home</Link>,
        <Link href="/commercial-products" underline="hover" color="inherit" key="products">Commercial Products</Link>,
        <Typography key="product-detail">DT-500 AUTO</Typography>
    ];

    const specifications = [
        { name: "MODEL", value: "DT-500 AUTO" },
        { name: "Product Code", value: "2501AMO" },
        { name: "INPUT VOLTAGE", value: "230 VOLT AC (50Hz)" },
        { name: "PANEL MODEL", value: "RO PLUS (1-1)" },
        { name: "MEMBRANE", value: "HJC BW -4040 MEMBRANE (2 NOS)" },
        { name: "PUMP", value: "CRI MTC-2E/15SR (2.0 HP) - I PHASE" },
        { name: "PANEL", value: "INITIATIVE" },
        { name: "VESSEL", value: "1248 - 2 NO (TATA STEEL)" },
        { name: "MULTIPORT VALVE", value: "25 NB - TMF - 2 NOS (UKL / INITIATIVE)" },
        { name: "PEBBLES", value: "1 BAG" },
        { name: "SILEX", value: "2 BAG" },
        { name: "CARBON", value: "25 KG" },
        { name: 'FILTER HOUSING 20"', value: "2 NOS" },
        { name: "FILTER", value: "2 NOS (PLASMA)" },
        { name: "MEMBRANE HOUSING", value: "4040 - 2 NOS (UKL)" },
        { name: "LPS", value: "1 NO (Danfoss)" },
        { name: "HPS", value: "1 NO (Danfoss)" },
        { name: "PRESSURE GUAGE", value: "2 NOS" },
        { name: "FLOW METER", value: "2 NOS (UKL)" },
        { name: "SV", value: "1 NO" },
        { name: "FLOAT", value: "1 NO" },
        { name: "PIPE LINE", value: "CPVC / UPVC" },
        { name: "RAW WATER PUMP", value: "CRI / GENVIK 1.0 HP" },
        { name: "DOSING PUMP", value: "UKL / E DOSE" },
        { name: "ANTISCALANT", value: "GENESYS LS" },
        { name: "UV", value: "OPTION NOT INCLUDED (PLASMA)" },
        { name: "TECHNOLOGY", value: "REVERSE OSMOSIS SYSTEM" },
        { name: "APPLICATION", value: "SUITABLE FOR PURIFICATION OF BRACKISH WATER" },
        { name: "SKID DIMENSION", value: '48" (H) x 42" (W) x 20" (L)' },
        { name: "SKID", value: "SS" }
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Breadcrumbs separator="››" sx={{ justifyContent: 'center', display: 'flex' }}>
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>

            <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Button variant="outlined" onClick={() => navigate('/commercial-products')}>
                    Back to Products
                </Button>
            </Box>

            <Box display="flex" justifyContent="center">
                <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, maxWidth: 1200, width: '100%', textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="bold" color="#0277bd" sx={{ mb: 3 }}>
                        DT-500 AUTO
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={CommercialTwo}
                                    alt="DT-500 AUTO"
                                    sx={{ height: 300, objectFit: 'cover' }}
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

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Product Code: 2501AMO
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            The DT-500 AUTO offers mid-range capacity for medium-sized establishments with higher water consumption needs. With 500 liters per day capacity, it's ideal for restaurants, cafes and small businesses.
                        </Typography>

                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Key Features:
                        </Typography>

                        <Box component="ul" sx={{ pl: 2, textAlign: 'left', display: 'inline-block' }}>
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
                                Wall-mountable or free-standing installation options
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

export default CommercialProductTwo;

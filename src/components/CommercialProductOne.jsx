import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, Typography, Box, Button, Breadcrumbs, Link, 
  Card, CardMedia, Divider, Paper, Grid, Table, TableBody,
  TableCell, TableContainer, TableRow, Rating, Stack
} from '@mui/material';
import CommercialOne from '../assets/CommercialOne.jpeg';

const CommercialProductOne = () => {
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
        <Typography key="product-detail">DT-250 AUTO</Typography>
    ];

    const specifications = [
        { name: "MODEL", value: "DT-250 AUTO" },
        { name: "Product Code", value: "2251AMO" },
        { name: "INPUT VOLTAGE", value: "230 VOLT AC (50Hz)" },
        { name: "PANEL MODEL", value: "RO BASIC (1-1) - 2.0HP" },
        { name: "MEMBRANE", value: "OTAYO BW -4040 MEMBRANE" },
        { name: "PUMP", value: "CRI MTP-2E/10SR (1.5HP) - I PHASE" },
        { name: "PANEL", value: "INITIATIVE" },
        { name: "VESSEL", value: "1248 - 1 NO (TATA STEEL)" },
        { name: "MULTIPORT VALVE", value: "25 NB - TMF - 1 NO (UKL / INITIATIVE)" },
        { name: "PEBBLES", value: "1 BAG" },
        { name: "SILEX", value: "1 BAG" },
        { name: "CARBON", value: "10 KG" },
        { name: 'FILTER HOUSING 20"', value: "2 NOS" },
        { name: "FILTER", value: "2 NOS" },
        { name: "MEMBRANE HOUSING", value: "4040 - 1 NO (UKL)" },
        { name: "LPS", value: "1 NO (Danfoss)" },
        { name: "PRESSURE GUAGE", value: "2 NOS" },
        { name: "FLOW METER", value: "2 NOS (UKL)" },
        { name: "SV", value: "1 NO" },
        { name: "FLOAT", value: "1 NO" },
        { name: "PIPE LINE", value: "CPVC / UPVC" },
        { name: "RAW WATER PUMP", value: "CRI / GENVIK 0.5HP" },
        { name: "DOSING PUMP", value: "UKL / E DOSE" },
        { name: "ANTISCALANT", value: "Genesys LS" },
        { name: "UV", value: "OPTION NOT INCLUDED (PLASMA)" },
        { name: "TYPE", value: "AUTO" },
        { name: "TECHNOLOGY", value: "REVERSE OSMOSIS SYSTEM" },
        { name: "APPLICATION", value: "SUITABLE FOR PURIFICATION OF BRACKISH WATER" },
        { name: "SKID DIMENSION", value: '48" (H) x 42" (W) x 20" (L)' },
        { name: "SKID", value: "SS" }
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

            {/* Main Content Card Centered */}
            <Box display="flex" justifyContent="center">
                <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, maxWidth: 1200, width: '100%', textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="bold" color="#0277bd" sx={{ mb: 3 }}>
                        DT-250 AUTO
                    </Typography>

                    {/* Image + Specs */}
                    <Grid container spacing={4} justifyContent="center">
                        {/* Image + Rating */}
                        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={CommercialOne}
                                    alt="DT-250 AUTO"
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

                        {/* Specs Table */}
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

                    {/* Description and Features */}
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Product Code: 2251AMO
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            The DT-250 AUTO is our entry-level commercial RO system with 250 liters per day capacity,
                            perfect for small offices and retail spaces.
                        </Typography>

                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Key Features:
                        </Typography>

                        <Box component="ul" sx={{ pl: 2, textAlign: 'left', display: 'inline-block' }}>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Fully automatic operation
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Advanced 5-stage filtration
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Smart controller with auto-flush system
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Compact design for space-saving installation
                            </Typography>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        {/* CTA Button Centered */}
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

export default CommercialProductOne;

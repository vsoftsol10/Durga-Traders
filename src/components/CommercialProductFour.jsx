import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, Typography, Box, Button, Breadcrumbs, Link, 
  Card, CardMedia, Divider, Paper, Grid, Table, TableBody,
  TableCell, TableContainer, TableRow, Rating, Stack
} from '@mui/material';
import CommercialFive from '../assets/CommercialFive.jpeg';

const CommercialProductFour = () => {
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
        <Typography key="product-detail">DT-1000 AUTO</Typography>
    ];

    const specifications = [
        { name: "MODEL", value: "DT-1000 AUTO" },
        { name: "Product Code", value: "21K1AMO" },
        { name: "SPECIFICATION FOR INDUSTRIAL SYSTEM", value: "MODEL: 1000 LPH SS COMFORT AUTO" },
        { name: "INPUT VOLTAGE", value: "230 VOLT AC (50Hz)" },
        { name: "PANEL MODEL", value: "RO PLUS (1-1)" },
        { name: "MEMBRANE", value: "OTAYO BW -8040 MEMBRANE" },
        { name: "PUMP", value: "CRI MVC- 2/18SR (3.0 HP) - I PHASE" },
        { name: "PANEL", value: "INITIATIVE" },
        { name: "VESSEL", value: "1354 - 2 NOS (TATA STEEL)" },
        { name: "MULTIPORT VALVE", value: "25 NB - TMF - 2 NOS (UKL / INITIATIVE)" },
        { name: "PEBBLES", value: "2 BAG" },
        { name: "SILEX", value: "2 BAG" },
        { name: "CARBON", value: "35 KG" },
        { name: 'JUMBO FILTER HOUSING 20"', value: "2 NOS" },
        { name: "FILTER", value: "2 NOS" },
        { name: "MEMBRANE HOUSING", value: "8040 - 1 NO (UKL)" },
        { name: "LPS", value: "1 NO (Danfoss)" },
        { name: "HPS", value: "1 NO (Danfoss)" },
        { name: "PRESSURE GUAGE", value: "2 NOS" },
        { name: "FLOW METER", value: "2 NOS (UKL)" },
        { name: "SV", value: "1 NO" },
        { name: "FLOAT", value: "1 NO" },
        { name: "PIPE LINE", value: "CPVC / UPVC" },
        { name: "RAW WATER PUMP", value: "CRI / GENVIK 1.0 HP - 1 NO" },
        { name: "DOSING PUMP", value: "UKL / E DOSE" },
        { name: "ANTISCALANT", value: "GENESYS LS" },
        { name: "UV", value: "OPTION NOT INCLUDED (PLASMA)" },
        { name: "TECHNOLOGY", value: "REVERSE OSMOSIS SYSTEM" },
        { name: "APPLICATION", value: "SUITABLE FOR PURIFICATION OF BRACKISH WATER" },
        { name: "SKID DIMENSION", value: `48" (H) x 42" (W) x 20" (L)` },
        { name: "SKID", value: "SS" }
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Breadcrumbs */}
            <Box sx={{ mb: 4 }}>
                <Breadcrumbs separator="››">
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>

            {/* Back Button */}
            <Box sx={{ mb: 3 }}>
                <Button 
                    variant="outlined"
                    onClick={() => navigate('/commercial-products')}
                >
                    Back to Products
                </Button>
            </Box>

            {/* Product Info */}
            <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h4" fontWeight="bold" color="#0277bd" sx={{ mb: 3 }}>
                    DT-1000 AUTO
                </Typography>

                <Grid container spacing={4} sx={{ mb: 4 }}>
                    {/* Product Image and Rating */}
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={CommercialFive}
                                alt="DT-1000 AUTO"
                                sx={{ 
                                    height: 300,
                                    objectFit: 'cover',
                                }}
                            />
                        </Card>

                        <Box sx={{ mt: 2 }}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography variant="subtitle1" fontWeight="medium">
                                    Product Rating:
                                </Typography>
                                <Rating
                                    name="product-rating"
                                    value={value}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <Typography variant="body2" color="text.secondary">
                                    ({value} out of 5)
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Specifications Table */}
                    <Grid item xs={12} md={7}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            SPECIFICATIONS
                        </Typography>
                        
                        <TableContainer component={Paper} variant="outlined">
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
                    </Grid>
                </Grid>

                {/* Description and CTA */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Product Code: 21K1AMO
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                        The DT-1000 AUTO is an ideal solution for mid-range industrial water purification requirements. It's designed to handle higher volumes with precision and efficiency, tailored for brackish water treatment needs.
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Key Features:
                    </Typography>

                    <Box component="ul" sx={{ pl: 2 }}>
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
            </Paper>
        </Container>
    );
};

export default CommercialProductFour;

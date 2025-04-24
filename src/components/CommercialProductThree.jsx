import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Typography, Box, Button, Breadcrumbs, Link,
    Card, CardMedia, Divider, Paper, Grid, Table, TableBody,
    TableCell, TableContainer, TableRow, Rating, Stack
} from '@mui/material';
import CommercialFour from '../assets/CommercialFour.jpeg';

const CommercialProductThree = () => {
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
        <Typography key="product-detail">DT-2000 AUTO</Typography>
    ];

    const specifications = [
        { name: "MODEL", value: "DT-2000 AUTO" },
        { name: "Product Code", value: "22K1AMO" },
        { name: "SPECIFICATION FOR INDUSTRIAL SYSTEM", value: "MODEL: 2000 LPH SS CLASSIC AUTO" },
        { name: "INPUT VOLTAGE", value: "430 VOLT AC (50Hz)" },
        { name: "APPLICATION", value: "SUITABLE FOR PURIFICATION OF BRACKISH WATER" },
        { name: "MEMBRANE", value: "OTAYO BW -8040 MEMBRANE (2 NOS)" },
        { name: "PUMP", value: "CRI MVC- 4E/16TR (4.0 HP) - III PHASE" },
        { name: "PANEL", value: "INITIATIVE" },
        { name: "VESSEL", value: "1665- 2 NOS ( TATA STEEL )" },
        { name: "MULTIPORT VALVE", value: "40 NB- SMF- 2 NOS (UKL / INITIATIVE)" },
        { name: "PEBBLES", value: "3 BAG" },
        { name: "SILEX", value: "3 BAG" },
        { name: "CARBON", value: "50 KG" },
        { name: 'JUMBO FILTER HOUSING 20"', value: "2 NOS" },
        { name: "FILTER", value: "2 NOS" },
        { name: "MEMBRANE HOUSING", value: "8040 - 2 NO (UKL )" },
        { name: "LPS", value: "1 NO (Danfoss)" },
        { name: "HPS", value: "1 NO (Danfoss)" },
        { name: "PRESSURE GUAGE", value: "3 NOS" },
        { name: "FLOW METER", value: "2 NOS (UKL)" },
        { name: "PIPE LINE", value: "CPVC / UPVC" },
        { name: "RAW WATER PUMP", value: "CRI/ TEXMO 2.0HP- 1 NO" },
        { name: "DOSING PUMP", value: "UKL/ E DOSE/I DOSE" },
        { name: "ANTISCALANT", value: "GENESYS LS" },
        { name: "UV", value: "OPTION NOT INCLUDED (PLASMA)" },
        { name: "FLOAT", value: "1 NO" },
        { name: "TECHNOLOGY", value: "REVERSE OSMOSIS SYSTEM" },
        { name: "SKID DIMENSION", value: `60" (H) x 71" (W) x 24" (L)` },
        { name: "SKID", value: "SS" }
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Breadcrumbs separator="››" sx={{ justifyContent: 'center' }}>
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>

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
                    DT-2000 AUTO
                </Typography>

                <Grid container spacing={4} sx={{ mb: 4, justifyContent: 'center' }}>
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={CommercialFour}
                                alt="DT-2000 AUTO"
                                sx={{ height: 300, objectFit: 'cover' }}
                            />
                        </Card>

                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
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
                                            sx={{
                                                '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' }
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    width: '40%',
                                                    borderBottom: '1px solid rgba(224, 224, 224, 1)'
                                                }}
                                            >
                                                {spec.name}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    borderBottom: '1px solid rgba(224, 224, 224, 1)'
                                                }}
                                            >
                                                {spec.value}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Product Code: 22K1AMO
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                        The DT-2000 AUTO offers industrial-grade capacity for high-demand water purification systems. It's the perfect solution for large establishments requiring consistent and efficient brackish water treatment.
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

export default CommercialProductThree;

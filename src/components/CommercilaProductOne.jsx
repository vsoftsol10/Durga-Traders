import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';


const CommercilaProductOne = () => {
    const { id } = useParams();
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="bold">Product Details</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                Showing details for product ID: {id}
            </Typography>
            {/* You can now fetch or show product info using this ID */}
        </Container>
    );
};

export default CommercilaProductOne
import React from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container spacing={4} justifyContent="space-between">
        
        {/* Logo and Social Icons Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" component="h3" gutterBottom className="footer-title">
            Durga Traders
          </Typography>
          <Box>
            <ul className="footer-social-icons">
              <li>
                <FacebookIcon className="footer-icon" />
              </li>
              <li>
                <InstagramIcon className="footer-icon" />
              </li>
              <li>
                <YouTubeIcon className="footer-icon" />
              </li>
            </ul>
          </Box>
        </Grid>

        {/* Main Works Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" gutterBottom className="footer-subtitle">
            Main Works
          </Typography>
          <Box>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Reserve Osmosis</a></li>
              <li><a href="#" className="footer-link">SeaWater Desalination</a></li>
              <li><a href="#" className="footer-link">Surface Water Treatment</a></li>
              <li><a href="#" className="footer-link">Water Softening System</a></li>
              <li><a href="#" className="footer-link">Iron Removal</a></li>
              <li><a href="#" className="footer-link">DM Plant</a></li>
              <li><a href="#" className="footer-link">STP Services</a></li>
              <li><a href="#" className="footer-link">ETP Services</a></li>
              <li><a href="#" className="footer-link">Dispenser Services</a></li>
            </ul>
          </Box>
        </Grid>

        {/* Quick Link Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" gutterBottom className="footer-subtitle">
            Quick Link
          </Typography>
          <Box>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Personal Products</a></li>
              <li><a href="#" className="footer-link">Commercial Products</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </Box>
        </Grid>

       
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" gutterBottom className="footer-subtitle">
            Get In Touch
          </Typography>
          <Button variant="contained" color="secondary" className="footer-button">
            Enquiry: 0452 2371049
          </Button>
          <Box marginTop="1rem">
            <Typography variant="body2" className="footer-address">
              60-D, Thangavel Complex, Tiruparankundram Road, Vasantha Nagar, Madurai - 625003
            </Typography>
            <ul className="footer-contact">
              <li>Email : <a href="mailto:durgatradersmdu@gmail.com" className="footer-link">durgatradersmdu@gmail.com</a></li>
              <li>Phone : 0452 2371049</li>
              <li>Mobile : +91 70943 10049</li>
              <li>WhatsApp : +91 70944 99037</li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

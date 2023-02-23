import { Facebook } from '@mui/icons-material';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import footer from '../../../images/footer-bg.png'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerBg = {
    background: `url(${footer})`,
    gap: "80px",
    marginTop: '20px'
}

const Footer = () => {
    return (
        <Container>
            <Grid style={footerBg} container sx={{ textAlign: "left" }}>
                <Box>
                    <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of Personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Good DOctors</Typography>
                </Box>
                <Box>
                    <Typography variant="h7" sx={{ color: 'info.main', fontWeight: 700, mb: 2 }}>Services</Typography>
                    <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of Personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Good DOctors</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Good DOctors</Typography>
                </Box>
                <Box>
                    <Typography variant="h7" sx={{ color: 'info.main', fontWeight: 700, mb: 2 }}>Oral Health</Typography>
                    <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of Personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Good DOctors</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Good DOctors</Typography>
                </Box>
                <Box>
                    <Typography variant="h7" sx={{ color: 'info.main', fontWeight: 700, mb: 2 }}>Our Adress</Typography>
                    <Typography>Gata kholi-879 Kainar Chala</Typography>
                    <Typography>Bangladesh</Typography>
                    <Typography><Facebook></Facebook> <GoogleIcon/><TwitterIcon/> </Typography>
                    <Typography sx={{ mt: 5 }}>Call Now</Typography>
                    <Button  sx={{mb:3}} variant="contained"
                        style={{ backgroundColor:"#5CE7ED"}}
                        >+4876957</Button>
                </Box>


            </Grid>
            <Typography sx={{color:"gray",fontWeight:400,mt:2}}>Copyright 2021 All Right Reserved</Typography>
        </Container >
    );
};

export default Footer;
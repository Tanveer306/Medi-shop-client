import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`,
    marginTop:30
}
const verticalCenter = {
    display: "flex",
    height: 400,
    alignItems: "center"
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter,textAlign: "left" }} item xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Your new smile <br />
                            Start here
                        </Typography>
                        <Typography variant="h6" sx={{ my:4,fontSize: 15, color: "gray", fontWeight: 300 }}>
                            Take some treatment Take some treatment Take some treatmentTake some treatment
                            Take some treatmentTake some treatment Take some treatment Take some treatment Take some treatment Take some treatmentTake some treatment
                            Take some treatmentTake some treatment Take some treatment
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>Get Appointment</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img src={chair} alt=""
                        style={{ width: '350px' }}
                    />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45,58,74,.9)",
    backgroundBlendMode: "darken,luminosity",
    marginTop: '20px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '400px', marginTop: "-110px" }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: "flex", justifyContent: "flex-start",
                    textAlign: "left",
                    alignItems: "center"
                }}>
                    <Box>
                        <Typography variant="h6" sx={{mb:5}}
                            style={{ color: "#5CE7ED" }}
                        >
                            Appointment
                        </Typography>
                        <Typography variant="h4"
                            style={{ color: "white" }}
                           
                        >
                            Make An Appointment
                        </Typography>
                        <Typography variant="h6"
                            style={{ color: "white" }}
                            sx={{my:5}}
                        >
                            Make An Appointment Make An Appointment Make An Appointment
                            Make An Appointment Make An Appointment Make An Appointment
                        </Typography>
                        <Button  sx={{mb:3}} variant="contained"
                        style={{ backgroundColor:"#5CE7ED"}}
                        >Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
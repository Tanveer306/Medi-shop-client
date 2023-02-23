import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png'

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45,58,74,.9)",
    backgroundBlendMode: "darken,luminosity",
    marginTop: '150px'
}

const Contact = () => {
    return (
        <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1, p: 5, mb: 5 }}>
                <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 700 }}>
                    CONTACT US
                </Typography>
                <Typography variant="h4" sx={{ color: "white", fontWeight: 500 }}>
                    Always Connect with us
                </Typography>
                <form sx={{p:5}}>
                    <TextField
                        required
                        sx={{ width: "90%", backgroundColor: "white", }}
                        id="outlined-size-small"
                        defaultValue="Email address"
                        size="small"
                    />
                    <TextField
                        required
                        sx={{ width: "90%", backgroundColor: "white",my:2 }}
                        id="outlined-size-small"
                        defaultValue="Subject"
                        size="small"
                    />
                    <TextField
                        required
                        sx={{ width: "90%", backgroundColor: "white", }}
                        multiline
                        maxRows={100}
                        id="outlined-size-small"
                        defaultValue="Your message"
                        size="small"
                    /> <br />
                  
                        <Button  sx={{mt:3}} variant="contained"
                        style={{ backgroundColor:"#5CE7ED"}}
                        >Submit</Button>
                </form>

            </Box>
        </Container>
    );
};


export default Contact;
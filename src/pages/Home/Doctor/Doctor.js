import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Doctor = ({ doctor }) => {
    const { img, name, phone } = doctor
    return (
      
           <>
          
            <Grid item xs={12} md={4} sx={{ display:"flex",my: 5, p: 3 }}>
                <Box>
                    <img src={img} width={300} alt="" />
                    <Typography variant="h6" sx={{ color: 'text.primary',fontWeight:600 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6">
                       <LocalPhoneIcon sx={{ color: 'primary.main',textAlign:"center" }}></LocalPhoneIcon> {phone}
                    </Typography>
                </Box>

            </Grid>
           </>
      
    );
};

export default Doctor;
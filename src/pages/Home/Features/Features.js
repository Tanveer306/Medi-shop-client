import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'


const Features = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"right",p:5}}>
                    <img src={treatment} style={{ width: "300px" }} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: "flex", justifyContent: "flex-start",
                    textAlign: "left",
                    alignItems: "center"
                }} >
                    <Box>
                        <Typography variant="h4" sx={{ mb: 5, fontWeight: 600 }} >
                            Exceptional Dental <br />
                            Care,on Your Terms
                        </Typography>
                        <Typography variant="h7" sx={{ color: "gray", }}>
                            A society is a group of individuals involved in persistent social interaction,
                            or a large social group sharing the same spatial or social territory,
                            typically subject to the same political authority and dominant cultural expectations.
                            A society is a group of individuals involved in persistent social interaction,
                            or a large social group sharing the same spatial or social territory,
                            typically subject to the same political authority and dominant cultural expectations.
                        </Typography>
                        <Typography sx={{ mt: 5 }}>
                            <Button variant="contained">Learn More</Button>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Features;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Fluoride from '../../../images/fluoride.png'
import Cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';


const Services = () => {
    const services = [
        {
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
            img: Fluoride
        },
        {
            name: "Cavity Filling",
            description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
            img: Cavity
        },
        {
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
            img: Whitening
        }
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 500,m:2,color: 'info.main' }} variant="h6" component="div">
                Our Services
            </Typography>
            <Typography sx={{ fontWeight: 600,m:4 }} variant="h4" component="div">
                Services We Provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
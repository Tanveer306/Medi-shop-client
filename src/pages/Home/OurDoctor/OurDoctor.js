import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doc from "../../../images/doctor-small.png"
import Doctor from '../Doctor/Doctor';

const doctors = [{
    img:doc,
    name:"Dr. Stefen Rogers",
    phone:"01214545"
},
{
    img:doc,
    name:"Dr. Koilas Sharma",
    phone:"95866255"
},{
    img:doc,
    name:"Dr. Robert Dawry John",
    phone:"475445788"
}

]
const OurDoctor = () => {
    return (
        <Container>
             <Typography variant="h5" sx={{color:'info.main',fontWeight:600}}>
               Our Doctors
           </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
            {
                doctors.map(doctor=><Doctor
                doctor={doctor}
                ></Doctor>)
            }

            </Grid>
        </Container>
    );
};

export default OurDoctor;
import { Box,  Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PatientReview from '../PatientReview/PatientReview';
import people1 from "../../../images/people-1.png"
import people2 from "../../../images/people-2.png"
import people3 from "../../../images/people-3.png"

const reviews = [{
    name: "John Wick",
    comment: "Very fantastic Very fantasticVery fantastic Very fantasticVery fantastic Very fantastic fantastic Very fantasticVery fantastic Very fantastic fantastic Very fantasticVery fantastic Very fantastic",
    location: "Calofornia",
    img: people1
},
{
    name: "Ema Watson",
    comment: "Very fantastic Very fantastic Very fantasticVery fantastic Very fantastic fantastic Very fantasticVery fantastic Very fantastic fantasticVery fantastic Very fantasticVery fantastic Very fantastic",
    location: "Totenham",
    img: people2
},
{
    name: "Stwart Kristan",
    comment: "Very fantastic Very fantasticVery fantastic Very fantastic Very fantasticVery fantastic Very fantastic fantastic Very fantasticVery fantastic Very fantasticfantasticVery fantastic Very fantastic",
    location: "Florida",
    img: people3
}
]

const Testimonial = () => {

    return (
        <Container>

            <Grid item sx={{
                mt: 5, display: "flex", justifyContent: "flex-start",
                textAlign: "left",
            }}>
                <Box >
                    <Typography variant="h7" sx={{ fontWeight: 700, color: 'info.main' }}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        What's our Patients <br /> Says
                    </Typography>
                </Box>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} >
                {
                    reviews.map(review =>
                        <PatientReview
                            review={review}
                        ></PatientReview>
                    )
                }
            </Grid>

        </Container>
    );
};

export default Testimonial;
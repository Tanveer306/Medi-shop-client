
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, Grid, Paper } from '@mui/material';


const PatientReview = ({ review }) => {

    const { name, comment, location, img } = review

    return (

        <Grid item xs={12} md={4} sx={{ my: 5, p: 3 }}>
            <Paper elevation={3} >

                <CardContent>
                    <Typography variant="body2" color="gray" sx={{ fontWeight: 600 }}>
                        {comment}
                    </Typography>
                </CardContent>

                <CardHeader
                    avatar={
                        <Avatar sx={{ p: 3 }} aria-label="recipe">
                            <img src={img} width={79} alt="" />
                        </Avatar>
                    }
                    title={
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }}>
                            {name}
                        </Typography>
                    }

                    subheader={<Typography sx={{ fontWeight: 500, fontSize: 15 }}>
                        {location}
                    </Typography>}
                />

            </Paper>
        </Grid>

    );
};

export default PatientReview;
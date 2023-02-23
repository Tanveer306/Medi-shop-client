import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from "../../../images/people-1.png"
import people2 from "../../../images/people-2.png"
import people3 from "../../../images/people-3.png"

const blogs = [{
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


const Blog = ({ blog }) => {
    const { name, comment, location, img } = blog
    return (

        <Grid item xs={12} md={4} sx={{ my: 5, p: 3 }}>
            <Box sx={{ minWidth: 275 }}>
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
                <CardContent>
                    <Typography variant="body2" color="gray" sx={{ fontWeight: 600 }}>
                        {comment}
                    </Typography>
                </CardContent>

            </Box>
        </Grid>

    );
};

export default Blog;
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from "../../../images/people-1.png"
import people2 from "../../../images/people-2.png"
import people3 from "../../../images/people-3.png"
import Blog from '../Blog/Blog';

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

const Blogs = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 700, m: 1, color: 'info.main' }} variant="h6" component="div">
                    OUR BLOG
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    From our blog news
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} >
                    {
                        blogs.map(blog =>
                            <Blog
                                blog={blog}
                            ></Blog>
                        )
                    }
                </Grid>

            </Box >
        </Container>
    );
};

export default Blogs;
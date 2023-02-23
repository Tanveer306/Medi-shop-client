import { Button, Grid, Paper, Typography } from '@mui/material';

import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking,date,setSuccessBooking }) => {
    const { name, time, space } = booking
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);
    return (

        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ fontWeight: 600, color: 'info.main' }} variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="h6">
                        {time}
                    </Typography>
                    <Typography variant="caption">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Typography>
                        <Button onClick={handleOpenBooking} variant='contained'>Book appointment</Button>
                    </Typography>
                </Paper>
            </Grid>
            <BookingModal
                openBooking={openBooking}
                handleCloseBooking={handleCloseBooking}
                booking={booking}
                date={date}
                setSuccessBooking={setSuccessBooking}
            >

            </BookingModal>
        </>

    );
};

export default Booking;
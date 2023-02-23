import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import { Alert, AlertTitle } from '@mui/material';
const AvailableAppointment = ({ date }) => {
    const [successBooking, setSuccessBooking] = useState(false);
    const bookings = [
        {
            id: 1,
            name: "Teeth Orthodontics",
            time: "8.00 AM - 9.00 AM",
            space: 10
        },
        {
            id: 2,
            name: "Cosmetic Dentistry",
            time: "2.00 AM - 3.00 AM",
            space: 3
        },
        {
            id: 3,
            name: "Teeth Cleaning",
            time: "5.00 AM - 8.00 AM",
            space: 4
        },
        {
            id: 4,
            name: "Cavity Protection",
            time: "3.00 AM - 4.00 AM",
            space: 9
        },
        {
            id: 5,
            name: "Teeth Orthodontics",
            time: "8.00 AM - 9.00 AM",
            space: 10
        },
        {
            id: 6,
            name: "Teeth Orthodontics",
            time: "11.00 AM - 12.00 AM",
            space: 6
        },
    ]

    return (
        <Container>
            <Typography sx={{ my: 3, fontSize: 30, color: 'info.main' }}>Available Appointment   {date.toDateString()}</Typography>

            {
                successBooking && <Alert severity="success">
                    <AlertTitle>Congrats</AlertTitle>
                    Booking <strong>Done Successfully!</strong>
                </Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setSuccessBooking={setSuccessBooking}
                    >

                    </Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { registerUser, isLoading, user, error } = useAuth()
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(field, newLoginData)
        setLoginData(newLoginData)
        e.preventDefault();
    }

    const handleRegisterSubmit = e => {

        e.preventDefault();
        console.log("Register e click kora hoyche")
        if (loginData.password !== loginData.password2) {
            alert("password didn't matched")
            return
        }
        const email = loginData.email
        const password = loginData.password
        const name = loginData.name
        console.log(email, password)
        registerUser(email, password,name,history)

    }

    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} sx={{ mt: 20 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 900, color: "orange" }}>
                        Register form
                    </Typography>

                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: "70%" }}
                            label="Your Name"
                            type="text"
                            name="name"
                            onBlur={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "70%" }}
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                        />

                        <TextField
                            sx={{ width: "70%", m: 1 }}
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            label="Enter Password"
                            variant="standard" />

                        <TextField
                            sx={{ width: "70%", m: 1 }}
                            type="password"
                            name="password2"
                            onBlur={handleOnChange}
                            label="Confirm Password"
                            variant="standard" />

                        <Button type="submit" variant="contained"
                            sx={{ color: "font.main", width: "70%" }}>
                            Register
                        </Button>
                    </form>}


                    <NavLink to='/login'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant="text" sx={{ m: 3 }}>Already Have account ? Login here</Button>
                    </NavLink>
                    {isLoading && <CircularProgress
                    />}

                    {user?.email && <Alert severity="success">
                        <AlertTitle>Congrats</AlertTitle>
                        Successfully <strong>Registered!</strong>
                    </Alert>}
                    {error &&
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            <strong>{error}</strong>
                        </Alert>
                    }

                </Grid>


            </Grid>
        </Container>
    );
};

export default Register;
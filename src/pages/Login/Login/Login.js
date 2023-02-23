import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { handleLogin, isLoading,signInWithGoogle } = useAuth()

    const [loginData, setLoginData] = useState({})

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        handleLogin(loginData.email, loginData.password, location, history)

    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 20 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 900, color: "orange" }}>
                        Login form
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: "70%" }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "70%", m: 1 }}
                                type="password"
                                id="standard-basic"
                                name="password"
                                onBlur={handleOnChange}
                                label="Password"
                                variant="standard" />
                            <Button type="submit" variant="contained"
                                sx={{ color: "font.main", width: "70%" }}>
                                Login
                            </Button>
                        </form>
                    }
                    <NavLink to='/register'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant="text" sx={{ m: 2 }}>Don't Have account ? Register here</Button>
                    </NavLink>

                    {isLoading && <CircularProgress
                    />}

                    <p>----------------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" sx={{ m: 2 }}>Google SignIn</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={logo} style={{ width: "100%" }} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;
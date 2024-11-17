// src/pages/Login.jsx

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook from react-router-dom
import { loginUser } from '../services/api';  // Import the login function from the services folder

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Hook to navigate programmatically

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { email, password };

        try {
            const response = await loginUser(userData); // Call the service function

            // Store the token in localStorage (or in cookies/sessionStorage if needed)
            localStorage.setItem('token', response.token);  // Store token for further authenticated requests

            // Redirect to the home page after successful login
            navigate('/');  // Adjust this to the route of your home page

        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid credentials, please try again.');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: 'auto', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>
            {error && <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>{error}</Typography>}

            <form onSubmit={handleSubmit}>
                {/* Email */}
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />

                {/* Password */}
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />

                {/* Login Button */}
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;

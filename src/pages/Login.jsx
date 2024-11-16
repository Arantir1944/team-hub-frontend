// src/pages/Login.jsx
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';  // For making HTTP requests

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = { email, password };

        try {
            // Assuming your backend is running locally at http://localhost:5000
            const response = await axios.post('http://localhost:5000/login', loginData);
            alert('Login successful!');
            console.log(response.data);
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed!');
        }
    };

    return (
        <Container>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;

// src/pages/Register.jsx

import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Typography } from '@mui/material';  // Import necessary Material UI components
import { registerUser } from '../services/api';  // Import the function from the services folder

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { firstName, lastName, email, password, role };

        try {
            const response = await registerUser(userData); // Call the service function
            alert('User registered successfully!');
            console.log(response);
        } catch (error) {
            console.error('Error registering user:', error);
            setError('Registration failed!');  // Display error message in the UI
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: 'auto', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Register
            </Typography>
            {error && <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>{error}</Typography>}

            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />

                {/* Last Name */}
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />

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

                {/* Role Select */}
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel>Role</InputLabel>
                    <Select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        label="Role"
                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                </FormControl>

                {/* Register Button */}
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default Register;

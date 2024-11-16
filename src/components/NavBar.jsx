// src/components/NavBar.jsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';  // For navigation links

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Box to control the layout */}
                <Box sx={{ display: 'flex', width: '100%' }}>
                    {/* Left side: Title */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Team Hub
                    </Typography>

                    {/* Right side: Navigation Links */}
                    <div>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
                        <Button color="inherit" component={Link} to="/knowledge">Knowledge Base</Button>
                        <Button color="inherit" component={Link} to="/register">Register</Button> {/* Register link */}
                        <Button color="inherit" component={Link} to="/login">Login</Button> {/* Login link */}
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

// src/services/api.js

import axios from 'axios';

// Set up the base URL for the backend API
const API_URL = 'http://localhost:5000';

// Function to handle the user registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
};

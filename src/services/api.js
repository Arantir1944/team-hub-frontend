import axios from 'axios';

// Set up the base URL for the backend API
const API_URL = 'http://localhost:5000';

// Function to handle the user registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/register`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
};

// Function to handle the user login
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/login`, loginData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
};

// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set to 'dark' for dark mode
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />  {/* Material UI baseline to normalize styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

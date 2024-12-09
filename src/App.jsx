// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';  // Import NavBar
import HomePage from './pages/HomePage';  // Placeholder pages
import TaskPage from './pages/TaskPage';
import KnowledgeBase from './pages/KnowledgeBase';
import Register from './pages/Register';  // Import Register page
import Login from './pages/Login';  // Import Login page

const App = () => {
  return (
    <Router>
      <NavBar />  {/* Render NavBar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />

        <Route path="/knowledge" element={<KnowledgeBase />} />

        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
      </Routes>
    </Router>
  );
};

export default App;

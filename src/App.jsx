// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';  // Import NavBar
import HomePage from './pages/HomePage';  // Placeholder pages
import TaskPage from './pages/TaskPage';
import KnowledgeBase from './pages/KnowledgeBase';

const App = () => {
  return (
    <Router>
      <NavBar />  {/* Render NavBar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/knowledge" element={<KnowledgeBase />} />
      </Routes>
    </Router>
  );
};

export default App;

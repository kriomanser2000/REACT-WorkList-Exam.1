import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';

const Root = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/*" element={<App />} />
        </Routes>
    </Router>
);
export default Root;
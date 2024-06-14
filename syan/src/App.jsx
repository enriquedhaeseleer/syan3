// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<PhotoGallery />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

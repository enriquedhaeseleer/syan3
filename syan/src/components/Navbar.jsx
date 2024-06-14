// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</Link>
        </nav>
    );
};

export default Navbar;

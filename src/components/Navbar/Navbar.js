import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='logo'>
                <Link to="/">Fearless</Link>
            </div>
            <div className='nav-item'>
                <Link to="/" className='menu'>Home</Link>
                <Link to="/" className='menu'>Cart</Link>
                <Link to="/" className='menu'>Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
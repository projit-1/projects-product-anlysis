import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <Link to="/home">HOME</Link>
                    <Link to="/Reviews">REVIEWS</Link>
                    <Link to="Dashboard">DASHBOARD</Link>
                    <Link to="/Blogs">BLOGS</Link>
                    <Link to="/About">ABOUT</Link>
                </div>

            </div>
        </div>
    );
};

export default Header;
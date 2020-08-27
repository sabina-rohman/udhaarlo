import React, { Component } from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <header>
                <h2><a>Udhaarlo</a></h2>
                <nav>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Register</a></li>
                    <li><a>Sign-in</a></li>
                </nav>
            </header>
        </div>
    )
}


export default Navbar;

import React from 'react'
import './Nav.css'
import logo from '../Images/logo.svg'

function Nav(){
    return (
        <div>
            <header>
                <nav className="navbar fixed-top bg-dark">
                    <img src={logo} alt="logo" className="logo"/>
                    <ul className="nav-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default Nav;

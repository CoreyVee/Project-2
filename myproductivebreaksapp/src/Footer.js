import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    
    return (
        <header>
            <nav>
            <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Favorites'><li>Favorites</li></Link>
            <Link to='/ProductivityTips'><li>Productivity Tips</li></Link>
            </ul>
            </nav>
        </header>

    )

}
export default Footer;
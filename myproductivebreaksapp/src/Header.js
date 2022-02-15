import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <header>
            <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Favorites'><li>Favorites</li></Link>
            <Link to='/ProductivityTips'><li>Productivity Tips</li></Link>
            </ul>
        </header>

    )

}
export default Header;
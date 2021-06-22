import React from 'react'
import './NavBar.css'

import {
    Link, Route
} from 'react-router-dom'


function NavBar() {
    return (
        <div className="navBar__wrapper">
            {/* Logo */}
            <div className="navBar__logo">
                <Link to="/">
                    <img src="https://assets.coingecko.com/coins/images/12817/small/filecoin.png?1602753933" width={40} />
                </Link>
            </div>
            {/* Menu */}
            <div className="navBar__menuItems">
                <Link to="/">
                    <a>Home</a>
                </Link>
                <Link to="/Login">
                    <a>Login</a>
                </Link>
                <Link to="/signup">
                    <a>Sign Up</a>
                </Link>
                <Link to="/logout">
                    <a>Logout</a>
                </Link>
            </div>
                        {/* Search */}
                        <div className="navBar__search">
                <div className="navBar__searchContainer">
                    <input placeholder="Search" type="text" />
                </div>
            </div>
        </div>
    )
}

export default NavBar
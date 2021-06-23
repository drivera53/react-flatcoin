import React from 'react'
import './NavBar.css'

import {
    Link
} from 'react-router-dom'


function NotLoggedInNavBar() {
    return (
        <div className="navBar__wrapper">
            {/* Logo */}
            <div className="navBar__logo">
                <Link to="/">
                    <img src="https://assets.coingecko.com/coins/images/12817/small/filecoin.png?1602753933" width={40} alt="Flatcoin-logo"/>
                </Link>
            </div>
            {/* Menu */}
            <div className="navBar__menuItems">
                <Link to="/Login">
                    <a>Login</a>
                </Link>
                <Link to="/signup">
                    <a>Sign Up</a>
                </Link>
            </div>
        </div>
    )
}

export default NotLoggedInNavBar
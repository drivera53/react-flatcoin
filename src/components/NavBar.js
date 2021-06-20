import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div className="navBar__wrapper">
            {/* Logo */}
            <div className="navBar__logo">
                <img src="https://assets.coingecko.com/coins/images/12817/small/filecoin.png?1602753933" width={40} />
            </div>
            {/* Menu */}
            <div className="navBar__menuItems">
                <a href="#">Portfolio</a>
                <a href="#">Account</a>
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
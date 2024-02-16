import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/catalog'}>Catalog</NavLink>
                <NavLink to={'/favourites'}>Favourites</NavLink>

            </nav>
        </div>
    )
}

export default Header
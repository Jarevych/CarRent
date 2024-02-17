import React from "react";
// import { NavLink } from "react-router-dom";
import { StyledAppHeader, StyledNavLink } from './HeaderStyled';


const Header = () => {
    return (
        <StyledAppHeader>
            <nav className="header-nav">
                <StyledNavLink to={'/'}>Home</StyledNavLink>
                <StyledNavLink to={'/catalog'}>Catalog</StyledNavLink>
                <StyledNavLink to={'/favorite'}>Favorites</StyledNavLink>

            </nav>
        </StyledAppHeader>
    )
}

export default Header
import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";
import AccountBar from "../AccountBar/AccountBar";

import './header.css';

function Header({ nav, loggedIn }) {
    return (
        <header className="header">
            <Logo />
            {nav && <Navigation />}
            <AccountBar loggedIn={loggedIn} />
        </header>
    )
}

export default Header;

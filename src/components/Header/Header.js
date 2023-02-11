import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";
import AccountBar from "../AccountBar/AccountBar";

import './header.css';

function Header({ loggedIn }) {
    return (
        <header className="header">
            <Logo />
            {loggedIn && <Navigation />}
            <AccountBar loggedIn={loggedIn} />
        </header>
    )
}

export default Header;

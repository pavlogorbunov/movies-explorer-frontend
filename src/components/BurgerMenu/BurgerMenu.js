import React from "react";
import { Link, useLocation } from 'react-router-dom';

import './burgermenu.css';

function BurgerMenu({ visible, onClose }) {
    var buttonClass = "burger-overlay burger-overlay_hidden";
    var menuClass = "burgermenu burgermenu_hidden";
    if(visible) {
        buttonClass = "burger-overlay";
        menuClass = "burgermenu";
    }

    const location = useLocation();

    var moviesClass = "burgermenu__navlist-item";
    var savedMoviesClass = "burgermenu__navlist-item";

    if(location.pathname === "/movies") {
        moviesClass = "burgermenu__navlist-item burgermenu__navlist-item_current";
    }
    if(location.pathname === "/saved-movies") {
        savedMoviesClass = "burgermenu__navlist-item burgermenu__navlist-item_current";
    }

    return (
        <div className={buttonClass}>
            <nav className={menuClass}>
                <button className="burgermenu__exit" onClick={onClose}></button>
                <nav className="burgermenu__navlist">
                    <Link to="/" className="burgermenu__navlist-item">Главная</Link>
                    <Link to="/movies" className={moviesClass}>Фильмы</Link>
                    <Link to="/saved-movies" className={savedMoviesClass}>Сохраненные фильмы</Link>
                </nav>
                <Link to="/account" className="burgermenu__account-button">Аккаунт</Link>
            </nav>
        </div>
    )
}

export default BurgerMenu;
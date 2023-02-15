import React from "react";
import { Link, useLocation } from 'react-router-dom';

import './burgermenu.css';

function BurgerMenu({ visible, onClose }) {
    let buttonClass = "burger-overlay burger-overlay_hidden";
    let menuClass = "burgermenu burgermenu_hidden";
    if(visible) {
        buttonClass = "burger-overlay";
        menuClass = "burgermenu";
    }

    const location = useLocation();

    const itemClassSimple = "burgermenu__navlist-item";
    const itemClassCurrent = "burgermenu__navlist-item burgermenu__navlist-item_current";

    let mainClass = itemClassSimple;
    let moviesClass = itemClassSimple;
    let savedMoviesClass = itemClassSimple;

    if(location.pathname === "/") {
        mainClass = itemClassCurrent;
    }
    if(location.pathname === "/movies") {
        moviesClass = itemClassCurrent;
    }
    if(location.pathname === "/saved-movies") {
        savedMoviesClass = itemClassCurrent;
    }

    return (
        <div className={buttonClass}>
            <nav className={menuClass}>
                <button className="burgermenu__exit" onClick={onClose}></button>
                <nav className="burgermenu__navlist">
                    <Link to="/" className={mainClass} onClick={onClose}>Главная</Link>
                    <Link to="/movies" className={moviesClass} onClick={onClose}>Фильмы</Link>
                    <Link to="/saved-movies" className={savedMoviesClass} onClick={onClose}>Сохраненные фильмы</Link>
                </nav>
                <Link to="/account" className="burgermenu__account-button" onClick={onClose}>Аккаунт</Link>
            </nav>
        </div>
    )
}

export default BurgerMenu;
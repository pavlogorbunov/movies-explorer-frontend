import React from "react";
import { Link } from "react-router-dom";

import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './accountbar.css';

function AccountBar({ loggedIn }) {
    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = React.useState(false);

    function onBurgerMenuClose() {
        setIsBurgerMenuOpened(false);
    }

    function onBurgerButtonClick() {
        setIsBurgerMenuOpened(true);
    }

    return (
        <div className="account-menu">
            {loggedIn &&
                <>
                    <Link to="/account" className="account-button">Аккаунт</Link>
                    <BurgerButton onClick={onBurgerButtonClick} />
                    <BurgerMenu visible={isBurgerMenuOpened} onClose={onBurgerMenuClose} />
                </>
            }
            {!loggedIn &&
                <>
                    <Link to="/sign-up" className="register-button">Регистрация</Link>
                    <Link to="/sign-in" className="login-button">Войти</Link>
                </>
            }
        </div>
    )
}

export default AccountBar;
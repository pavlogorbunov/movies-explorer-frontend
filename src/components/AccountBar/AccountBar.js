import { Link } from "react-router-dom";
import './accountbar.css';

function AccountBar({ loggedIn }) {
    return (
        <div className="account-menu">
            {loggedIn &&
                <Link to="/account" className="account-button">Аккаунт</Link>
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
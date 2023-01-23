import { Link } from "react-router-dom";
import './navigation.css';

function Navigation() {
    return (
        <nav className="header__navmenu">
            <ul className="header__navmenu-ul">
                <li className="header__navmenu-el header__navmenu-el_main"><Link to='/movies' className="header__navmenu-el-link">Фильмы</Link></li>
                <li className="header__navmenu-el"><Link to='/saved-movies' className="header__navmenu-el-link">Сохраненные фильмы</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;
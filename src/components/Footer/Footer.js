import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyright">© 2023</p>
                <nav className="footer__menu">
                    <li className="footer__menu-item"><a className="footer__menu-item-link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li>
                    <li className="footer__menu-item"><a className="footer__menu-item-link" href="https://github.com/pavlogorbunov">Github</a></li>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
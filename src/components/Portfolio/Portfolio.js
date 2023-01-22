import './portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__listitem">
                    <a href="https://pavlogorbunov.github.io/how-to-learn-pavlogorbunov/" target="_blank" rel="noreferrer" className="portfolio__listitem-text">Статичный сайт</a>
                    <p className="portfolio__listitem-arrow">↗</p>
                </li>
                <li className="portfolio__listitem">
                    <a href="https://pavlogorbunov.github.io/russian-travel-pavlogorbunov/" target="_blank" rel="noreferrer" className="portfolio__listitem-text">Адаптивный сайт</a>
                    <p className="portfolio__listitem-arrow">↗</p>
                </li>
                <li className="portfolio__listitem">
                    <a href="https://paulogorbunov.nomoredomains.club/" target="_blank" rel="noreferrer" className="portfolio__listitem-text">Одностраничное приложение</a>
                    <p className="portfolio__listitem-arrow">↗</p>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;
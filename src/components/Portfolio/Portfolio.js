import './portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <p className="portfolio__list-item__text">Статичный сайт</p>
                    <p className="portfolio__list-item__arrow">↗</p>
                </li>
                <li className="portfolio__list-item">
                    <p className="portfolio__list-item__text">Адаптивный сайт</p>
                    <p className="portfolio__list-item__arrow">↗</p>
                </li>
                <li className="portfolio__list-item">
                    <p className="portfolio__list-item__text">Одностраничное приложение</p>
                    <p className="portfolio__list-item__arrow">↗</p>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;
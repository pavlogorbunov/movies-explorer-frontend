import './portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__listitem">
                    <a href="https://xn----9sbmlc4adegsjcp8f.xn--p1ai/" target="_blank" rel="noreferrer" className="portfolio__listitem-text">Интернет-магазин на WordPress</a>
                    <p className="portfolio__listitem-arrow">↗</p>
                </li>
                <li className="portfolio__listitem">
                    <a href="https://paulogorbunov.nomoredomains.club/" target="_blank" rel="noreferrer" className="portfolio__listitem-text">Одностраничное React-приложение</a>
                    <p className="portfolio__listitem-arrow">↗</p>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;
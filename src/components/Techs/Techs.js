import './techs.css';

function Techs() {
    return (
        <section className="techs" id="techs">
            <h2 className="techs__header">Технологии</h2>
            <p className="techs__main">7 технологий</p>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list-container">
                <li className="techs__list-element">HTML</li>
                <li className="techs__list-element">CSS</li>
                <li className="techs__list-element">JS</li>
                <li className="techs__list-element">React</li>
                <li className="techs__list-element">Git</li>
                <li className="techs__list-element">Express.js</li>
                <li className="techs__list-element">MongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;
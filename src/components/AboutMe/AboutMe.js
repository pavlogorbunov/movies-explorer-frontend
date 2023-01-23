import Portfolio from '../Portfolio/Portfolio';
import './aboutme.css';

function AboutMe() {
    return (
        <section className="aboutme" id="aboutme">
            <h2 className="aboutme__header">Студент</h2>
            <div className="aboutme__card-container">
                <div className="aboutme__text-container">
                    <p className="aboutme__name">Павел</p>
                    <p className="aboutme__description">Фронтенд-разработчик, 32 года</p>
                    <p className="aboutme__text">Я родился в Москве, закончил факультет прикладной математики и физики МАИ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="aboutme__link" href="https://github.com/pavlogorbunov">Github</a>
                </div>
                <img className="aboutme__portrait" alt="Портрет" src="https://images.unsplash.com/photo-1669542872916-cd696767d4f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80" />
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;
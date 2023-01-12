import React from 'react';
import './aboutproject.css';

function AboutProject() {
    return (
        <section className="aboutproject" id="aboutproject">
            <h2 className="aboutproject__header">О проекте</h2>
            <div className="aboutproject__text-container">
                <div className="aboutproject__text-column">
                    <p className="aboutproject__text aboutproject__text_header">Дипломный проект включал 5 этапов</p>
                    <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutproject__text-column">
                    <p className="aboutproject__text aboutproject__text_header">На  выполнение диплома ушло 5 недель</p>
                    <p className="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutproject__diagram-container">
                <p className="aboutproject__diagram-element aboutproject__diagram-element_backend">1 неделя</p>
                <p className="aboutproject__diagram-element aboutproject__diagram-element_frontend">4 недели</p>
                <p className="aboutproject__diagram-element">Back-end</p>
                <p className="aboutproject__diagram-element">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
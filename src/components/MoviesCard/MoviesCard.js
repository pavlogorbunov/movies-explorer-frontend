import React from 'react';
import './moviescard.css';
import cardImage from '../../images/card.jpg';

function MoviesCard({ cardData }) {
    function durationTranslation(t) {
        if (t > 60) {
            return Math.floor(t / 60) + "ч " + t % 60 + "м";
        } else {
            return t % 60 + "м";
        }
    }

    return (
        <li className="card">
            <div className="card__header-text-container">
                <h3 className="card__name">{cardData.nameRU}</h3>
                <p className="card__duration">{durationTranslation(cardData.duration)}</p>
            </div>
            <div className="card__button"></div>
            <div className="card__image-container">
                <img title={cardData.id} className="card__image" src={cardImage} alt={"Кадр из фильма " + cardData.nameRU} ></img>
            </div>
        </li>
    )
}

export default MoviesCard;
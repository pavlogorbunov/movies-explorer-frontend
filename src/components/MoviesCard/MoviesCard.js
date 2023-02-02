import React from 'react';

import './moviescard.css';

function MoviesCard({ cardData, type, durationTranslation, onCardLike, onCardDelete, refreshLocalStorage }) {
    var cardButtonClass = "card__button";
    if (cardData.isLiked) cardButtonClass += " card__button_selected"

    function onMovieLike(evt) {
        onCardLike(cardData).then(() => {
            evt.target.classList.toggle("card__button_selected");
            cardData.isLiked = !cardData.isLiked;
            refreshLocalStorage();
        });
    }

    return (
        <li className="card">
            <div className="card__header-text-container">
                <h3 className="card__name">{cardData.nameRU}</h3>
                <p className="card__duration">{durationTranslation(cardData.duration)}</p>
            </div>
            {type === "saved-movies" &&
                <button className="card__button card__button_type_delete" onClick={() => onCardDelete(cardData)}></button>
            }
            {type === "movies" &&
                <button className={cardButtonClass} onClick={onMovieLike}></button>
            }
            <div className="card__image-container">
                <a href={cardData.trailerLink} target="_blank" rel="noreferrer">
                    <img title={cardData.id} className="card__image" src={'https://api.nomoreparties.co' + cardData.image.url} alt={"Кадр из фильма " + cardData.nameRU} ></img>
                </a>
            </div>
        </li>
    )
}

export default MoviesCard;
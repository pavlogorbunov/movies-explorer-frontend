import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import PreloaderPopup from '../PreloaderPopup/PreloaderPopup';
import './moviescardlist.css';

function MoviesCardList({ cards, n, type }) {
    const moviesList = cards.slice(0, n);

    // console.log(cards);

    return (
        <>
            <section className="cardlist">
                <ul className="cardlist__list">
                    {moviesList.map(card => (
                        <MoviesCard cardData={card} key={card.id} type={type} />
                    ))}
                </ul>
                {/* {moviesList.map(card => (
                <><div>{card.nameRU} - {card.nameEN} - {card.year} - {card.director} - {card.trailerLink}</div><br /></>
            ))} */}
                <button className="cardlist__morebutton">Ещё</button>
            </section>
            <PreloaderPopup visible={false} />
        </>
    )
}

export default MoviesCardList;
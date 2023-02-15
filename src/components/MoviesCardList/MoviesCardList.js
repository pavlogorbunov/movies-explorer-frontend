import React from 'react';

import './moviescardlist.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { mainApi } from '../../utils/MainApi';
import { N, M, SHORTS_DURATION } from '../../utils/constants';

function MoviesCardList({ type, savedMovies, searchWord, shorts, refreshLocalStorage, onCardDelete, isPreloaderOpen, error }) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    const [n, setN] = React.useState({});
    let moviesList = [];

    if (movies) {
        moviesList = movies.filter(isShort).filter(search).map(el => { return { ...el, "isLiked": savedMovies.includes(el.id) } });
    }

    React.useEffect(() => {
        if (type === 'movies') renewN();
    }, [type, searchWord]); // eslint-disable-line

    function renewN() {
        const nFromLocalStorage = JSON.parse(localStorage.getItem('n'));
        const w = window.innerWidth;
        if (!nFromLocalStorage || nFromLocalStorage === 0) {
            let newN = N.desktop;
            if (w < 728) newN = N.tablet;
            if (w < 480) newN = N.mobile;
            localStorage.setItem('n', JSON.stringify(newN));
            setN(newN);
        } else {
            setN(nFromLocalStorage);
        }
    }

    function durationTranslation(t) {
        if (t > 60) { return Math.floor(t / 60) + "ч " + t % 60 + "м"; }
        else { return t % 60 + "м"; }
    }

    function search(movieData) {
        if (!searchWord) return true;
        return movieData.nameRU.toLowerCase().includes(searchWord.toLowerCase().trim()) ||
            movieData.nameEN.toLowerCase().includes(searchWord.toLowerCase().trim()) ||
            movieData.description.toLowerCase().includes(searchWord.toLowerCase().trim()) ||
            movieData.director.toLowerCase().includes(searchWord.toLowerCase().trim());
    }

    function isShort(movieData) {
        if (!shorts) return true;
        return movieData.duration <= SHORTS_DURATION;
    }

    function onCardLike(movieData) {
        if (movieData.isLiked) {
            return mainApi.deleteMovie(mainApi.cardTranslation(movieData));
        } else {
            return mainApi.postMovie(mainApi.cardTranslation(movieData));
        }
    }

    function defineM() {
        return window.innerWidth > 728 ? M.desktop : M.tablet;
    }

    function handleMoreButtonClick() {
        setN(n => (n + defineM()));
        localStorage.setItem('n', JSON.stringify(n + defineM()));
    }

    return (
        <>
            <section className="cardlist">
                {type === 'movies' && moviesList.length === 0 && !isPreloaderOpen && !error &&
                    <div className='cardlist__result'>Ничего не найдено</div>
                }
                {type === "saved-movies" && moviesList.filter((movie) => { return movie.isLiked }).length === 0 && !isPreloaderOpen && !error &&
                    <div className='cardlist__result'>Ничего не найдено</div>
                }
                {error &&
                    <div className='cardlist__result'>{error}</div>
                }
                <ul className="cardlist__list">
                    {type === "movies" &&
                        moviesList.map(card => (
                            <MoviesCard
                                cardData={card}
                                key={card.id}
                                type={type}
                                durationTranslation={durationTranslation}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                                refreshLocalStorage={refreshLocalStorage} />
                        )).slice(0, n)}
                    {type === "saved-movies" && moviesList.length > 0 &&
                        moviesList.filter((movie) => { return movie.isLiked }).map(card => (
                            <MoviesCard
                                cardData={card}
                                key={card.id}
                                type={type}
                                durationTranslation={durationTranslation}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                                refreshLocalStorage={refreshLocalStorage} />
                        ))}
                </ul>
                {type === 'movies' && moviesList.length > n &&
                    <button className="cardlist__morebutton" onClick={handleMoreButtonClick}>Ещё</button>
                }
            </section>
        </>
    )
}

export default MoviesCardList;
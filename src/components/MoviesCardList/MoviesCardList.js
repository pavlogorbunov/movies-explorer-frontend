import React from 'react';

import './moviescardlist.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { mainApi } from '../../utils/MainApi';
import MoviesPreloader from '../MoviesPreloader/MoviesPreloader';

function MoviesCardList({ type, savedMovies, searchWord, shorts, refreshLocalStorage, onCardDelete, isPreloaderOpen }) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    const [n, setN] = React.useState({});

    React.useEffect(() => {
        renewN();
    }, [type, searchWord]); // eslint-disable-line

    function renewN() {
        const n = JSON.parse(localStorage.getItem('n'));
        const w = window.innerWidth;
        if (!n) {
            const n = {};
            n[type] = 12;
            if (w < 728) n[type] = 8;
            if (w < 480) n[type] = 5;
            localStorage.setItem('n', JSON.stringify(n));
        } else if (!n[type]) {
            n[type] = 12;
            if (w < 728) n[type] = 8;
            if (w < 480) n[type] = 5;
            localStorage.setItem('n', JSON.stringify(n));
        }
        setN(n);
    }

    var moviesList = [];

    if (movies) {
        moviesList = movies.filter(isShort).filter(search).map(el => { return { ...el, "isLiked": savedMovies.includes(el.id) } });
    }

    function durationTranslation(t) {
        if (t > 60) { return Math.floor(t / 60) + "ч " + t % 60 + "м"; }
        else { return t % 60 + "м"; }
    }

    function search(movieData) {
        if (!searchWord || searchWord === '   ') return true;
        return movieData.nameRU.toLowerCase().includes(searchWord.toLowerCase()) ||
            movieData.nameEN.toLowerCase().includes(searchWord.toLowerCase()) ||
            movieData.description.toLowerCase().includes(searchWord.toLowerCase()) ||
            movieData.director.toLowerCase().includes(searchWord.toLowerCase());
    }

    function isShort(movieData) {
        if (!shorts) return true;
        return movieData.duration <= 40;
    }

    function onCardLike(movieData) {
        if (movieData.isLiked) {
            return mainApi.deleteMovie(mainApi.cardTranslation(movieData));
        } else {
            return mainApi.postMovie(mainApi.cardTranslation(movieData));
        }
    }

    function defineM() {
        return window.innerWidth > 728 ? 3 : 2;
    }

    function handleMoreButtonClick() {
        setN({ ...n, [type]: n[type] + defineM() });
        localStorage.setItem('n', JSON.stringify({ ...n, [type]: n[type] + defineM() }));
    }

    return (
        <>
            <section className="cardlist">
                <MoviesPreloader isOpen={isPreloaderOpen}/>
                {type === 'movies' && moviesList.length === 0 && !isPreloaderOpen &&
                    <div className='cardlist__result'>Ничего не найдено</div>
                }
                {type === "saved-movies" && moviesList.filter((movie) => { return movie.isLiked }).length === 0 && !isPreloaderOpen &&
                    <div className='cardlist__result'>Ничего не найдено</div>
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
                        )).slice(0, n[type])}
                    {type === "saved-movies" &&
                        moviesList.filter((movie) => { return movie.isLiked }).map(card => (
                            <MoviesCard
                                cardData={card}
                                key={card.id}
                                type={type}
                                durationTranslation={durationTranslation}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                                refreshLocalStorage={refreshLocalStorage} />
                        )).slice(0, n[type])}
                </ul>
                {type === 'movies' && moviesList.length > n.movies &&
                    <button className="cardlist__morebutton" onClick={handleMoreButtonClick}>Ещё</button>}
                {type === "saved-movies" && savedMovies.length > n['saved-movies'] &&
                    <button className="cardlist__morebutton" onClick={handleMoreButtonClick}>Ещё</button>
                }
            </section>
        </>
    )
}

export default MoviesCardList;
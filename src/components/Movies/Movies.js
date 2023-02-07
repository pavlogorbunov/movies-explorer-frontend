import { useState, useEffect } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './movies.css';
import { mainApi } from '../../utils/MainApi';
import getMovies from '../../utils/MoviesApi';
import MoviesPreloader from '../MoviesPreloader/MoviesPreloader';
import { MOVIES_FETCH_ERROR } from '../../utils/constants';

function Movies({ type }) {
    const [moviesShown, setMoviesShown] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const [shorts, setShorts] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (moviesShown) {
            if (!localStorage.getItem('movies')) {
                setIsPreloaderOpen(true);
                getMovies().then(res => {
                    res.json().then(res => {
                        localStorage.setItem('movies', JSON.stringify(res));
                    }).then(() => {
                        refreshLocalStorage().then(() => {
                            setIsPreloaderOpen(false);
                            setError('')
                        });
                    })
                    .catch(() => {
                        setError(MOVIES_FETCH_ERROR);
                    })
                    .finally(() => {
                        if (type === 'saved-movies') setMoviesShown(true);
                        setIsPreloaderOpen(false);
                    });
                });
            } else {
                setIsPreloaderOpen(true);
                refreshLocalStorage().then(() => {
                    if (type === 'saved-movies') setMoviesShown(true);
                    setIsPreloaderOpen(false);
                });
            }

            const s = JSON.parse(localStorage.getItem('shorts'));
            if (s) {
                if (s[type]) {
                    setShorts(s[type]);
                } else {
                    setShorts(false);
                }
            }

            const search = JSON.parse(localStorage.getItem('searchWord'));
            if (search && (search[type])) setSearchWord(search[type]);
            else setSearchWord('');
        }
    }, [type, searchWord, moviesShown]);

    function toggleShortsCheckbox() {
        const s = JSON.parse(localStorage.getItem('shorts'));
        localStorage.setItem('shorts', JSON.stringify({ ...s, [type]: !shorts }));
        setShorts(!shorts);
    }

    function refreshLocalStorage() {
        return mainApi.getSavedMovies().then(res => {
            setSavedMovies(res.map(el => el.movieId));
            localStorage.setItem('saved-movies', JSON.stringify(res.map(el => el.movieId)));
        });
    }

    function onCardDelete(movieData) {
        mainApi.deleteMovie(mainApi.cardTranslation(movieData)).then(() => {
            refreshLocalStorage();
        });
    }

    return (
        <>
            <Header nav={true} loggedIn={true} />
            <main className="main">
                <MovieSearchForm
                    setMovies={setMoviesShown}
                    shorts={shorts}
                    toggleShortsCheckbox={toggleShortsCheckbox}
                    searchWord={searchWord}
                    setSearchWord={setSearchWord}
                    type={type} />
                {isPreloaderOpen &&
                    <MoviesPreloader isOpen={true} />
                }
                {moviesShown && !isPreloaderOpen &&
                    <MoviesCardList
                        savedMovies={savedMovies}
                        shorts={shorts}
                        searchWord={searchWord}
                        refreshLocalStorage={refreshLocalStorage}
                        type={type}
                        onCardDelete={onCardDelete}
                        error={error} />
                }
            </main>
            <Footer />
        </>
    )
}

export default Movies;
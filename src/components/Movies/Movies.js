import { useState, useEffect } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './movies.css';
import { mainApi } from '../../utils/MainApi';
import getMovies from '../../utils/MoviesApi';

function Movies({ type }) {
    const [moviesShown, setMoviesShown] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const [shorts, setShorts] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('movies')) {
            setIsPreloaderOpen(true);
            getMovies().then(res => {
                res.json().then(res => {
                    localStorage.setItem('movies', JSON.stringify(res));
                }).then(() => {
                    refreshLocalStorage();
                }).finally(() => {
                    setIsPreloaderOpen(false);
                });
            });
        } else {
            refreshLocalStorage();
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

        if (type === 'saved-movies') setMoviesShown(true);

    }, [type, searchWord]);

    function toggleShortsCheckbox() {
        const s = JSON.parse(localStorage.getItem('shorts'));
        localStorage.setItem('shorts', JSON.stringify({ ...s, [type]: !shorts }));
        setShorts(!shorts);
    }

    function refreshLocalStorage() {
        mainApi.getSavedMovies().then(res => {
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
                {moviesShown &&
                    <MoviesCardList
                        savedMovies={savedMovies}
                        shorts={shorts}
                        searchWord={searchWord}
                        refreshLocalStorage={refreshLocalStorage}
                        type={type}
                        onCardDelete={onCardDelete}
                        isPreloaderOpen={isPreloaderOpen} />
                }
            </main>
            <Footer />
        </>
    )
}

export default Movies;
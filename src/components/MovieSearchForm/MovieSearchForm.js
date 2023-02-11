import React from 'react';

import './moviesearchform.css';

function MovieSearchForm({ setMovies, toggleShortsCheckbox, shorts, setSearchWord, type }) {
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        const searchWord = JSON.parse(localStorage.getItem('searchWord'));
        if (type === 'saved-movies') {
            setMovies(true);
            setSearchWord('');
            setValue('');
        } else if (type === 'movies' && searchWord) {
            setMovies(true);
            setSearchWord(searchWord);
            setValue(searchWord);
        } else {
            setMovies(false);
            setSearchWord('');
            setValue('');
        }
    }, [setMovies, setSearchWord, type]);

    function onChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setMovies(true);
        setSearchWord(value);
        if(type==='movies') {
            localStorage.setItem('searchWord', JSON.stringify(value));
            localStorage.setItem('n', JSON.stringify(0));
        }
    }

    return (
        <section className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__icon"></div>
                <div className="form__searchbar-container">
                    <input className="form__search" type="text" onChange={onChange} value={value} placeholder="Фильмы" required></input>
                    <button className="form__submit-button"></button>
                </div>
                <label className="form__checkbox-container">
                    <input className="form__checkbox" type="checkbox" onChange={toggleShortsCheckbox} checked={shorts}></input>
                    <span className="form__checkbox-style"></span>
                    <span className="form__label">Короткометражки</span>
                </label>
            </form>
        </section>
    )
}

export default MovieSearchForm;

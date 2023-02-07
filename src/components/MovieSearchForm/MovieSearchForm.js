import React from 'react';

import './moviesearchform.css';

function MovieSearchForm({ setMovies, toggleShortsCheckbox, shorts, setSearchWord, type }) {
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        const searchWord = JSON.parse(localStorage.getItem('searchWord'));
        if (searchWord && searchWord[type]) {
            setMovies(true);
            setSearchWord(searchWord[type]);
            setValue(searchWord[type]);
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
        const searchWord = JSON.parse(localStorage.getItem('searchWord'));
        localStorage.setItem('searchWord', JSON.stringify({...searchWord, [type]: value}));
        const n = JSON.parse(localStorage.getItem('n'));
        localStorage.setItem('n', JSON.stringify({...n, [type]: 0}));
    }

    return (
        <section className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__icon"></div>
                <div className="form__searchbar-container">
                    <input className="form__search" type="text" onChange={onChange} value={value} placeholder="Фильмы" minLength={3} required></input>
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

import React from 'react';

import './moviesearchform.css';

function MovieSearchForm() {
    function handleSubmit(evt) {
        evt.preventDefault();
    }

    return (
        <section className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__icon"></div>
                <div className="form__searchbar-container">
                    <input className="form__search" type="text" placeholder="Фильмы" minLength={3} required></input>
                    <button className="form__submit-button"></button>
                </div>
                <label className="form__checkbox-container">
                    <input className="form__checkbox" type="checkbox"></input>
                    <span className="form__checkbox-style"></span>
                    <span className="form__label">Короткометражки</span>
                </label>
            </form>
        </section>
    )
}

export default MovieSearchForm;

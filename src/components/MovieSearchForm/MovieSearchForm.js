import React from 'react';

import './moviesearchform.css';

function MovieSearchForm() {

    return (
        <section className="form-section">
            <form className="form">
                <div className="form__icon"></div>
                <label className="form__searchbar-container">
                    <input className="form__search" type="text" placeholder="Фильмы"></input>
                    <button className="form__submit-button"></button>
                </label>
                <label className="form__checkbox-container">
                    <input className="form__checkbox" type="checkbox"></input>
                    <p className="form__label">Короткометражки</p>
                </label>
            </form>
        </section>
    )
}

export default MovieSearchForm;

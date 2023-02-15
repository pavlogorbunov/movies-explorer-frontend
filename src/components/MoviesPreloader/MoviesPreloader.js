import React from 'react'
import './MoviesPreloader.css'

const MoviesPreloader = ({ isOpen }) => {
    if (isOpen) return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default MoviesPreloader

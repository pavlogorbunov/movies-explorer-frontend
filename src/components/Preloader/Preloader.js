import React from 'react'
import ReactDOM from 'react-dom';
import './Preloader.css'

const Preloader = ({ isOpen }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="preloader">
                <div className="preloader__container">
                    <span className="preloader__round"></span>
                </div>
            </div>
        </div>, document.getElementById('portal')
    )
};

export default Preloader

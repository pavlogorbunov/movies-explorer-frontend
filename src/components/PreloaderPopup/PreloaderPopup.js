import React from 'react'
import Preloader from '../Preloader/Preloader';
import './preloaderpopup.css'

function PreloaderPopup ({ visible }) {
    return (
        <div className={"popup__overlay " + (!visible && "popup__overlay_hidden")}>
            <Preloader />
        </div>
    )
};

export default PreloaderPopup

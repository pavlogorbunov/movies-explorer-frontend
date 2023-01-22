import React from "react";

import './burgerbutton.css';

function BurgerButton({ onClick }) {
    return (
        <button className="burgerbutton" onClick={onClick}></button>
    )
}

export default BurgerButton;
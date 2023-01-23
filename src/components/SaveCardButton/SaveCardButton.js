import React from "react";

import './savecardbutton.css';

function SaveCardButton() {
    const [cardButtonClass, setCardButtonClass] = React.useState("card__button");

    function onCardSelect() {
        if (cardButtonClass === "card__button") {
            setCardButtonClass("card__button card__button_selected");
            return;
        }
        setCardButtonClass("card__button");
    }

    return (
        <button className={cardButtonClass} onClick={onCardSelect}></button>
    )
}

export default SaveCardButton;
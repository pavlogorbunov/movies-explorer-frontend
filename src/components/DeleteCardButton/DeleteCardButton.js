import React from "react";

import './deletecardbutton.css';

function DeleteCardButton() {
    // const [cardButtonClass, setCardButtonClass] = React.useState("card__button card__button_type_delete");

    // function onCardSelect() {
    //     if (cardButtonClass === "card__button card__button_type_delete") {
    //         setCardButtonClass("card__button card__button_type_delete card__button_selected");
    //         return;
    //     }
    //     setCardButtonClass("card__button card__button_type_delete");
    // }

    return (
        <button className="card__button card__button_type_delete"></button>
    )
}

export default DeleteCardButton;
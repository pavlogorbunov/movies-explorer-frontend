import React from 'react';
import './input.css';

function Input({name, type, placeholder, minlength, maxlength}) {
    const [errorText, setErrorText] = React.useState('');
    const [errorElementClass, setErrorElementClass] = React.useState('input__error input__error_hidden');

    function handleChange(e) {
        console.log("errorElementClass - " + errorElementClass);
        console.log("errorText - " + errorText);
        if(e.target.validity.valid) {
            setErrorElementClass('input__error input__error_hidden');
            setErrorText('');
        } else {
            setErrorText(e.target.validationMessage);
            setErrorElementClass('input__error');
        }
    }

    return (
        <label className="input">
            <span className="input-header">{name}</span>
            <input onChange={handleChange} type={type} placeholder={placeholder} minLength={minlength} maxLength={maxlength} className="input__input"></input>
            <span className={errorElementClass}>{errorText}</span>
        </label>
    )
}

export default Input;
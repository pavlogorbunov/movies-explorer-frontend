import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../Logo/Logo';
import Preloader from '../Preloader/Preloader';

import useValidation from '../../utils/useValidation';

function SignUp({ action }) {
    const form = document.getElementById("signUpForm");
    const [formValidity, handleChange, values] = useValidation(form);
    const [formErrorText, setFormErrorText] = React.useState('');
    const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);

    function handleSignUp(e) {
        e.preventDefault();
        setIsPreloaderOpen(true);
        // formValidity = false;
        action(values.name, values.email, values.password)
            .catch((err) => {
                setIsPreloaderOpen(false);
                setFormErrorText(err.message);
            });
    }

    return (
        <form className="authform" onSubmit={handleSignUp} id="signUpForm">
            <Logo />
            <h2 className="authform__header">Рады видеть!</h2>
            <label className="input">
                <span className="input-header">Имя</span>
                <input onChange={handleChange}
                    name="name"
                    value={values.name}
                    type="text"
                    placeholder={''}
                    className="input__input"
                    disabled={isPreloaderOpen}></input>
                <span className="input__error" id="name-error"></span>
            </label>
            <label className="input">
                <span className="input-header">E-mail</span>
                <input onChange={handleChange}
                    name="email"
                    value={values.email}
                    type="email"
                    placeholder={''}
                    className="input__input"
                    disabled={isPreloaderOpen}></input>
                <span className="input__error" id="email-error"></span>
            </label>
            <label className="input">
                <span className="input-header">Пароль</span>
                <input onChange={handleChange}
                    name="password"
                    value={values.password}
                    type="password"
                    placeholder={''}
                    className="input__input"
                    disabled={isPreloaderOpen}></input>
                <span className="input__error" id="password-error"></span>
            </label>
            <span className="authform__error">{formErrorText}</span>
            <button className="authform__submit" disabled={!formValidity || isPreloaderOpen}>Зарегистрироваться</button>
            <p className="authform__bottomtext">Уже зарегистрированы? <Link to="/sign-in" className="authform__bottomtext-link">Войти</Link></p>
            <Preloader isOpen={isPreloaderOpen} />
        </form>
    );
}

export default SignUp;
import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../Logo/Logo';
import Preloader from '../Preloader/Preloader';

import useValidation from '../../utils/useValidation';

function SignIn({ action }) {
    const [formValidity, handleChange, values] = useValidation();
    const [formErrorText, setFormErrorText] = React.useState('');
    const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);

    function handleSignIn(e) {
        e.preventDefault();
        setIsPreloaderOpen(true);
        action(values.email, values.password)
            .then(() => {
                setIsPreloaderOpen(false);
            }).catch((err) => {
                setIsPreloaderOpen(false);
                setFormErrorText(err.message);
            });
    }

    return (
        <form className="authform" onSubmit={handleSignIn}>
            <Logo />
            <h2 className="authform__header">Рады видеть!</h2>
            <label className="input">
                <span className="input-header">E-mail</span>
                <input onChange={handleChange} name="email" value={values.email} type={'email'} placeholder={''} className="input__input"></input>
                <span className="input__error" id="email-error"></span>
            </label>
            <label className="input">
                <span className="input-header">Пароль</span>
                <input onChange={handleChange} name="password" value={values.password} type={'password'} placeholder={''} className="input__input"></input>
                <span className="input__error" id="password-error"></span>
            </label>
            <span className="authform__error">{formErrorText}</span>
            <button className="authform__submit" disabled={!formValidity}>Войти</button>
            <p className="authform__bottomtext">Еще не зарегистрированы? <Link to="/sign-up" className="authform__bottomtext-link">Регистрация</Link></p>
            <Preloader isOpen={isPreloaderOpen} />
        </form>
    );
}

export default SignIn;
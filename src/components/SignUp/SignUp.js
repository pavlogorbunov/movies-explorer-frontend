import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import Logo from '../Logo/Logo';
import Preloader from '../Preloader/Preloader';

import useValidation from '../../utils/useValidation';

function SignUp({ action }) {
    const [formValidity, handleChange, values] = useValidation();
    const [formErrorText, setFormErrorText] = React.useState('');
    const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);

    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();
        setIsPreloaderOpen(true);
        action(values.name, values.email, values.password)
            .then(() => {
                setIsPreloaderOpen(false);
                navigate('/sign-in');
            })
            .catch((err) => {
                setIsPreloaderOpen(false);
                setFormErrorText(err.message);
            });
    }

    return (
        <form className="authform" onSubmit={handleSignUp}>
            <Logo />
            <h2 className="authform__header">Рады видеть!</h2>
            <label className="input">
                <span className="input-header">Имя</span>
                <input onChange={handleChange} name="name" value={values.name} type="text" placeholder={''} className="input__input"></input>
                <span className="input__error" id="name-error"></span>
            </label>
            <label className="input">
                <span className="input-header">E-mail</span>
                <input onChange={handleChange} name="email" value={values.email} type="email" placeholder={''} className="input__input"></input>
                <span className="input__error" id="email-error"></span>
            </label>
            <label className="input">
                <span className="input-header">Пароль</span>
                <input onChange={handleChange} name="password" value={values.password} type="password" placeholder={''} className="input__input"></input>
                <span className="input__error" id="password-error"></span>
            </label>
            <span className="authform__error">{formErrorText}</span>
            <button className="authform__submit" disabled={!formValidity}>Зарегистрироваться</button>
            <p className="authform__bottomtext">Уже зарегистрированы? <Link to="/sign-in" className="authform__bottomtext-link">Войти</Link></p>
            <Preloader isOpen={isPreloaderOpen} />
        </form>
    );
}

export default SignUp;
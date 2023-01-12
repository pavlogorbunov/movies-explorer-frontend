import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import PreloaderPopup from '../PreloaderPopup/PreloaderPopup';
import './authform.css';

function AuthForm({ type }) {
    return (
        <form className="authform">
            <Logo />
            {type === 'sign-up' &&
                <>
                    <h2 className="authform__header">Добро пожаловать!</h2>
                    <Input type={'Имя'} placeholder={'Павел'} />
                    <Input type={'E-mail'} placeholder={''} />
                    <Input type={'Пароль'} placeholder={''} />
                    <button className="authform__submit">Зарегистрироваться</button>
                    <p className="authform__bottomtext">Уже зарегистрированы? <Link to="/sign-in" className="authform__bottomtext-link">Войти</Link></p>
                </>
            }
            {type === 'sign-in' &&
                <>
                    <h2 className="authform__header">Рады видеть!</h2>
                    <Input type={'E-mail'} placeholder={''} />
                    <Input type={'Пароль'} placeholder={''} />
                    <button className="authform__submit">Войти</button>
                    <p className="authform__bottomtext">Еще не зарегистрированы? <Link to="/sign-up" className="authform__bottomtext-link">Регистрация</Link></p>
                </>
            }
            <PreloaderPopup visible={false} />

        </form>
    )
}

export default AuthForm;
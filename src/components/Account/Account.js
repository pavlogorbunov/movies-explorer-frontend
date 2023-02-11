import React from 'react';
import { useNavigate } from "react-router-dom";

import './account.css'
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import { authorization } from '../../utils/Auth';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AuthContext } from '../../contexts/AuthContext';
import useValidation from '../../utils/useValidation';

function Account({ edit }) {
    const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
    const { setAuth } = React.useContext(AuthContext);
    const [formResultText, setFormResultText] = React.useState('');
    const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);
    const [formValidity, handleChange, values] = useValidation();

    const navigate = useNavigate();

    const [editMode, setEditMode] = React.useState(edit);

    function handleSubmit(evt) {
        evt.preventDefault();
        setIsPreloaderOpen(true);
        setFormResultText('');
        mainApi.patchUser(values.name, values.email)
            .then(data => {
                setCurrentUser({ name: data.name, email: data.email, _id: data._id });
                setAuth({email: data.email, isFetching: false});
                setFormResultText('Данные успешно изменены');
                setTimeout(setFormResultText, 2000, '');
            })
            .catch(err => {
                setRed();
                setFormResultText(err.message);
                setTimeout(setFormResultText, 2000, '');
                setTimeout(setGreen, 2000);
            })
            .finally(() => {
                setEditMode(!editMode);
                setIsPreloaderOpen(false);
            });
    }

    function setRed() {
        document.getElementById("form-result").classList.add("account__form-result_err");
    }

    function setGreen() {
        document.getElementById("form-result").classList.remove("account__form-result_err");
    }

    function handleEditClick(evt) {
        evt.preventDefault();
        setFormResultText('');
        setEditMode(!editMode);
    }

    function onLogOut() {
        authorization.logout();
        setAuth({email: null, isFetching: false});
        setCurrentUser({ name: '', email: '', _id: '' });
        localStorage.clear();
        navigate('/');
    }

    return (
        <section className="account">
            <Header loggedIn={true} />
            <h2 className="account__header">Привет, {currentUser.name}!</h2>
            <form className="account__form" onSubmit={handleSubmit}>
                <label className="account__form-label"><span className="account__form-input-name">Имя</span>
                    {editMode
                        ? <input
                            type="text"
                            name="name"
                            className="account__form-input"
                            value={values.name}
                            onChange={handleChange}
                            required>
                        </input>
                        : <span className="account__form-input-noedit">{currentUser.name}</span>
                    }
                    <span className="account__form-input-error" id="name-error"></span>
                </label>
                <label className="account__form-label"><span className="account__form-input-name">Email</span>
                    {editMode
                        ? <input
                            type="email"
                            name="email"
                            className="account__form-input"
                            // defaultValue={currentUser.email}
                            value={values.email}
                            onChange={handleChange}
                            required>
                        </input>
                        : <span className="account__form-input-noedit">{currentUser.email}</span>
                    }
                    <span className="account__form-input-error" id="email-error"></span>
                </label>
                <span className="account__form-result" id="form-result">{formResultText}</span>
                {editMode
                    ? <button className="account__form-submit" type="submit" disabled={!formValidity}>Сохранить</button>
                    : <button className="account__form-submit" onClick={handleEditClick}>Редактировать</button>
                }
                <button type="button" className="account__signout" onClick={onLogOut}>Выйти из аккаунта</button>
            </form>
            <Preloader isOpen={isPreloaderOpen} />
        </section>
    )
}

export default Account;
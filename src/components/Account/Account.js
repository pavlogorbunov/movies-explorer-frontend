import React from 'react';

import Header from '../Header/Header';
import './account.css';

function Account({ currentName, currentEmail, edit }) {

    const [editMode, setEditMode] = React.useState(edit);

    function handleSubmit(evt) {
        evt.preventDefault();
        setEditMode(!editMode);
    }

    return (
        <section className="account">
            <Header nav={true} loggedIn={true} />
            <h2 className="account__header">Привет, {currentName}!</h2>
            <form className="account__form" onSubmit={handleSubmit}>
                <div className="account__form-label"><p className="account__form-input-name">Имя</p>
                    {editMode
                        ? <input type="text" className="account__form-input" defaultValue={currentName} minlength="2" required></input>
                        : <p className="account__form-input-noedit">{currentName}</p>
                    }
                </div>
                <div className="account__form-label"><p className="account__form-input-name">Email</p>
                    {editMode
                        ? <input type="email" className="account__form-input" defaultValue={currentEmail} required></input>
                        : <p className="account__form-input-noedit">{currentEmail}</p>
                    }
                </div>
                {editMode
                    ? <button className="account__form-submit" type="submit">Сохранить</button>
                    : <button className="account__form-submit" type="submit">Редактировать</button>
                }
                <button type="button" className="account__signout">Выйти из аккаунта</button>
            </form>
        </section>
    )
}

export default Account;
import React from 'react';

import Header from '../Header/Header';
import './account.css';

function Account({ currentName, currentEmail, edit }) {

    const [editMode, setEditMode] = React.useState(edit);

    // setEditMode(edit);
    // editMode = edit;

    function handleSubmit() {
        setEditMode(!editMode);
    }

    return (
        <>
            <Header nav={true} loggedIn={true} />
            <h2 className="account__header">Привет, {currentName}!</h2>
            <form action="#" className="account__form" onSubmit={handleSubmit}>
                <label className="account__form-label"><p className="account__form-input-name">Имя</p>
                    {editMode
                        ? <input type="text" className="account__form-input" defaultValue={currentName}></input>
                        : <p className="account__form-input-noedit">{currentName}</p>
                    }
                </label>
                <label className="account__form-label"><p className="account__form-input-name">Email</p>
                    {editMode
                        ? <input type="text" className="account__form-input" defaultValue={currentEmail}></input>
                        : <p className="account__form-input-noedit">{currentEmail}</p>
                    }
                </label>
                {editMode
                    ? <button className="account__form-submit" type="submit">Сохранить</button>
                    : <button className="account__form-submit" type="submit">Редактировать</button>
                }
                <button type="button" className="account__signout">Выйти из аккаунта</button>
            </form>
        </>
    )
}

export default Account;
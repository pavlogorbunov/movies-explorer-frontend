import React from 'react';

import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './main.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AuthContext } from '../../contexts/AuthContext';

function Main() {
    const { currentUser } = React.useContext(CurrentUserContext);
    const { auth, setAuth } = React.useContext(AuthContext);

    return (
        <>
            <Header nav={auth} loggedIn={auth}/>
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </>
    )
}

export default Main;
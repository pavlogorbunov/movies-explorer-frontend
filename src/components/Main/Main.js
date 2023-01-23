import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './main.css';

function Main() {
    return (
        <>
            <Header nav={false} loggedIn={false}/>
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
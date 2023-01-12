import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './movies.css';
import movies from '../../constants/constants';

function Movies() {
    return (
        <>
            <Header nav={true} loggedIn={true}/>
            <main className="main">
                <MovieSearchForm />
                <MoviesCardList cards={movies} n={9}/>
            </main>
            <Footer />
        </>
    )
}

export default Movies;
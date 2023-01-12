import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './savedmovies.css';
import movies from '../../constants/constants';

function Movies() {
    const savedMovies = movies.filter((el,i) => {
        return !((i+1)%3);
    });

    return (
        <>
            <Header nav={true} loggedIn={true}/>
            <main className="main">
                <MovieSearchForm />
                <MoviesCardList cards={savedMovies} n={6} />
            </main>
            <Footer />
        </>
    )
}

export default Movies;
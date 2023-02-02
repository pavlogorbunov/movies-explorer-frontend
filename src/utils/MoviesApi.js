function getMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies/', {
        method: 'GET'
    })
}

export default getMovies;
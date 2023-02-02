import { accesOptions } from './constants';

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.authHeaders;
        this._reqOptions = options.reqOptions;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }

    cardTranslation(movie) {
        return {
            "country": movie.country,
            "director": movie.director,
            "duration": movie.duration,
            "year": movie.year,
            "description": movie.description,
            "image": mainApi._baseUrl + movie.image.url,
            "trailerLink": movie.trailerLink,
            "thumbnail": mainApi._baseUrl + movie.image.previewUrl,
            "movieId": movie.id,
            "nameRU": movie.nameRU,
            "nameEN": movie.nameEN,
        };
    }

    patchUser(name, email) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this._headers,
            ...this._reqOptions,
            body: JSON.stringify({ "name": name, "email": email })
        }).then(this._checkResponse);
    }

    postMovie(card) {
        return fetch(this._baseUrl + '/movies', {
            method: 'POST',
            headers: this._headers,
            ...this._reqOptions,
            body: JSON.stringify(card)
        }).then(this._checkResponse);
    }

    deleteMovie(card) {
        return fetch(this._baseUrl + '/movies/' + card.movieId, {
            method: 'DELETE',
            headers: this._headers,
            ...this._reqOptions,
        }).then(this._checkResponse);
    }

    getSavedMovies() {
        return fetch(this._baseUrl + '/movies', {
            method: 'GET',
            headers: this._headers,
            ...this._reqOptions
        }).then(this._checkResponse);
    }
}

const mainApi = new MainApi(accesOptions);

export { mainApi };
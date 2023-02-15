import { accesOptions } from './constants';

class Auth {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.authHeaders;
        this._reqOptions = options.reqOptions;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then(err => Promise.reject(err));
        }
    }

    signIn({ email, password }) {
        return fetch(this._baseUrl + '/signin/', {
            method: 'POST',
            headers: this._headers,
            ...this._reqOptions,
            body: JSON.stringify({
                password: password,
                email: email
            })
        }).then(this._checkResponse);
    }

    signUp({ name, email, password }) {
        return fetch(this._baseUrl + '/signup/', {
            method: 'POST',
            headers: this._headers,
            mode: 'cors',
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
        }).then(this._checkResponse);
    }

    checkToken() {
        return fetch(this._baseUrl + '/users/me/', {
            method: 'GET',
            ...this._reqOptions,
            headers: {
                ...this._headers,
            }
        }).then(this._checkResponse);
    }

    logout() {
        return fetch(this._baseUrl + '/logout/', {
            method: 'POST',
            headers: this._headers,
            ...this._reqOptions,
        })
        .then(this._checkResponse);
    }
}

const authorization = new Auth(accesOptions);

export { authorization };
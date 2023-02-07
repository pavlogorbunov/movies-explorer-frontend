const accesOptions = {
    baseUrl: 'https://api.movies-explorer.pvg.nomoredomains.club',
    // baseUrl: 'http://localhost:4000',
    reqOptions: {
        credentials: 'include',
        mode: 'cors',
    },
    authHeaders: {
        "Content-Type": "application/json",
    }
}

const validationOptions = {
    validationRegexps: {
        email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, // eslint-disable-line
        password: /^[\S]{6,}$/, // eslint-disable-line
        name: /^[a-zа-яё\s-]{2,}$/ // eslint-disable-line
    },
    validationErrorTexts: {
        email: 'Некорректный e-mail.',
        password: 'Латиница, кириллица, спецсимволы. Минимальная длина 6 символов.',
        name: 'Латиница, кириллица, пробелы и дефисы. Минимальная длина 2 символа.'
    }
}

const MOVIES_FETCH_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';

export { accesOptions, validationOptions, MOVIES_FETCH_ERROR };
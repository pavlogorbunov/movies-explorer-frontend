const accesOptions = {
    // baseUrl: 'https://api.movies-explorer.pvg.nomoredomains.club',
    baseUrl: 'http://localhost:4000',
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

export { accesOptions, validationOptions };
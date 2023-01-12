import './input.css';

function Input({type, placeholder}) {
    return (
        <label className="input__label">
            <span className="input__label-header">{type}</span>
            <input type="text" placeholder={placeholder} className="input__input"></input>
            <span className="input__error input__error_hidden">error</span>
        </label>
    )
}

export default Input;
import { useState, useEffect, useContext } from "react";
import { validationOptions } from "./constants";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const regexps = validationOptions.validationRegexps;
const errors = validationOptions.validationErrorTexts;

function showInputError(inputName, text) {
    const errorElement = document.getElementById(inputName + '-error');
    errorElement.innerText = text;
}

function hideInputError(inputName) {
    const errorElement = document.getElementById(inputName + '-error');
    errorElement.innerText = '';
}

function useValidation() {
    const { currentUser } = useContext(CurrentUserContext);
    const [formValidity, setFormValidity] = useState(false);
    const [values, setValues] = useState({ name: currentUser.name, email: currentUser.email, password: '' });
    const [validity, setValidity] = useState({});

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
        if (regexps[e.target.name].test(e.target.value.toLowerCase())) {
            hideInputError(e.target.name);
            setValidity({ ...validity, [e.target.name]: true });
        } else {
            showInputError(e.target.name, errors[e.target.name]);
            setValidity({ ...validity, [e.target.name]: false });
        }
    }

    useEffect(checkFormValidity, [validity]);

    function checkFormValidity() {
        setFormValidity(!Object.values(validity).includes(false));
    }

    return [formValidity, handleChange, values];
}

export default useValidation;
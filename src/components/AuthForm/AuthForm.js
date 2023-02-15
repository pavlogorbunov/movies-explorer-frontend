import React from 'react';

import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import './authform.css';

function AuthForm({ type, action }) {
    return (
        <>
            {type === 'sign-up' &&
                <SignUp action={action} />
            }
            {type === 'sign-in' &&
                <SignIn action={action} />
            }
        </>
    )
}

export default AuthForm;
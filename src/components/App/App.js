import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import AuthForm from '../AuthForm/AuthForm';
import Account from '../Account/Account';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import { authorization } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AuthContext } from '../../contexts/AuthContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '', _id: '' });
  const [auth, setAuth] = React.useState({ isFetching: true, email: null });

  const navigate = useNavigate();

  React.useEffect(() => {
    setAuth(auth => ({ ...auth, isFetching: true }));
    authorization.checkToken()
      .then((data) => {
        setAuth({ isFetching: false, email: data.email });
        setCurrentUser({ name: data.name, email: data.email, _id: data._id });
      })
      .catch((err) => {
        setAuth({ isFetching: false, email: null });
      });
  }, [])

  function onSignUp(name, email, password) {
    return authorization.signUp({ name, email, password }).then(() => {
      authorization.signIn({ email, password })
        .then(() => {
          authorization.checkToken()
            .then((data) => {
              setAuth({ isFetching: false, email: data.email });
              setCurrentUser({ name: data.name, email: data.email, _id: data._id });
              navigate('/movies');
            })
        });
    });
  }

  function onSignIn(email, password) {
    return authorization.signIn({ email, password })
      .then(() => {
        authorization.checkToken()
          .then((data) => {
            setAuth({ email: data.email, isFetching: false });
            setCurrentUser({ name: data.name, email: data.email, _id: data._id });
            navigate('/movies');
          })
      });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }} >
      <AuthContext.Provider value={{ auth, setAuth }} >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRoute auth={auth} />}>
            <Route path="/movies" element={<Movies type='movies' />} />
          </Route>
          <Route path="/saved-movies" element={<ProtectedRoute auth={auth} />}>
            <Route path="/saved-movies" element={<Movies type='saved-movies' />} />
          </Route>
          <Route path="/account" element={<ProtectedRoute auth={auth} />}>
            <Route path="/account" element={<Account currentName={'Павел'} currentEmail={'email@gmail.com'} edit={false} />} />
          </Route>
          <Route path="/sign-up" element={<AuthForm type='sign-up' action={onSignUp} />} />
          <Route path="/sign-in" element={<AuthForm type='sign-in' action={onSignIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

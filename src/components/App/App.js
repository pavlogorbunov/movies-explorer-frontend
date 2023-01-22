import React from 'react';
import { Route, Routes } from "react-router-dom";

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import AuthForm from '../AuthForm/AuthForm';
import Account from '../Account/Account';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<SavedMovies />} />
      <Route path="/sign-up" element={<AuthForm type='sign-up' />} />
      <Route path="/sign-in" element={<AuthForm type='sign-in' />} />
      <Route path="/account" element={<Account currentName={'Павел'} currentEmail={'email@gmail.com'} edit={false} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/user/register/RegisterLayout';
import RetrievePage from './pages/user/retrieve/RetrieveLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/user'}>
          <Route path={'register'} element={<RegisterPage />} />
          <Route path={'recovery/password'} element={<RetrievePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

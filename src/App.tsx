import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './components/home/homelayout/HomeLayout';
import RegisterLayout from './components/user/register/registerlayout/RegisterLayout';
import RetrieveLayout from './components/user/retrieve/retrievelayout/RetrieveLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<HomeLayout />} />
        <Route path={'/user'}>
          <Route path={'register'} element={<RegisterLayout />} />
          <Route path={'recovery/password'} element={<RetrieveLayout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

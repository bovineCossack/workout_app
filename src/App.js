import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginText from './components/UI/LoginText/LoginText';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthContext from './store/authContext';


function App() {
  const gotToken = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logout() {
    setIsLoggedIn(false);
  }
  function login() {
    setIsLoggedIn(true);
  }

  const currentContextValue = {
    isLoggedIn,
    logout,
    login,
  };

  useEffect(() => { }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={currentContextValue}>
      <Routes>
        <Route exact path='/' element={gotToken ? <Home /> : <LoginText />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;

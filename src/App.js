import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginText from './components/UI/LoginText/LoginText';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthContext from './store/authContext';
import Button from './components/UI/Button/Button';
import { useContext } from 'react';


function App() {
  // const gotToken = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const contextValue = useContext(AuthContext);


  function logout() {
    setIsLoggedIn(false);
    console.log('logout === logout');
  }
  function login() {
    setIsLoggedIn(true);
    console.log('login === login');

  }

  const currentContextValue = {
    isLoggedIn,
    logout,
    login,
  };

  useEffect(() => { console.log('isloggedin', isLoggedIn) }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={currentContextValue}>
      <Header />
      <Routes>
        <Route exact path='/' element={contextValue.isLoggedIn === true ? <Home /> : <LoginText />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;

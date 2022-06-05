import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthContext from './store/authContext';
import { useContext } from 'react';
import LoginText from './components/UI/LoginText/LoginText';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);



  function logout() {
    authCtx.logout();
    setIsLoggedIn(false);
    localStorage.removeItem('token')
    navigate('/login', { redirect: true });
    // console.log('logout === logout');
  }
  function login() {
    setIsLoggedIn(true);
    // console.log('login === login');

  }

  const currentContextValue = {
    isLoggedIn,
    logout,
    login,
  };

  // useEffect(() => { console.log('isloggedin', isLoggedIn) }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={currentContextValue}>
      <Header />
      <Routes>
        <Route exact path='/' element={currentContextValue.isLoggedIn ? <Home /> : <LoginText />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={currentContextValue.isLoggedIn ? <Add /> : <LoginText />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;

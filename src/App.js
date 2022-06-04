import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginText from './components/UI/LoginText/LoginText';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthContext from './store/authContext';
import { useContext } from 'react';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();



  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem('token')
    navigate('/login', { redirect: true });
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
        <Route exact path='/' element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<PrivateRoute> <Add /> </PrivateRoute>} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;

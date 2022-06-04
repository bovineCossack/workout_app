import React from 'react';
import LoginText from './UI/LoginText/LoginText';

const PrivateRoute = ({ children }) => {
  if (localStorage.getItem('token')) {
    return children;
  } else return <LoginText />;
};

export default PrivateRoute;

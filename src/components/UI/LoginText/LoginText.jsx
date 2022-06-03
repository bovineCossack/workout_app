import React from 'react';
import * as S from './LoginText.styles';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const LoginText = () => {
  return (
    <S.Login>
      <h2>You are not logged in</h2>
      <p>Please log in</p>
      <NavLink to="login">
        <Button>Login</Button>
      </NavLink>
      <p>No account? Please register</p>
      <NavLink to="register">
        <Button>Register</Button>
      </NavLink>
    </S.Login>
  );
};

export default LoginText;

import React, { Link } from 'react';
import * as S from './LoginText.styles';
import Button from '../Button/Button';

function LoginText() {
  return (
    <S.Login>
      <h2>You are not logged in</h2>
      <p>Please log in</p>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      <p>No account? Please register</p>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </S.Login>
  );
}

export default LoginText;

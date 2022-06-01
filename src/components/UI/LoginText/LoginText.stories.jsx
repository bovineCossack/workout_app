import React from 'react';
import LoginText from './LoginText';
import Button from '../Button/Button';

export function Default() {
  <LoginText>
    <h2>You are not logged in</h2>
    <p>Please log in</p>
    <Button>Login</Button>
    <p>No account? Please register</p>
    <Button>Register</Button>
  </LoginText>;
}

export default {
  title: 'LoginText',
  component: LoginText,
};

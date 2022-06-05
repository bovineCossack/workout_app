import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendAuthFetch } from '../helpers/helper';
import AuthContext from '../store/authContext';
import Button from '../components/UI/Button/Button';
import InputBox from '../components/UI/InputBox/InputBox';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import Form from '../components/UI/Form/Form';

const initErrors = {
  email: '',
  password: '',
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    const isErrorEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorEmpty) {
      setIsError(true);
    }
  }, [email, password, errorObj]);

  async function sendFetch() {
    const loginObj = {
      email: email,
      password: password,
    };
    const resp = await sendAuthFetch('login', loginObj);
    console.log('resp ===', resp);
    if (resp.success === true) {
      localStorage.setItem('token', resp.data);
      authCtx.login();
      navigate('/', { replace: true });
    }
    if (resp.success === false) {
      setIsError(true);
      return false;
    }
  }

  async function loginHandler(e) {
    setIsError(false);
    setErrorObj(initErrors);
    e.preventDefault();
    sendFetch();
    if (email.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        email: 'Email cannot be blank',
      }));
    }
    if (password.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        password: 'Password cannot be blank',
      }));
    }
    if (isError) {
      setErrorObj(() => ({
        email: 'Email or password incorrect',
        password: 'Email or password incorrect',
      }));
    }
  }

  return (
    <ContentWrapper>
      <h1>Login</h1>
      <Form onSubmit={loginHandler}>
        {isError && <h3>Please check the fields</h3>}
        <InputBox
          handleChange={(e) => setEmail(e)}
          type="email"
          placeholder="Enter you email here"
          name="email"
        />
        {errorObj.email && <p>{errorObj.email}</p>}
        <InputBox
          handleChange={(e) => setPassword(e)}
          type="password"
          placeholder="Enter your password here"
          name="password"
        />
        {errorObj.password && <p>{errorObj.password}</p>}
        <Button type="submit">Login</Button>
      </Form>
    </ContentWrapper>
  );
}

export default Login;

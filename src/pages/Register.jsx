import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendAuthFetch } from '../helpers/helper';
import AuthContext from '../store/authContext';
import Button from '../components/UI/Button/Button';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import InputBox from '../components/UI/InputBox/InputBox';

const initErrors = {
  email: '',
  password: '',
};

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);
  // const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    const isErrorEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorEmpty) {
      setIsError(true);
    }
  }, [email, password, errorObj]);
  async function sendFetch() {
    const RegisterObj = {
      email: email,
      password: password,
    };
    const resp = await sendAuthFetch('/register', RegisterObj);
    console.log('resp ===', resp);
    if (resp.success === true) {
      navigate('/login', { replace: true });
    }
    if (resp.success === false) {
      return false;
    }
  }

  async function registerHandler(e) {
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
      return;
    }
  }

  return (
    <ContentWrapper>
      <h1>Register</h1>
      <form onSubmit={registerHandler}>
        {isError && <h3>Please check the form</h3>}
        <InputBox
          onChange={(e) => setEmail(e)}
          type="email"
          placeholder="Enter you email here"
          name="email"
        />
        {errorObj.email && <p>{errorObj.email}</p>}
        <InputBox
          onChange={(e) => setPassword(e)}
          type="password"
          placeholder="Enter your password here"
          name="password"
        />
        {errorObj.password && <p>{errorObj.password}</p>}
        <Button type="submit">Register</Button>
      </form>
    </ContentWrapper>
  );
}

export default Register;

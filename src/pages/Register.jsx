import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendAuthFetch } from '../helpers/helper';
import Button from '../components/UI/Button/Button';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import InputBox from '../components/UI/InputBox/InputBox';
import Form from '../components/UI/Form/Form';

const initErrors = {
  email: '',
  password: '',
};

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);
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
    const resp = await sendAuthFetch('register', RegisterObj);
    if (resp.success === true) {
      navigate('/login', { replace: true });
    }
    if (resp.success === false) {
      setIsError(true);
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
  }

  return (
    <ContentWrapper>
      <h1>Register</h1>
      <Form onSubmit={registerHandler}>
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
        <Button type="submit">Register</Button>
      </Form>
    </ContentWrapper>
  );
}

export default Register;

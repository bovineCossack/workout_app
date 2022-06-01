import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import InputBox from '../components/UI/InputBox/InputBox';
import Content from '../components/UI/Content/Content';
import Header from '../components/Header/Header';
import { PopUp } from '../components/UI/PopUp/PopUp.styles';

const Login = () => {
  const [error, setError] = useState(false);
  const [userData, setuserData] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigate();

  return (
    <Content>
      {error && <PopUp handleClose={() => setError(false)}>{error}</PopUp>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const res = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/auth/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            }
          );
          const data = await res.json();

          if (data) {
            localStorage.setItem('token', data.token);
            return navigation('/');
          }

          setError(data.err || 'Unexpected error');
        }}
      >
        <InputBox
          label="Email"
          type="email"
          name="email"
          placeholder="email"
          handleChange={(email) => setuserData({ ...userData, email })}
        />
        <InputBox
          label="Password"
          type="password"
          name="pass"
          placeholder="password"
          handleChange={(password) => setuserData({ ...userData, password })}
        />
        <Button type="submit">Login</Button>
      </form>
    </Content>
  );
};
export default Login;

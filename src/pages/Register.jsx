import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { InputBox } from '../components/InputBox';
import Content from '../components/Content/Content';
import { Header } from '../components/Header';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await res.json();

      alert(data.msg || data.err || 'Unknown error');
      if (data.msg === 'Incorrect data entered. Please revise.' || data.error) {
        return;
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error.message || 'Unknown error');
    }
  };
  return (
    <>
      <Header>
        <Link to="/" className="home">
          Home
        </Link>
      </Header>
      <Content>
        <form onSubmit={onRegister}>
          <InputBox
            name="email"
            placeholder="your@email.com"
            label="Email"
            type="email"
            handleChange={(value) => setUserData({ ...userData, email: value })}
          />
          <InputBox
            name="password"
            placeholder="Password"
            label="Password"
            type="password"
            handleChange={(value) =>
              setUserData({ ...userData, password: value })
            }
          />
          <Button>Register</Button>
        </form>
      </Content>
    </>
  );
};

export default Register;

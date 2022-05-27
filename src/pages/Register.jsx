import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import Content from '../components/Content/Content';
import { Header } from '../components/Header';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
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
          body: JSON.stringify(userDetails),
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
          {/* .map setUserData({...userDetails}) here */}
        </form>
      </Content>
    </>
  );
};

export default Register;

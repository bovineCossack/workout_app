import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/authContext';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  function logout() {
    authCtx.logout();
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/', { redirect: true });
  }

  return (
    <S.Header>
      <NavLink to={'/'} style={{ textDecoration: 'none' }}>
        Home
      </NavLink>
      <NavLink to={'/register'} style={{ textDecoration: 'none' }}>
        Register
      </NavLink>
      <NavLink to={'/login'} style={{ textDecoration: 'none' }}>
        Login
      </NavLink>
      <NavLink to={'/add'} style={{ textDecoration: 'none' }}>
        Add
      </NavLink>
      {authCtx.isLoggedIn === true && (
        <Button
          handleClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      )}
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

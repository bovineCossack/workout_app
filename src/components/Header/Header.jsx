import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

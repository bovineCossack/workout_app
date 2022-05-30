import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        Home
      </Link>
      <Link to={'/register'} style={{ textDecoration: 'none' }}>
        Register
      </Link>
      <Link to={'/login'} style={{ textDecoration: 'none' }}>
        Login
      </Link>
      <Link to={'/add'} style={{ textDecoration: 'none' }}>
        Add
      </Link>
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

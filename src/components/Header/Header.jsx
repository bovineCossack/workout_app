import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';
import Navigation from '../Navigation/Navigation';

const links = [
  { title: 'Start', link: '/' },
  { title: 'Login', link: '/login' },
  { title: 'Register', link: '/register' },
  { title: 'Workout Plans', link: '/plans' },
];

const Header = ({ children }) => {
  return (
    <S.Header>
      {children}
      <Navigation links={links} />
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

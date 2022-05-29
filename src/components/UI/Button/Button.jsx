import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

function Button({ handleClick, children }) {
  return <S.Button onClick={handleClick}>{children}</S.Button>;
}

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Button;

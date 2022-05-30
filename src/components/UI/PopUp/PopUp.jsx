import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PopUp.styles.js';

const PopUp = ({ children, handleClose }) => {
  return (
    <S.PopUp>
      <S.Icon onClick={handleClose}>x</S.Icon>
      {children}
    </S.PopUp>
  );
};

PopUp.propTypes = {
  children: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PopUp;

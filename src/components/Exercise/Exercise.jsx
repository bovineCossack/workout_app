import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Exercise.styles';

const Exercise = ({ children }) => {
  return <S.Exercise>{children}</S.Exercise>;
};

Exercise.propTypes = {
  children: PropTypes.node,
};

export default Exercise;

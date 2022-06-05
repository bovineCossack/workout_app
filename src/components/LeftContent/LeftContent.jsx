import React from 'react';
import PropTypes from 'prop-types';
import * as S from './LeftContent.styles';

const LeftContent = ({ children }) => {
  return <S.LeftContent>{children}</S.LeftContent>;
};

LeftContent.propTypes = {
  children: PropTypes.node,
};

export default LeftContent;

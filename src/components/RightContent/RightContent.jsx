import React from 'react';
import PropTypes from 'prop-types';
import * as S from './RightContent.styles';

const RightContent = ({ children }) => {
  return <S.RightContent>{children}</S.RightContent>;
};

RightContent.propTypes = {
  children: PropTypes.node,
};

export default RightContent;

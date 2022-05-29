import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Content.styles';

const Content = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;

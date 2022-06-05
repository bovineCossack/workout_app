import React from 'react';
import * as S from './ContentWrapper.styles';

const ContentWrapper = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};

export default ContentWrapper;

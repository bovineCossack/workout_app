import React from 'react';
import * as S from './Form.styles';

const Form = ({ children, onSubmit }) => {
  return <S.Form onSubmit={onSubmit}>{children}</S.Form>;
};

export default Form;

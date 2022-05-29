import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Exercise.styles';

const Exercise = ({ id, name, category1, category2 }) => {
  return (
    <S.Exercise
      id={id}
      name={name}
      category1={category1}
      category2={category2}
    ></S.Exercise>
  );
};

Exercise.propTypes = {
  children: PropTypes.node,
};

export default Exercise;

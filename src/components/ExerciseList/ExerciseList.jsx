import React from 'react';
import * as S from './ExerciseList.styles';
import Exercise from '../Exercise/Exercise';

const ExerciseList = ({ exercises }) => {
  return (
    <S.ExerciseList>
      {exercises &&
        exercises.map((exercise) => (
          <Exercise>
            <S.ExerciseName>{`${exercise.name}`}</S.ExerciseName>
            <S.ExerciseCategory>{`Primary muscle group: ${exercise.category1}`}</S.ExerciseCategory>
            <S.ExerciseCategory>{`Secondary muscle group: ${exercise.category2}`}</S.ExerciseCategory>
          </Exercise>
        ))}
    </S.ExerciseList>
  );
};

export default ExerciseList;

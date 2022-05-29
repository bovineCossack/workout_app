import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ExerciseList.styles';
import Exercise from '../Exercise/Exercise';
import Button from '../UI/Button/Button';

function ExerciseList(props) {
  if (props.items.length === 0) {
    <div>
      <h2>There are no exercises to display...</h2>
      <p>
        Please
        <Link to={'/add'}>
          <Button>Add</Button>
        </Link>
        your first exercise!
      </p>
    </div>;
  }

  return (
    <S.ExerciseList>
      {props.items.map((skillObj) => (
        <Exercise key={skillObj.id} {...skillObj} onDelete={props.onDelete} />
      ))}
    </S.ExerciseList>
  );
}

export default ExerciseList;

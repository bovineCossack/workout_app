import React from 'react';
import { Link } from 'react-router-dom';
// import * as S from './ExerciseList.styles';
import Exercise from '../Exercise/Exercise';
import Button from '../UI/Button/Button';
import { Content } from '../UI/Content/Content.styles';
import Grid from '../UI/Grid/Grid';

function ExerciseList({ items, onDelete }) {
  if (items.length === 0) {
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
    <Content>
      <Grid>
        <>
          {items.length > 0 &&
            items.map((exObj) => <Exercise key={exObj.id} {...exObj} />)}
        </>
      </Grid>
    </Content>
  );
}

export default ExerciseList;

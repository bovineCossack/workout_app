import React, { useEffect, useState } from 'react';

import * as S from './ExerciseList.styles';
import Exercise from '../Exercise/Exercise';
import Grid from '../UI/Grid/Grid';
import { deleteFetch, getFetchWithToken } from '../../helpers/helper';
import Button from '../UI/Button/Button';

function ExerciseList() {
  const [exerciseArr, setExerciseArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const exerciseFromDb = await getFetchWithToken('exercises');
    setExerciseArr(exerciseFromDb);
  }

  async function deleteHandler(id) {
    const delResult = await deleteFetch('exercises', id);
    if (delResult) {
      getData();
    }
  }

  return (
    <Grid>
      {exerciseArr.data &&
        exerciseArr.data.map((exObj) => (
          <Exercise key={exObj.id}>
            <S.ExName>{exObj.name}</S.ExName>
            <S.ExCategory>Primary Muscle Group: {exObj.category1}</S.ExCategory>
            <S.ExCategory>
              Secondary Muscle Group: {exObj.category2}
            </S.ExCategory>
            <Button handleClick={() => deleteHandler(exObj.id)}>Delete</Button>
          </Exercise>
        ))}
    </Grid>
  );
}

export default ExerciseList;

import React, { useEffect, useState } from 'react';

import * as S from './ExerciseList.styles';
import Exercise from '../Exercise/Exercise';
import Grid from '../UI/Grid/Grid';
import { getFetchWithToken } from '../../helpers/helper';

function ExerciseList() {
  const [exerciseArr, setExerciseArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const exerciseFromDb = await getFetchWithToken('exercises');
    setExerciseArr(exerciseFromDb);
  }

  return (
    <Grid>
      {!exerciseArr.data && <p>Loading...</p>}
      {exerciseArr.data &&
        exerciseArr.data.map((exObj) => (
          <Exercise key={exObj.id}>
            <S.ExName>{exObj.name}</S.ExName>
            <S.ExCategory>Primary Muscle Group: {exObj.category1}</S.ExCategory>
            <S.ExCategory>
              Secondary Muscle Group: {exObj.category2}
            </S.ExCategory>
          </Exercise>
        ))}
    </Grid>
  );
}

export default ExerciseList;

import React, { useEffect, useState } from 'react';

import * as S from './ExerciseList.styles';
import Exercise from '../Exercise/Exercise';
import Grid from '../UI/Grid/Grid';

const getData = async () => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/exercises`, {
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  const data = await res.json();
  return data;
};

const ExerciseList = () => {
  const [data, setData] = useState([]);
  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );
  return (
    <Grid>
      {!data && <p>Loading...</p>}
      {data.data.map((exObj) => (
        <Exercise key={exObj.id}>
          <S.ExName>{exObj.name}</S.ExName>
          <S.ExCategory>{exObj.category1}</S.ExCategory>
          <S.ExCategory>{exObj.category2}</S.ExCategory>
        </Exercise>
      ))}
    </Grid>
  );
};

export default ExerciseList;

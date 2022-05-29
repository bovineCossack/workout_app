import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import ExerciseList from '../components/ExerciseList/ExerciseList';
import { getFetch } from '../helpers/helper';

const Home = () => {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );
  async function getData() {
    const exercisesFromDb = await getFetch('/exercises');
    setData(exercisesFromDb);
  }
  function deleteHandler(exerciseIdToDelete) {
    setData((prevState) => {
      return prevState.filter((exObj) => exObj.id !== exerciseIdToDelete);
    });
  }
  return (
    <>
      <Header>
        <Link to="/" className="home">
          Home
        </Link>
      </Header>
      <h2>Your Exercises</h2>
      <ExerciseList items={data} onDelete={deleteHandler} />
    </>
  );
};

export default Home;

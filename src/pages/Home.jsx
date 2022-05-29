import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import ExerciseList from '../components/ExerciseList/ExerciseList';

const getData = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/exercises`, {
      headers: {
        authorization: `Bearer: ${localStorage.getItem('token')}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

const Home = () => {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );

  return (
    <>
      <Header>
        <Link to="/" className="home">
          Home
        </Link>
      </Header>
      {data.length > 0 && <ExerciseList exercises={data} />}
    </>
  );
};

export default Home;

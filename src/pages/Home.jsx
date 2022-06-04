import ExerciseList from '../components/ExerciseList/ExerciseList';
import { Button } from '../components/UI/Button/Button.styles';
import Content from '../components/UI/Content/Content';
import AuthContext from '../store/authContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  function logout() {
    authCtx.logout();
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    // navigate('/', { redirect: true });
    console.log('logout === logout');
  }

  return (
    <Content>
      <h2>Your Exercises</h2>
      <ExerciseList />
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </Content>
  );
};

export default Home;

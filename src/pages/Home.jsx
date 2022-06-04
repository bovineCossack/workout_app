import ExerciseList from '../components/ExerciseList/ExerciseList';
import { Button } from '../components/UI/Button/Button.styles';
import Content from '../components/UI/Content/Content';
import AuthContext from '../store/authContext';
import { useContext } from 'react';

const Home = () => {
  const contextValue = useContext(AuthContext);
  return (
    <Content>
      <h2>Your Exercises</h2>
      <ExerciseList />
      <Button
        onClick={() => {
          contextValue.logout();
        }}
      >
        Logout
      </Button>
    </Content>
  );
};

export default Home;

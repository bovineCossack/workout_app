import Header from '../components/Header/Header';
import ExerciseList from '../components/ExerciseList/ExerciseList';
import Content from '../components/UI/Content/Content';

const Home = () => {
  return (
    <Content>
      <Header />
      <h2>Your Exercises</h2>
      <ExerciseList />
    </Content>
  );
};

export default Home;

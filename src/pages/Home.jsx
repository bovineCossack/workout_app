import ExerciseList from '../components/ExerciseList/ExerciseList';
import Hero from '../components/Hero/Hero';
import LeftContent from '../components/LeftContent/LeftContent';
import FlexBox from '../components/UI/FlexBox/FlexBox';
import RightContent from '../components/RightContent/RightContent';

const Home = () => {
  return (
    <FlexBox>
      <LeftContent>
        <Hero
          title="Welcome to your workout app!"
          text="Here is your current exercise database:"
        />
      </LeftContent>
      <RightContent>
        <ExerciseList />
      </RightContent>
    </FlexBox>
  );
};

export default Home;

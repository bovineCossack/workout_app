import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Container from './Container/Container';
import * as S from './LoginText.styles';

function LoginText() {
  return (
    <Container>
      <S.Login>
        <h2>You are not logged in</h2>
        <p>Please log in to proceed</p>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <p>Do not have an account?</p>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </S.Login>
    </Container>
  );
}

export default LoginText;

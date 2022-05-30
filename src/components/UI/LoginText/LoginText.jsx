import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Content from '../Content/Content';
import * as S from './LoginText.styles';

function LoginText() {
  return (
    <Content>
      <S.Login>
        <h2>You are not logged in</h2>
        <p>Please log in</p>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <p>No account? Please register</p>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </S.Login>
    </Content>
  );
}

export default LoginText;

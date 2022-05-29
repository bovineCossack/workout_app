import { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../store/authContext';
import LoginText from '../components/UI/LoginText/LoginText';

function ProtectedRoute({ children, ...rest }) {
  const authCtx = useContext(AuthContext);
  return (
    <Route {...rest}>{authCtx.isLoggedIn ? children : <LoginText />}</Route>
  );
}

export default ProtectedRoute;

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Main } from './views/Main';
import { Home } from './views/Home';
import { Modal } from './components/Modal';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import styled from 'styled-components';
import { AuthContext, AuthProvider } from './api/auth';
import { useContext } from 'react';

const Default = styled.div`
  width: 100%;
`;

const AuthRoute = ({ children }) => {
  const user = useContext(AuthContext);
  if (user === undefined) {
    return null;
  }
  if (user != null) {
    return children;
  }
  return <Navigate to="/" />;
};

const NoAuthRoute = ({ children }) => {
  const user = useContext(AuthContext);
  if (user === undefined) {
    return null;
  }
  if (user != null) {
    return <Navigate to="home" />;
  }
  return children;
};

const Router = () => {
  let location = useLocation();
  let background = location.state;

  return (
    <Default>
      <AuthProvider>
        <Routes location={background || location}>
          <Route
            exact
            path="/"
            element={
              <NoAuthRoute>
                <Main />
              </NoAuthRoute>
            }
          />
          <Route
            path="home"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="i/flow" element={<Modal />}>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </AuthProvider>
      {background && (
        <Routes>
          <Route path="i/flow" element={<Modal />}>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      )}
    </Default>
  );
};

export default Router;

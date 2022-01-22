import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Main } from './views/Main';
import { Home } from './views/Home';
import { Modal } from './components/Modal';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import styled from 'styled-components';
import { AuthContext, AuthProvider } from './api/auth';
import { useContext } from 'react';
import { Profile } from './views/Profile';
import { ProfileEdit } from './components/ProfileEdit';

const Default = styled.div`
  width: 100%;
  height: 100%;
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
    return <Navigate to="/home" />;
  }
  return children;
};

const Router = () => {
  let location = useLocation();
  let state = location.state;

  return (
    <Default>
      <AuthProvider>
        <Routes location={(state ? state.background : null) || location}>
          <Route path="/">
            <Route
              index
              element={
                <NoAuthRoute>
                  <Main />
                </NoAuthRoute>
              }
            />
            <Route
              path="/home"
              element={
                <AuthRoute>
                  <Home />
                </AuthRoute>
              }
            />
            <Route path="/i/flow" element={<Modal />}>
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="/:users" element={<Profile />} />
          </Route>
        </Routes>

        {(state ? state.background : null) && (
          <Routes>
            <Route path="/i/flow" element={<Modal />}>
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="/settings" element={<Modal />}>
              <Route path="profile" element={<ProfileEdit />} />
            </Route>
          </Routes>
        )}
      </AuthProvider>
    </Default>
  );
};

export default Router;

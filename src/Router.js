import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './views/Home';
import { Modal } from './components/Modal';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setAll } from './app/slice/userSlice';
import { getUserData } from './api/database';
import defaultPhoto from './assets/defaultPhoto.png';

const Default = styled.div`
  height: 100%;
  width: 100%;
`;

const Router = () => {
  let location = useLocation();
  let state = location.state;

  const dispatch = useDispatch();

  const auth = getAuth();
  onAuthStateChanged(auth, (userCredentials) => {
    let name = '',
      user = '',
      photoURL = '';

    if (userCredentials) {
      if (userCredentials.photoURL) {
        photoURL = userCredentials.photoURL;
      } else photoURL = defaultPhoto;

      console.log('logged in');
      const uid = userCredentials.uid;
      getUserData(uid).then((obj) => {
        name = obj.name;
        user = `@${obj.user}`;
        dispatch(setAll({ name, user, photoURL }));
      });
    } else {
      console.log('logged out');
      dispatch(setAll(name, user, photoURL));
    }
  });

  return (
    <Default>
      <Routes location={state || location}>
        <Route path="/" element={<Home />} />
        <Route path="i/flow" element={<Modal />}>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>

      {state && (
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

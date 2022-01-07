import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Modal } from './components/Modal';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="i/flow" element={<Modal />}>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

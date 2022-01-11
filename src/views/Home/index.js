import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { Body } from '../../components/Body';
import { Sidebar } from '../../components/Sidebar';
import { Prompt } from '../../components/Prompt';

const Background = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
`;

export const Home = () => {
  const [displayPrompt, setDisplayPrompt] = useState(true);
  const auth = getAuth();
  onAuthStateChanged(auth, (cred) => {
    if (cred) {
      setDisplayPrompt(false);
    } else setDisplayPrompt(true);
  });

  return (
    <Background>
      <Sidebar />
      <Body />
      {displayPrompt ? <Prompt /> : null}
    </Background>
  );
};

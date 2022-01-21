import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Body } from '../../components/Body';
import { Sidebar } from '../../components/Sidebar';
import { Prompt } from '../../components/Prompt';
import { Compose } from '../../components/Compose';
import { Feed } from '../../components/Feed';
import { AuthContext } from '../../api/auth';

const Background = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-shrink: 0;
  width: 100%;
`;

const FeedDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  height: 1px;
  margin: 4px 0px;
  background-color: rgb(239, 243, 244);
`;

export const Home = () => {
  const uid = useContext(AuthContext);
  const [displayPrompt, setDisplayPrompt] = useState(true);

  useEffect(() => {
    if (uid) {
      setDisplayPrompt(false);
    } else setDisplayPrompt(true);
  }, [uid]);

  return (
    <Background>
      <Sidebar />
      <Body type="Home">
        <Compose />
        <FeedDivider />
        <Feed />
      </Body>
      {displayPrompt ? <Prompt /> : null}
    </Background>
  );
};

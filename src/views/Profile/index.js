import styled from 'styled-components';
import { Sidebar } from '../../components/Sidebar';
import { Body } from '../../components/Body';
import { useContext, useEffect, useState } from 'react';
import { getNumberOfFollowers, getUserDataFromHandle, getUserIDFromHandle } from '../../api/database';
import { useParams } from 'react-router-dom';
import { UserProfile } from '../../components/UserProfile';
import { UserFeed } from '../../components/UserFeed';
import { Prompt } from '../../components/Prompt';
import { AuthContext } from '../../api/auth';

const Background = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-shrink: 0;
  width: 100%;
`;

export const Profile = () => {
  const uid = useContext(AuthContext);
  const [user, setUser] = useState({});
  const params = useParams();
  const profileUser = params.users;
  const [profileUID, setProfileUID] = useState();
  const [displayPrompt, setDisplayPrompt] = useState(true);
  const [numberOfFollowers, setNumberOfFollowers] = useState(0);

  useEffect(() => {
    if (uid) {
      setDisplayPrompt(false);
    } else setDisplayPrompt(true);
  }, [uid]);

  useEffect(() => {
    if (!profileUser) return;
    getUserDataFromHandle(profileUser).then((user) => setUser(user));
    getUserIDFromHandle(profileUser).then((uid) => {
      setProfileUID(uid);
      getNumberOfFollowers(uid).then((number) => setNumberOfFollowers(number));
    });
  }, [profileUser]);

  return (
    <Background>
      <Sidebar />
      <Body type={user.name}>
        <UserProfile user={user} followers={numberOfFollowers}>
          <UserFeed user={profileUID} />
        </UserProfile>
      </Body>
      {displayPrompt ? <Prompt /> : null}
    </Background>
  );
};

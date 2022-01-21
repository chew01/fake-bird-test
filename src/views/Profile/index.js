import styled from 'styled-components';
import { Sidebar } from '../../components/Sidebar';
import { Body } from '../../components/Body';
import { useEffect, useState } from 'react';
import { getUserDataFromHandle, getUserIDFromHandle } from '../../api/database';
import { useParams } from 'react-router-dom';
import { UserProfile } from '../../components/UserProfile';
import { UserFeed } from '../../components/UserFeed';

const Background = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-shrink: 0;
  width: 100%;
`;

export const Profile = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const profileUser = params.users;
  const [uid, setUID] = useState();

  useEffect(() => {
    if (!profileUser) return;
    getUserDataFromHandle(profileUser).then((user) => setUser(user));
  }, [profileUser]);

  useEffect(() => {
    if (!profileUser) return;
    getUserIDFromHandle(profileUser).then((uid) => setUID(uid));
  }, [profileUser]);

  return (
    <Background>
      <Sidebar />
      <Body type={user.name}>
        <UserProfile>
          <UserFeed user={uid} />
        </UserProfile>
      </Body>
    </Background>
  );
};

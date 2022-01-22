import styled from 'styled-components';
import { Sidebar } from '../../components/Sidebar';
import { Body } from '../../components/Body';
import { useContext, useEffect, useState } from 'react';
import {
  addViewedUIDIntoCurrentUserFollowedList,
  checkIfCurrentUserFollowsViewedProfile,
  getNumberOfFollowers,
  getUserDataFromHandle,
  getUserIDFromHandle,
  removeViewedUIDIntoCurrentUserFollowedList,
} from '../../api/database';
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
  const currentUID = useContext(AuthContext);
  const [user, setUser] = useState({});
  const params = useParams();
  const profileUser = params.users;
  const [profileUID, setProfileUID] = useState();
  const [displayPrompt, setDisplayPrompt] = useState(true);
  const [numberOfFollowers, setNumberOfFollowers] = useState(0);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [isFollowedByCurrentUser, setIsFollowedByCurrentUser] = useState(false);

  useEffect(() => {
    if (currentUID) {
      setDisplayPrompt(false);
    } else setDisplayPrompt(true);
  }, [currentUID]);

  useEffect(() => {
    if (!profileUser || !currentUID) return;
    getUserDataFromHandle(profileUser).then((user) => setUser(user));
    getUserIDFromHandle(profileUser).then((uid) => {
      if (uid === currentUID) setIsCurrentUser(true);
      setProfileUID(uid);
      getNumberOfFollowers(uid).then((number) => setNumberOfFollowers(number));
      checkIfCurrentUserFollowsViewedProfile(currentUID, uid).then((result) => setIsFollowedByCurrentUser(result));
    });
  }, [profileUser, currentUID]);

  const handleFollow = () => {
    addViewedUIDIntoCurrentUserFollowedList(currentUID, profileUID);
  };

  const handleUnfollow = () => {
    removeViewedUIDIntoCurrentUserFollowedList(currentUID, profileUID);
  };

  return (
    <Background>
      <Sidebar />
      <Body type={user.name}>
        <UserProfile
          user={user}
          followers={numberOfFollowers}
          isCurrentUser={isCurrentUser}
          isFollowedByCurrentUser={isFollowedByCurrentUser}
          handleFollow={handleFollow}
          handleUnfollow={handleUnfollow}
        >
          <UserFeed user={profileUID} />
        </UserProfile>
      </Body>
      {displayPrompt ? <Prompt /> : null}
    </Background>
  );
};

import Logo from '../../assets/buttons/logo.svg';
import Home from '../../assets/buttons/home.svg';
import Explore from '../../assets/buttons/explore.svg';
import Notifications from '../../assets/buttons/notif.svg';
import Messages from '../../assets/buttons/message.svg';
import Bookmarks from '../../assets/buttons/bookmark.svg';
import Lists from '../../assets/buttons/list.svg';
import Profile from '../../assets/buttons/profile.svg';
import More from '../../assets/buttons/more.svg';
import Toggle from '../../assets/buttons/usertoggle.svg';
import defaultPhoto from '../../assets/defaultPhoto.png';

import {
  Header,
  NavContainer,
  UserContainer,
  LogoContainer,
  ButtonContainer,
  TweetContainer,
  MenuContainer,
  LogoLink,
  TweetButton,
  TweetText,
  User,
  UserPhoto,
  UserText,
  UserName,
  UserHandle,
  UserToggle,
  UserMenuContainer,
  Logout,
} from './style';
import { Button } from '../MenuButton';
import { useEffect, useState } from 'react';
import { logOut } from '../../api/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUserData } from '../../api/database';

export const Sidebar = () => {
  const [displayUserMenu, setDisplayUserMenu] = useState(false);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleUserMenu = () => {
    if (displayUserMenu) {
      setDisplayUserMenu(false);
    } else {
      setDisplayUserMenu(true);
    }
  };

  const handleLogOut = () => {
    logOut();
    setDisplayUserMenu(false);
    setLoggedIn(false);
  };

  useEffect(() => {
    const auth = getAuth();
    const user = {};
    onAuthStateChanged(auth, (cred) => {
      if (cred) {
        if (cred.photoURL) {
          user.photoURL = cred.photoURL;
        } else user.photoURL = defaultPhoto;

        const uid = cred.uid;
        getUserData(uid).then((obj) => {
          user.name = obj.name;
          user.user = `@${obj.user}`;
          setUser(user);
          setLoggedIn(true);
        });
      } else console.log('not logged in');
    });
  }, []);

  return (
    <Header>
      <MenuContainer>
        <NavContainer>
          <LogoContainer>
            <LogoLink href="/">
              <img src={Logo} alt="logo" />
            </LogoLink>
          </LogoContainer>
          <ButtonContainer>
            <nav>
              {loggedIn ? <Button to="/home" text="Home" img={Home} /> : null}
              <Button to="/explore" text="Explore" img={Explore} />
              {loggedIn ? (
                <Button
                  to="/notifications"
                  text="Notifications"
                  img={Notifications}
                />
              ) : null}
              {loggedIn ? (
                <Button to="/messages" text="Messages" img={Messages} />
              ) : null}
              {loggedIn ? (
                <Button to="/i/bookmarks" text="Bookmarks" img={Bookmarks} />
              ) : null}
              {loggedIn ? (
                <Button to="/lists" text="Lists" img={Lists} />
              ) : null}
              {loggedIn ? (
                <Button to="/profile" text="Profile" img={Profile} />
              ) : null}
              {loggedIn ? <Button to="/more" text="More" img={More} /> : null}
            </nav>
          </ButtonContainer>
          {loggedIn ? (
            <TweetContainer>
              <TweetButton href="/compose/tweet">
                <TweetText>Tweet</TweetText>
              </TweetButton>
            </TweetContainer>
          ) : null}
        </NavContainer>
        {loggedIn ? (
          <UserContainer>
            {displayUserMenu ? (
              <UserMenuContainer>
                <Logout onClick={handleLogOut}>Log out user</Logout>
              </UserMenuContainer>
            ) : null}
            <User onClick={toggleUserMenu}>
              <UserPhoto src={user.photoURL} height={'40px'} />
              <UserText>
                <UserName>{user.name}</UserName>
                <UserHandle>{user.user}</UserHandle>
              </UserText>
              <UserToggle>
                <img src={Toggle} alt="toggle" height="18.75px" />
              </UserToggle>
            </User>
          </UserContainer>
        ) : null}
      </MenuContainer>
    </Header>
  );
};

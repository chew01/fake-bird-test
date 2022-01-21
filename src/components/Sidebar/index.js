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
  MenuWrapper,
  MenuPosition,
} from './style';
import { Button } from '../MenuButton';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, logOut } from '../../api/auth';
import { getUserData } from '../../api/database';

export const Sidebar = () => {
  const uid = useContext(AuthContext);
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
    if (!uid) return;
    const user = {};
    getUserData(uid).then((obj) => {
      user.name = obj.name;
      user.user = obj.user;
      user.photoURL = obj.photoURL;
      setUser(user);
      setLoggedIn(true);
    });
  }, [uid]);

  return (
    <Header>
      <MenuPosition>
        <MenuWrapper>
          <MenuContainer>
            <NavContainer>
              <LogoContainer>
                <LogoLink href="/">
                  <img src={Logo} alt="logo" />
                </LogoLink>
              </LogoContainer>
              <ButtonContainer>
                <nav>
                  {loggedIn ? (
                    <Button to="/home" text="Home" img={Home} />
                  ) : null}
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
                    <Button
                      to="/i/bookmarks"
                      text="Bookmarks"
                      img={Bookmarks}
                    />
                  ) : null}
                  {loggedIn ? (
                    <Button to="/lists" text="Lists" img={Lists} />
                  ) : null}
                  {loggedIn ? (
                    <Button to={`/${user.user}`} text="Profile" img={Profile} />
                  ) : null}
                  {loggedIn ? (
                    <Button to="/more" text="More" img={More} />
                  ) : null}
                </nav>
              </ButtonContainer>
              {loggedIn ? (
                <TweetContainer>
                  <TweetButton to="/tweet/compose">
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
                    <UserHandle>@{user.user}</UserHandle>
                  </UserText>
                  <UserToggle>
                    <img src={Toggle} alt="toggle" height="18.75px" />
                  </UserToggle>
                </User>
              </UserContainer>
            ) : null}
          </MenuContainer>
        </MenuWrapper>
      </MenuPosition>
    </Header>
  );
};

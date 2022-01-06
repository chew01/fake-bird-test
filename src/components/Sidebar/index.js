import Logo from '../../assets/buttons/logo.svg';
import Home from '../../assets/buttons/home.svg';
import Explore from '../../assets/buttons/explore.svg';
import Notifications from '../../assets/buttons/notif.svg';
import Messages from '../../assets/buttons/message.svg';
import Bookmarks from '../../assets/buttons/bookmark.svg';
import Lists from '../../assets/buttons/list.svg';
import Profile from '../../assets/buttons/profile.svg';
import More from '../../assets/buttons/more.svg';
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
} from './style';
import { Button } from '../MenuButton';

export const Sidebar = () => {
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
              <Button to="/home" text="Home" img={Home} />
              <Button to="/explore" text="Explore" img={Explore} />
              <Button
                to="/notifications"
                text="Notifications"
                img={Notifications}
              />
              <Button to="/messages" text="Messages" img={Messages} />
              <Button to="/i/bookmarks" text="Bookmarks" img={Bookmarks} />
              <Button to="/lists" text="Lists" img={Lists} />
              <Button to="/profile" text="Profile" img={Profile} />
              <Button to="/more" text="More" img={More} />
            </nav>
          </ButtonContainer>
          <TweetContainer>
            <TweetButton href="/compose/tweet">
              <TweetText>Tweet</TweetText>
            </TweetButton>
          </TweetContainer>
        </NavContainer>
        <UserContainer>User</UserContainer>
      </MenuContainer>
    </Header>
  );
};

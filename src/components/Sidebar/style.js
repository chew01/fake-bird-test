import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MenuPosition = styled.div`
  width: 275px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

export const MenuWrapper = styled.div`
  position: fixed;
  height: 100%;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 275px;
  padding: 0px 12px;
  box-sizing: border-box;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const LogoContainer = styled.div`
  padding: 2px 0px;
`;

export const ButtonContainer = styled.div`
  margin: 2px 0px 4px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const TweetContainer = styled.div`
  width: 90%;
  margin: 16px 0px;
`;

export const LogoLink = styled.a`
  background-color: rgba(0, 0, 0, 0);
  min-width: 52px;
  min-height: 52px;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

export const TweetButton = styled(Link)`
  background-color: rgb(29, 155, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  min-height: 52px;
  border-radius: 9999px;
  padding: 0px 32px;
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
  text-decoration: none;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(26, 140, 216);
  }
`;

export const TweetText = styled.div`
  color: white;
  font-family: 'TwitterChirp';
  font-weight: 700;
  font-size: 17px;
`;

export const UserContainer = styled.div`
  margin: 12px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const User = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border-radius: 9999px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

export const UserPhoto = styled.img`
  border-radius: 9999px;
`;

export const UserText = styled.div`
  flex: 1 1 auto;
  margin: 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const UserName = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(15, 20, 25);
`;

export const UserHandle = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(83, 100, 113);
`;

export const UserToggle = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UserMenuContainer = styled.div`
  padding: 12px 0px;
  width: 300px;
  min-height: 30px;
  max-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: white;
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
    rgb(101 119 134 / 15%) 0px 0px 3px 1px;
  border-radius: 16px;
  z-index: 1;
`;

export const Logout = styled.div`
  display: flex;
  padding: 16px;
  width: 300px;
  box-sizing: border-box;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  transition-duration: 0.2s;
  cursor: pointer;
  color: rgb(15, 20, 25);

  &:hover {
    background-color: rgb(247, 249, 249);
  }
`;

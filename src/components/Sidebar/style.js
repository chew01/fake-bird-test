import styled from 'styled-components';

export const Header = styled.header`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: 1px solid gray;
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

export const UserContainer = styled.div``;

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

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

export const TweetButton = styled.a`
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

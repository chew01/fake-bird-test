import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import LogoWhite from '../../assets/logowhite.svg';
import MainBg from '../../assets/main.png';
import MainLogo from '../../assets/buttons/mainlogo.svg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const MainLeft = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  min-height: 45vh;
  height: 100%;
`;

const MainLeftBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-image: url(${MainBg});
  z-index: -1;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

const MainLeftLogo = styled.img`
  display: block;
  max-height: 380px;
  height: 50%;
  padding: 32px;
  max-width: 100%;
`;

const MainRight = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  min-width: 45vw;
  padding: 16px;
  box-sizing: border-box;
`;

const MainRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  min-width: 437px;
  max-width: 760px;
  padding: 20px;
  width: 100%;
`;

const MainRightLogo = styled.img`
  align-self: flex-start;
  max-width: 100%;
`;

const MainRightTitle = styled.div`
  margin: 48px 0px;
  box-sizing: border-box;
  font-family: 'TwitterChirpExtendedHeavy';
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 84px;
  color: rgb(15, 20, 25);
`;

const MainRightSub = styled.div`
  margin-bottom: 32px;
  box-sizing: border-box;
  font-family: 'TwitterChirpExtendedHeavy';
  font-size: 31px;
  font-weight: 700;
  line-height: 36px;
  color: rgb(15, 20, 25);
`;

const MainRightButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

const MainRightSignup = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 300px;
  background-color: rgb(29, 155, 240);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9999px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(26, 140, 216);
  }
`;

const MainRightLoginText = styled.div`
  margin: 40px 0px 20px 0px;
  font-family: 'TwitterChirp';
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(15, 20, 25);
`;

const MainRightLogin = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 300px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgb(207, 217, 222);
  border-radius: 9999px;
  color: rgb(29, 155, 240);
  text-decoration: none;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

export const Main = () => {
  const location = useLocation();

  return (
    <MainContainer>
      <MainLeft>
        <MainLeftBackground>
          <MainLeftLogo src={LogoWhite} />
        </MainLeftBackground>
      </MainLeft>
      <MainRight>
        <MainRightContent>
          <MainRightLogo src={MainLogo} />
          <MainRightTitle>Happening now</MainRightTitle>
          <MainRightSub>Join Twitter today.</MainRightSub>
          <MainRightButtons>
            <MainRightSignup
              to="i/flow/signup"
              state={{ background: location }}
            >
              Sign up with email
            </MainRightSignup>
            <MainRightLoginText>Already have an account?</MainRightLoginText>
            <MainRightLogin to="i/flow/login" state={{ background: location }}>
              Sign in
            </MainRightLogin>
          </MainRightButtons>
        </MainRightContent>
      </MainRight>
    </MainContainer>
  );
};

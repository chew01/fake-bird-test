import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const PromptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: fixed;
  bottom: 0px;
  background-color: rgb(29, 155, 240);
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
    rgb(101 119 134 / 15%) 0px 0px 3px 1px;
`;

const PromptInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  margin: 12px 0px;
`;

const PromptContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  width: 990px;
`;

const PromptText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const PromptTextUpper = styled.div`
  font-family: 'TwitterChirp';
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
  color: rgb(255, 255, 255);
`;

const PromptTextLower = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(255, 255, 255);
`;

const PromptButton = styled.div`
  margin: 0px 16px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  align-self: stretch;
`;

const PromptLogin = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  min-width: 36px;
  min-height: 36px;
  padding: 0px 16px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 9999px;
  color: rgb(255, 255, 255);
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const PromptSignup = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  margin-left: 12px;
  min-width: 36px;
  min-height: 36px;
  padding: 0px 16px;
  background-color: rgb(239, 243, 244);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9999px;
  color: rgb(15, 20, 25);
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(215, 219, 220);
  }
`;

export const Prompt = () => {
  const location = useLocation();

  return (
    <PromptContainer>
      <PromptInner>
        <PromptContent>
          <PromptText>
            <PromptTextUpper>Don't miss what's happening</PromptTextUpper>
            <PromptTextLower>
              People on Twitter are the first to know.
            </PromptTextLower>
          </PromptText>
          <PromptButton>
            <PromptLogin to="i/flow/login" state={{ background: location }}>
              Log in
            </PromptLogin>
            <PromptSignup to="i/flow/signup" state={{ background: location }}>
              Sign up
            </PromptSignup>
          </PromptButton>
        </PromptContent>
      </PromptInner>
    </PromptContainer>
  );
};

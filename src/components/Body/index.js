import styled from 'styled-components';
import { SuggestBar } from '../SuggestBar';

const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  width: 990px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

const MainSplit = styled.div`
  flex: 1 0 auto;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  box-sizing: border-box;
`;

const BodyLeft = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(239, 243, 244);
`;

const BodyLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: sticky;
  top: -0.5px;
  height: 53px;
  padding: 0px 16px;
  font-family: 'TwitterChirp';
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  color: rgb(15, 20, 25);
`;

const BodyRight = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  margin-right: 10px;
`;

export const Body = (props) => {
  const { type, children } = props;

  return (
    <Main>
      <MainContainer>
        <MainSplit>
          <BodyLeft>
            <BodyLeftTitle>{type}</BodyLeftTitle>
            {children}
          </BodyLeft>
          <BodyRight>
            <SuggestBar />
          </BodyRight>
        </MainSplit>
      </MainContainer>
    </Main>
  );
};

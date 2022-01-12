import styled from 'styled-components';
import DefaultPhoto from '../../assets/defaultPhoto.png';

const FollowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  min-height: 225px;
  margin-bottom: 16px;
  background-color: rgb(247, 249, 249);
  border: 1px solid rgb(247, 249, 249);
  border-radius: 16px;
`;

const FollowTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  padding: 12px 16px;
`;

const FollowTitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'TwitterChirp';
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  color: rgb(15, 20, 25);
`;

const FollowUserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  padding: 12px 16px;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const FollowUserContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const FollowUserIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  margin-right: 12px;
`;

const UserIcon = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 9999px;
`;

const FollowUserDescription = styled.div`
  flex: 1 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
`;

const FollowUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FollowUserText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const FollowUserName = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(15, 20, 25);
`;

const FollowUserHandle = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(83, 100, 113);
`;

const FollowUserButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  margin-left: 12px;
  min-width: 77px;
  min-height: 32px;
  padding: 0px 16px;
  background-color: rgb(15, 20, 25);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9999px;
  font-family: 'TwitterChirp';
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const ShowMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  padding: 16px;
  transition-duration: 0.2s;
  cursor: pointer;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(29, 155, 240);

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Follow = (props) => {
  const { name, handle } = props;

  return (
    <FollowUserBox>
      <FollowUserContent>
        <FollowUserIcon>
          <UserIcon src={DefaultPhoto} />
        </FollowUserIcon>
        <FollowUserDescription>
          <FollowUserContainer>
            <FollowUserText>
              <FollowUserName>{name}</FollowUserName>
              <FollowUserHandle>@{handle}</FollowUserHandle>
            </FollowUserText>
            <FollowUserButton>Follow</FollowUserButton>
          </FollowUserContainer>
        </FollowUserDescription>
      </FollowUserContent>
    </FollowUserBox>
  );
};

export const FollowSuggest = () => {
  return (
    <FollowsContainer>
      <FollowTitle>
        <FollowTitleText>Who to follow</FollowTitleText>
      </FollowTitle>
      <Follow name="Test1" handle="Test1" />
      <Follow name="Test2" handle="Test2" />
      <ShowMore>Show more</ShowMore>
    </FollowsContainer>
  );
};

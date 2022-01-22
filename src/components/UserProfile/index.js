import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TestCover from '../../assets/testcover.jpg';
import TestPhoto from '../../assets/testphoto.jpg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

const MainFlowContainer = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 600px;
  width: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

const Cover = styled.img`
  width: 100%;
`;

const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 12px 16px 0px 16px;
`;

const TopClusterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  min-width: 48px;
  width: 25%;
  height: auto;
  margin-bottom: 12px;
  margin-top: -15%;
`;

const Photo = styled.img`
  border: 4px solid white;
  border-radius: 9999px;
`;

const ProfileToolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
  max-width: 100%;
`;

const NameClusterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  margin: 4px 0px 12px 0px;
`;

const ProfileName = styled.div`
  font-family: 'TwitterChirp';
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  color: rgb(15, 20, 25);
`;

const ProfileHandle = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(83, 100, 113);
`;

const DescriptionCluster = styled.div`
  margin-bottom: 12px;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(15, 20, 25);
`;

const FollowClusterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
  flex: 1 1 0%;
  flex-wrap: wrap;
`;

const FollowingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
  margin-right: 20px;
`;

const FollowedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
`;

const NumberContainer = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(15, 20, 25);
  margin-right: 4px;
`;

const DescriptorContainer = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(83, 100, 113);
`;

const EditProfileButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  margin-bottom: 12px;
  min-height: 36px;
  min-width: 36px;
  padding: 0px 16px;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 9999px;
  transition-duration: 0.2s;
  text-decoration: none;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

const EditProfileButtonText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  color: rgb(15, 20, 25);
`;

export const UserProfile = (props) => {
  const { user, children, followers } = props;
  const location = useLocation();

  return (
    <MainContainer>
      <MainFlowContainer>
        <ProfileContainer>
          <CoverContainer>
            <Cover src={user.coverURL} alt="test" />
          </CoverContainer>
          <ProfileDetailsContainer>
            <TopClusterContainer>
              <PhotoContainer>
                <Photo src={user.photoURL} alt="test" />
              </PhotoContainer>
              <ProfileToolbar>
                <EditProfileButton to="/settings/profile" state={{ background: location }}>
                  <EditProfileButtonText>Edit Profile</EditProfileButtonText>
                </EditProfileButton>
              </ProfileToolbar>
            </TopClusterContainer>
            <NameClusterContainer>
              <ProfileName>{user.name}</ProfileName>
              <ProfileHandle>@{user.user}</ProfileHandle>
            </NameClusterContainer>
            <DescriptionCluster>{user.bio}</DescriptionCluster>
            <FollowClusterContainer>
              <FollowingContainer>
                <NumberContainer>{user.followed.length}</NumberContainer>
                <DescriptorContainer>Following</DescriptorContainer>
              </FollowingContainer>
              <FollowedContainer>
                <NumberContainer>{followers}</NumberContainer>
                <DescriptorContainer>Followers</DescriptorContainer>
              </FollowedContainer>
            </FollowClusterContainer>
          </ProfileDetailsContainer>
        </ProfileContainer>
        {children}
      </MainFlowContainer>
    </MainContainer>
  );
};

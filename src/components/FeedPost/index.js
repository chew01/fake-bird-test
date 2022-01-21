import styled from 'styled-components';
import DefaultPhoto from '../../assets/defaultPhoto.png';
import PostOptionImage from '../../assets/buttons/postoptions.svg';
import Comment from '../../assets/buttons/comment.svg';
import Retweet from '../../assets/buttons/retweet.svg';
import Like from '../../assets/buttons/like.svg';
import Share from '../../assets/buttons/share.svg';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);
`;

const PostArticle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0px 16px;
  transition-duration: 0.2s;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const PostX = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const PostY = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const PostDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  padding-top: 12px;
`;

const PostInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
`;

const PostUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
`;

const PostUserPhoto = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 9999px;
`;

const PostText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  padding-bottom: 12px;
  width: 100%;
`;

const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  margin-bottom: 2px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  box-sizing: border-box;
`;

const PostData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  box-sizing: border-box;
  flex-shrink: 1;
`;

const PostDataName = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(15, 20, 25);
`;

const PostDataHandle = styled.div`
  margin-left: 4px;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(83, 100, 113);
`;

const PostDataSplit = styled.div`
  padding: 0px 4px;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(83, 100, 113);
`;

const PostDataTime = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(83, 100, 113);
`;

const PostOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: 20px;
`;

const PostOptionsOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  position: absolute;
  margin: -8px;
  height: 34.75px;
  width: 34.75px;
  border-radius: 9999px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

const PostOptionsDots = styled.img`
  height: 18.75px;
  width: 18.75px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

const PostContentText = styled.div`
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(15, 20, 25);
`;

const PostToolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  box-sizing: border-box;
  max-width: 425px;
  margin-top: 12px;
`;

const PostToolContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PostToolImage = styled.img`
  height: 18.75px;
  width: 18.75px;
`;

const PostToolImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  position: absolute;
  margin: -8px;
  height: 34.75px;
  width: 34.75px;
  border-radius: 9999px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(${(props) => props.color});
  }
`;

const PostToolNumber = styled.div`
display: inline'
box-sizing: border-box;
min-width: calc(1em + 24px);
padding: 0px 12px;
font-family: 'TwitterChirp';
font-size: 13px;
font-weight: 400;
line-height: 16px;
color: rgb(83, 100, 113);
`;

const PostImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  margin-top: 12px;
  border: 1px solid rgb(207, 217, 222);
  transition-duration: 0.2s;
  z-index: 0;
  border-radius: 16px;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

const PostImage = styled.img`
  height: 100%;
  width: 100%;
  z-index: -1;
  border-radius: 16px;
`;

export const FeedPost = (props) => {
  const { photo, name, handle, time, content, imageURL } = props;

  return (
    <PostContainer>
      <PostArticle>
        <PostX>
          <PostY>
            <PostDivider />
            <PostInner>
              <PostUserContainer>
                <PostUserPhoto src={photo || DefaultPhoto} />
              </PostUserContainer>
              <PostText>
                <PostHeaderContainer>
                  <PostHeader>
                    <PostData>
                      <PostDataName>{name}</PostDataName>
                      <PostDataHandle>{handle}</PostDataHandle>
                      <PostDataSplit>·</PostDataSplit>
                      <PostDataTime>{time}</PostDataTime>
                    </PostData>
                    <PostOptions>
                      <PostOptionsOverlay />
                      <PostOptionsDots src={PostOptionImage} />
                    </PostOptions>
                  </PostHeader>
                </PostHeaderContainer>
                <PostContent>
                  <PostContentText>{content}</PostContentText>
                  {imageURL ? (
                    <PostImageContainer>
                      <PostImage src={imageURL} />
                    </PostImageContainer>
                  ) : null}
                  <PostToolbar>
                    <PostToolContainer>
                      <PostToolImageOverlay color="29,155,240,0.1" />
                      <PostToolImage src={Comment} />
                      <PostToolNumber></PostToolNumber>
                    </PostToolContainer>
                    <PostToolContainer>
                      <PostToolImageOverlay color="0,186,124,0.1" />
                      <PostToolImage src={Retweet} />
                      <PostToolNumber></PostToolNumber>
                    </PostToolContainer>
                    <PostToolContainer>
                      <PostToolImageOverlay color="249,24,128,0.1" />
                      <PostToolImage src={Like} />
                      <PostToolNumber></PostToolNumber>
                    </PostToolContainer>
                    <PostToolContainer>
                      <PostToolImageOverlay color="29,155,240,0.1" />
                      <PostToolImage src={Share} />
                    </PostToolContainer>
                  </PostToolbar>
                </PostContent>
              </PostText>
            </PostInner>
          </PostY>
        </PostX>
      </PostArticle>
    </PostContainer>
  );
};

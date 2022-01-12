import styled from 'styled-components';

const TrendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  background-color: rgb(247, 249, 249);
  border: 1px solid rgb(247, 249, 249);
  border-radius: 16px;
  margin-bottom: 16px;
`;

const TrendTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  padding: 12px 16px;
`;

const TrendTitleText = styled.div`
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

const TrendBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 16px;
  box-sizing: border-box;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const TrendContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 0 auto;
`;

const TrendGenre = styled.div`
  font-family: 'TwitterChirp';
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: rgb(83, 100, 113);
`;

const TrendName = styled.div`
  padding-top: 2px;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(15, 20, 25);
`;

const TrendCount = styled.div`
  margin-top: 4px;
  font-family: 'TwitterChirp';
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: rgb(83, 100, 113);
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

const Trend = (props) => {
  const { genre, name, count } = props;
  return (
    <TrendBox>
      <TrendContent>
        <TrendGenre>{genre} · Trending</TrendGenre>
        <TrendName>{name}</TrendName>
        <TrendCount>{count} Tweets</TrendCount>
      </TrendContent>
    </TrendBox>
  );
};

export const TrendSuggest = () => {
  return (
    <TrendsContainer>
      <TrendTitle>
        <TrendTitleText>Trends for you</TrendTitleText>
      </TrendTitle>
      <Trend genre="Test" name="Trend 1" count="3,141" />
      <Trend genre="Test" name="Trend 2" count="6,969" />
      <Trend genre="Test" name="Trend 3" count="42.0K" />
      <Trend genre="Test" name="Trend 4" count="2,411" />
      <ShowMore>Show more</ShowMore>
    </TrendsContainer>
  );
};

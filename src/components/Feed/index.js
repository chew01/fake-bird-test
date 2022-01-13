import styled from 'styled-components';
import { FeedPost } from '../FeedPost';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
`;

export const Feed = () => {
  return (
    <FeedContainer>
      <FeedPost />
    </FeedContainer>
  );
};

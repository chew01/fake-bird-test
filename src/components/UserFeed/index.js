import styled from 'styled-components';
import { FeedPost } from '../FeedPost';
import { useEffect, useState } from 'react';
import {
  compareTime,
  db,
  getCurrentTime,
  getUserData,
} from '../../api/database';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
`;

export const UserFeed = (props) => {
  const { user } = props;
  const [rawTweets, setRawTweets] = useState([]);

  useEffect(() => {
    if (!user) return;
    const getTweetDetails = async (tweet) => {
      const tweeterData = await getUserData(tweet.originUID);
      const currentTime = await getCurrentTime();
      const name = tweeterData.name;
      const user = tweeterData.user;
      const photoURL = tweeterData.photoURL;
      const time = compareTime(currentTime, tweet.time);
      const content = tweet.content;
      const imageURL = tweet.imageURL;
      return { name, user, photoURL, time, content, imageURL };
    };

    const listAndSubmitRawTweets = (snapshot) => {
      const promises = snapshot.docs.map((doc) => getTweetDetails(doc.data()));
      Promise.all(promises).then((result) => setRawTweets(result));
    };

    const q = query(
      collection(db, 'tweets'),
      where('originUID', '==', user),
      orderBy('time', 'desc')
    );

    const unsubPosts = onSnapshot(q, listAndSubmitRawTweets);

    return () => {
      unsubPosts();
    };
  }, [user]);

  return (
    <FeedContainer>
      {rawTweets.map((post) => (
        <FeedPost
          key={uuidv4()}
          photo={post.photoURL}
          name={post.name}
          handle={`@${post.user}`}
          time={post.time}
          content={post.content}
          imageURL={post.imageURL}
        />
      ))}
    </FeedContainer>
  );
};

import styled from 'styled-components';
import { FeedPost } from '../FeedPost';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../api/auth';
import { db, getUserData } from '../../api/database';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
`;

export const Feed = () => {
  const uid = useContext(AuthContext);
  const [followedUsers, setFollowedUsers] = useState([]);
  const [rawTweets, setRawTweets] = useState([]);
  const [posts, setPosts] = useState([]);

  // updates followed users every time array is updated
  useEffect(() => {
    if (!uid) return;
    const unsub = onSnapshot(doc(db, 'users', uid), (doc) => {
      const followed = doc.data().followed.concat(uid);
      setFollowedUsers(followed);
    });

    return () => unsub();
  }, [uid]);

  // get all tweets
  useEffect(() => {
    if (followedUsers.length === 0) return;
    const tweets = [];
    const q = query(
      collection(db, 'tweets'),
      where('originUID', 'in', followedUsers)
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => tweets.push(doc.data()));
    });
    setRawTweets(tweets);

    return () => unsub();
  }, [followedUsers]);

  // expand tweet data
  useEffect(() => {
    if (rawTweets.length === 0) return;
    return Promise.all(
      rawTweets.map(async (tweet) => {
        const userData = await getUserData(tweet.originUID);
        const name = userData.name;
        const user = userData.user;
        const photoURL = userData.photoURL;
        const time = tweet.time;
        const content = tweet.content;
        return { name, user, photoURL, time, content };
      })
    ).then((result) => setPosts(result));
  }, [rawTweets]);

  console.log('followedusers' + followedUsers);
  console.log('rawtweets' + rawTweets);
  console.log('posts' + posts);

  return (
    <FeedContainer>
      {posts.map((post) => (
        <FeedPost
          key={post.user + post.content}
          photo={post.photoURL}
          name={post.name}
          handle={post.user}
          time="20"
          content={post.content}
        />
      ))}
    </FeedContainer>
  );
};

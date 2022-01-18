import { initializeApp } from 'firebase/app';
import {
  doc,
  getDoc,
  getFirestore,
  Timestamp,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAIlSejwtdFx3tUz3mE1cIETcyV0T0k1A',
  authDomain: 'fake-bird-test.firebaseapp.com',
  projectId: 'fake-bird-test',
  storageBucket: 'fake-bird-test.appspot.com',
  messagingSenderId: '656519934437',
  appId: '1:656519934437:web:a935d69f6fa94c6c31ff0c',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const getUserData = async (uid) => {
  const u = await getDoc(doc(db, 'users', uid));
  const name = u.data().name;
  const user = u.data().user;
  const photoURL = u.data().photoURL;
  const followed = u.data().followed;
  return { name, user, photoURL, followed };
};

export const createNewTweet = async (originUID, content) => {
  await addDoc(collection(db, 'users', originUID, 'tweets'), {
    originUID,
    content,
    time: Timestamp.now(),
  });
};

const getTweetsForSpecifiedUID = async (uid) => {
  const q = query(collection(db, 'tweets'), where('originUID', '==', uid));
  const querySnapshot = await getDocs(q);
  const tweetsArray = [];
  querySnapshot.forEach((doc) => {
    tweetsArray.push(doc.data());
  });
  return tweetsArray;
};

export const getTweetsOfFollowedAndSelf = async (originUID) => {
  const userData = await getUserData(originUID);
  // user has array of followed uids
  const usersToDisplayTweets = userData.followed;
  // add own uid into that array
  usersToDisplayTweets.push(originUID);
  // create an array for eligible tweets

  const addTweetsToDisplay = async () => {
    const tweetsOfFollowedUsers = await Promise.all(
      usersToDisplayTweets.map((uid) => getTweetsForSpecifiedUID(uid))
    );
    const tweetsToDisplay = tweetsOfFollowedUsers.reduce(
      (a, b) => [...a, ...b],
      []
    );
    return tweetsToDisplay;
  };

  const tweetsToDisplay = addTweetsToDisplay();

  // return the array
  return tweetsToDisplay;
};

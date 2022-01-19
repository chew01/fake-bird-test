import { initializeApp } from 'firebase/app';
import {
  doc,
  getDoc,
  getFirestore,
  Timestamp,
  collection,
  addDoc,
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
  await addDoc(collection(db, 'tweets'), {
    originUID,
    content,
    time: Timestamp.now(),
  });
};

export const getCurrentTime = async () => {
  const currentTime = Timestamp.now();
  return currentTime;
};

export const compareTime = (time1, time2) => {
  const difference = time1.toDate() - time2.toDate();

  const differenceInSeconds = difference / 1000;
  if (differenceInSeconds < 60) {
    const value = Math.floor(differenceInSeconds);
    return `${value}s`;
  }

  const differenceInMinutes = differenceInSeconds / 60;
  if (differenceInMinutes < 60) {
    const value = Math.floor(differenceInMinutes);
    return `${value}m`;
  }

  const differenceInHours = differenceInMinutes / 60;
  if (differenceInHours < 24) {
    const value = Math.floor(differenceInHours);
    return `${value}h`;
  }

  const differenceInDays = differenceInHours / 24;
  if (differenceInDays < 30) {
    const value = Math.floor(differenceInDays);
    return `${value}d`;
  }

  const differenceInMonths = differenceInDays / 30;
  if (differenceInMonths < 12) {
    const value = Math.floor(differenceInMonths);
    return `${value}m`;
  }

  const differenceInYears = differenceInMonths / 12;
  const value = Math.floor(differenceInYears);
  return `${value}y`;
};

import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, Timestamp, collection, addDoc, query, where, getDocs, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAIlSejwtdFx3tUz3mE1cIETcyV0T0k1A',
  authDomain: 'fake-bird-test.firebaseapp.com',
  projectId: 'fake-bird-test',
  storageBucket: 'fake-bird-test.appspot.com',
  messagingSenderId: '656519934437',
  appId: '1:656519934437:web:a935d69f6fa94c6c31ff0c',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const getUserData = async (uid) => {
  const u = await getDoc(doc(db, 'users', uid));
  const name = u.data().name;
  const user = u.data().user;
  const photoURL = u.data().photoURL;
  const coverURL = u.data().coverURL;
  const followed = u.data().followed;
  const bio = u.data().bio;
  return { name, user, photoURL, coverURL, followed, bio };
};

export const createNewTweet = async (originUID, content, imageURL = null) => {
  await addDoc(collection(db, 'tweets'), {
    originUID,
    content,
    time: Timestamp.now(),
    imageURL,
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

export const getUserDataFromHandle = async (handle) => {
  const q = query(collection(db, 'users'), where('user', '==', handle));
  const querySnapshot = await getDocs(q);
  const mapped = querySnapshot.docs.map((doc) => getUserData(doc.id));
  return mapped[0];
};

export const getUserIDFromHandle = async (handle) => {
  const q = query(collection(db, 'users'), where('user', '==', handle));
  const querySnapshot = await getDocs(q);
  const mapped = querySnapshot.docs.map((doc) => doc.id);
  return mapped[0];
};

export const setUserData = async (updatedData, uid) => {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, updatedData, { merge: true });
};

export const getNumberOfFollowers = async (uid) => {
  const q = query(collection(db, 'users'), where('followed', 'array-contains', uid));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.length;
};

export const checkIfCurrentUserFollowsViewedProfile = async (currentUID, viewedUID) => {
  const currentUserData = await getUserData(currentUID);
  return currentUserData.followed.includes(viewedUID);
};

export const addViewedUIDIntoCurrentUserFollowedList = async (currentUID, viewedUID) => {
  const userData = await getUserData(currentUID);
  const followed = userData.followed.concat(viewedUID);
  await setDoc(doc(db, 'users', currentUID), { followed }, { merge: true });
};

export const removeViewedUIDIntoCurrentUserFollowedList = async (currentUID, viewedUID) => {
  const userData = await getUserData(currentUID);
  const followed = userData.followed;
  const indexOfViewedUID = followed.indexOf(viewedUID);
  followed.splice(indexOfViewedUID, 1);
  await setDoc(doc(db, 'users', currentUID), { followed }, { merge: true });
};

import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

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
  return { name, user };
};

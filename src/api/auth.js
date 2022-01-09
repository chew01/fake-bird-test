import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './database';

export const signUp = async (name, user, email, password) => {
  try {
    const auth = getAuth();
    const newAuth = await createUserWithEmailAndPassword(auth, email, password);
    const uid = newAuth.user.uid;

    await setDoc(doc(db, 'users', uid), {
      name,
      user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const logOut = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export const logIn = async (email, password) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
};

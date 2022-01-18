import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { db } from './database';
import DefaultPhoto from '../assets/defaultPhoto.png';

export const signUp = async (name, user, email, password) => {
  try {
    const auth = getAuth();
    const newAuth = await createUserWithEmailAndPassword(auth, email, password);
    const uid = newAuth.user.uid;

    await setDoc(doc(db, 'users', uid), {
      name,
      user,
      photoURL: DefaultPhoto,
      followed: [],
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

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUser(uid);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

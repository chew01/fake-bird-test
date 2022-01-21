import { firebaseApp } from './database';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const storage = getStorage(firebaseApp);

export const uploadImageAndReturnLink = (file) => {
  const imageid = uuidv4();
  const uploadRef = ref(storage, `images/${imageid}`);
  const uploadTask = uploadBytes(uploadRef, file).then(() =>
    getDownloadURL(uploadRef).then((result) => {
      return result;
    })
  );
  return uploadTask;
};

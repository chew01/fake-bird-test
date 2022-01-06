import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    displayName: '',
    email: '',
    photoURL: '',
  },
  reducers: {
    setDisplayName: (state, displayName) => {
      state.displayName = displayName;
    },
    setEmail: (state, email) => {
      state.email = email;
    },
    setPhotoURL: (state, photoURL) => {
      state.photoURL = photoURL;
    },
  },
});

export const { setDisplayName, setEmail, setPhotoURL } = userSlice.actions;

export default userSlice.reducer;

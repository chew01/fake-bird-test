import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    user: '',
    photoURL: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPhotoURL: (state, action) => {
      state.photoURL = action.payload;
    },
    setAll: (state, action) => {
      state.name = action.payload.name;
      state.user = action.payload.user;
      state.photoURL = action.payload.photoURL;
    },
  },
});

export const { setName, setUser, setPhotoURL, setAll } = userSlice.actions;
export default userSlice.reducer;

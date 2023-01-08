import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, getContact } from './authOperation';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [register.fulfilled](state, action) {},
  },
});

export const authReducer = authSlice.reducer;

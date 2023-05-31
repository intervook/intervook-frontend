import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  email: string;
  username: string;
  isLogin: boolean;
}

const initialState: IInitialState = { email: '', username: '', isLogin: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isLogin = true;
    },
    logout: () => initialState,
  },
});

import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  email: string;
  nickname: string;
  isLogin: boolean;
}

const initialState: IInitialState = { email: '', nickname: '', isLogin: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // state.email = action.payload;
      state.nickname = action.payload;
      state.isLogin = true;
    },
    logout: () => initialState,
  },
});

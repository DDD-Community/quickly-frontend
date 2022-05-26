import { createSlice } from '@reduxjs/toolkit';
import { UserService } from '~/services/user';

const initialState = {
  name: '',
  email: 'dd',
  accessToken: '',
  user: {
    name: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  // 비동기 상태 쪽
  extraReducers: builder => {
    builder
      .addCase(UserService.getUser.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(UserService.getUser.fulfilled, (state, action) => {
        console.log('fulfilled', state, action);
        state.user = action.payload;
      })
      .addCase(UserService.getUser.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export default userSlice;

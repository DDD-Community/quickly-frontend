import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetch } from '@utils/http';

export const UserService = {
  getUser: createAsyncThunk('user/getUser', async (userId: string) => {
    const resoponse = await fetch(`people/${userId}`, {
      method: 'GET',
    });
    return resoponse;
  }),
};

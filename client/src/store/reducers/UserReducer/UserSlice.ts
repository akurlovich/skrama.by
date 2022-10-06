import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";
import { fetchUsers } from "./ActionCreators";

interface IUserState {
  users: IUser[],
  isLoading: boolean,
  isAuth: boolean,
  error: string,
}

const initialState: IUserState = {
  users: [],
  isLoading: true,
  isAuth: true,
  error: '',
}

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default userSlice.reducer;
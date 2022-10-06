import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";
import { checkAuth, loginUser, logoutUser, registerUser, updateUserIsBlocked, updateUserProfileImage } from "./AuthActionCreatores";

interface IResponseData {
  user: IUser,
  role: string,
}

interface IAuthState {
  user: IUser,
  isLoading: boolean,
  isAuth: boolean,
  role: string,
  error: string,
};

const initialState: IAuthState = {
  user: {} as IUser,
  isLoading: true,
  isAuth: false,
  role: '',
  error: '',
};

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    removeRigisterUserError(state) {
      state.error = '';
    }
  },
  extraReducers: {
    [registerUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled.type]: (state, action: PayloadAction<IResponseData>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    [registerUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.type]: (state, action: PayloadAction<IResponseData>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
      state.role = '';
    },
    [logoutUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.user = {} as IUser;
      state.role = '';
    },
    [logoutUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [checkAuth.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [checkAuth.fulfilled.type]: (state, action: PayloadAction<IResponseData>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
    },
    [updateUserProfileImage.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [updateUserProfileImage.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    [updateUserProfileImage.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateUserIsBlocked.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [updateUserIsBlocked.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.isAuth = true;
    },
    [updateUserIsBlocked.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const {
  removeRigisterUserError,
} = authSlice.actions;

export default authSlice.reducer;
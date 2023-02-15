import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITypeResponse } from "../../../types/ITypeResponse";
import { addType, getTypeByID, getTypes } from "./TypeActionCreators";
// import { ITypeResponse } from "../../../types/ITypeResponse";
// import { addType, getTypeByID, getTypes } from "./TypeActionCreators";

interface ITypeState {
  type: ITypeResponse,
  types: ITypeResponse[],
  isLoading: boolean,
  error: string,
};

const initialState: ITypeState = {
  type: {} as ITypeResponse,
  types: [],
  isLoading: false,
  error: '',
};

export const typeSlice = createSlice({
  name: 'TYPE',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addType.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addType.fulfilled.type]: (state, action: PayloadAction<ITypeResponse>) => {
      state.isLoading = false;
      state.type = action.payload;
      state.error = '';
    },
    [addType.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getTypes.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTypes.fulfilled.type]: (state, action: PayloadAction<ITypeResponse[]>) => {
      state.isLoading = false;
      state.types = action.payload;
      state.error = '';
    },
    [getTypes.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getTypeByID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTypeByID.fulfilled.type]: (state, action: PayloadAction<ITypeResponse>) => {
      state.isLoading = false;
      state.type = action.payload;
      state.error = '';
    },
    [getTypeByID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [updateBookAmountByID.pending.type]: (state) => {
    //   state.isLoading = true;
    // },
    // [updateBookAmountByID.fulfilled.type]: (state, action: PayloadAction<IBookResponse>) => {
    //   state.isLoading = false;
    //   state.book = action.payload;
    //   state.error = '';
    // },
    // [updateBookAmountByID.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [getAllGenres.pending.type]: (state) => {
    //   state.isLoading = true;
    // },
    // [getAllGenres.fulfilled.type]: (state, action: PayloadAction<IGenreResponse[]>) => {
    //   state.isLoading = false;
    //   state.genres = action.payload;
    //   state.error = '';
    // },
    // [getAllGenres.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  }
});

export default typeSlice.reducer;
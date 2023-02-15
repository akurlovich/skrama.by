import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBrandResponse } from "../../../types/IBrandResponse";
import { addBrand, getBrandByID, getBrands } from "./BrandActionCreators";

interface IBrandState {
  brand: IBrandResponse,
  brands: IBrandResponse[],
  isLoading: boolean,
  error: string,
};

const initialState: IBrandState = {
  brand: {} as IBrandResponse,
  brands: [],
  isLoading: false,
  error: '',
};

export const brandSlice = createSlice({
  name: 'BRAND',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addBrand.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addBrand.fulfilled.type]: (state, action: PayloadAction<IBrandResponse>) => {
      state.isLoading = false;
      state.brand = action.payload;
      state.error = '';
    },
    [addBrand.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBrands.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBrands.fulfilled.type]: (state, action: PayloadAction<IBrandResponse[]>) => {
      state.isLoading = false;
      state.brands = action.payload;
      state.error = '';
    },
    [getBrands.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBrandByID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBrandByID.fulfilled.type]: (state, action: PayloadAction<IBrandResponse>) => {
      state.isLoading = false;
      state.brand = action.payload;
      state.error = '';
    },
    [getBrandByID.rejected.type]: (state, action: PayloadAction<string>) => {
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

export default brandSlice.reducer;
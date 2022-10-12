import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IBook } from "../../../types/IBook";
import { IProductResponse } from "../../../types/IProductResponse";
import { addProduct, getProductByID, getProducts } from "./ProductActionCreators";
// import { IGenreResponse } from "../../../types/IGenreResponse";
// import { addBook, getAllGenres, getBookByID, getBooks, updateBookAmountByID } from "./ProductActionCreatores";

interface IProductState {
  product: IProductResponse,
  products: IProductResponse[],
  // genres: IProductResponse[],
  isLoading: boolean,
  error: string,
};

const initialState: IProductState = {
  product: {} as IProductResponse,
  products: [],
  // genres: [],
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'PRODUCT',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addProduct.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addProduct.fulfilled.type]: (state, action: PayloadAction<IProductResponse>) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = '';
    },
    [addProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled.type]: (state, action: PayloadAction<IProductResponse[]>) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = '';
    },
    [getProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getProductByID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProductByID.fulfilled.type]: (state, action: PayloadAction<IProductResponse>) => {
      state.isLoading = false;
      // @ts-ignore
      state.product = action.payload;
      state.error = '';
    },
    [getProductByID.rejected.type]: (state, action: PayloadAction<string>) => {
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

export default productSlice.reducer;
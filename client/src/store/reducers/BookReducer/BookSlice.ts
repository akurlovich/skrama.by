import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/IBook";
import { IBookResponse } from "../../../types/IBookResponse";
import { IGenreResponse } from "../../../types/IGenreResponse";
import { addBook, getAllGenres, getBookByID, getBooks, updateBookAmountByID } from "./BookActionCreatores";

interface IBookState {
  book: IBookResponse,
  books: IBookResponse[],
  genres: IGenreResponse[],
  isLoading: boolean,
  error: string,
};

const initialState: IBookState = {
  book: {} as IBookResponse,
  books: [],
  genres: [],
  isLoading: false,
  error: '',
};

export const bookSlice = createSlice({
  name: 'BOOK',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addBook.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled.type]: (state, action: PayloadAction<IBookResponse>) => {
      state.isLoading = false;
      state.book = action.payload;
      state.error = '';
    },
    [addBook.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled.type]: (state, action: PayloadAction<IBookResponse[]>) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = '';
    },
    [getBooks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBookByID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBookByID.fulfilled.type]: (state, action: PayloadAction<IBookResponse>) => {
      state.isLoading = false;
      state.book = action.payload;
      state.error = '';
    },
    [getBookByID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateBookAmountByID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateBookAmountByID.fulfilled.type]: (state, action: PayloadAction<IBookResponse>) => {
      state.isLoading = false;
      state.book = action.payload;
      state.error = '';
    },
    [updateBookAmountByID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllGenres.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllGenres.fulfilled.type]: (state, action: PayloadAction<IGenreResponse[]>) => {
      state.isLoading = false;
      state.genres = action.payload;
      state.error = '';
    },
    [getAllGenres.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default bookSlice.reducer;
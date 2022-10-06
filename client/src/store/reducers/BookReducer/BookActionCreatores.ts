import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "../../../services/BookService";
import GenreService from "../../../services/GenreService";
import { IBook, IBookUpdate } from "../../../types/IBook";

export const addBook = createAsyncThunk(
  'BOOK/addBook',
  async (book: IBook, {rejectWithValue}) => {
    try {
      return await (await BookService.addBook(book)).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBooks = createAsyncThunk(
  'BOOK/getBooks',
  async (_, {rejectWithValue}) => {
    try {
      return await (await BookService.getBooks()).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBookByID = createAsyncThunk(
  'BOOK/getBookByID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await BookService.getBookByID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const updateBookAmountByID = createAsyncThunk(
  'BOOK/updateBookAmountByID',
  async (newBook: IBookUpdate, {rejectWithValue}) => {
    try {
      return await (await BookService.updateBookAmountByID(newBook)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllGenres = createAsyncThunk(
  'BOOK/getAllGenres',
  async (_, {rejectWithValue}) => {
    try {
      return await (await GenreService.getAllGenres()).data;      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);
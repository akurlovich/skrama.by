import { createAsyncThunk } from "@reduxjs/toolkit";
import BookedService from "../../../services/BookedService";
import BookService from "../../../services/BookService";
import { allUserBookedsAndIssueds, bookUserBookedsAndIssueds, usersBookeds } from "../../../services/ClientServices/UsersBookeds";
import { IBooked } from "../../../types/IBooked";
import { IBookResponse } from "../../../types/IBookResponse";

export const addBooked = createAsyncThunk(
  'BOOKED/addBooked',
  async (booked: IBooked, {rejectWithValue}) => {
    try {
      const response = await BookedService.addBooked(booked);
      const book = await BookService.getBookByID(booked.bookID);
      await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount - 1});
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBookeds = createAsyncThunk(
  'BOOKED/getBookeds',
  async (_, {rejectWithValue}) => {
    try {
      return await (await BookedService.getBookeds()).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllBookedsByBookID = createAsyncThunk(
  'BOOKED/getAllBookedsByBookID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await BookedService.getAllBookedsByBookID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllBookedsByUserID = createAsyncThunk(
  'BOOKED/getAllBookedsByUserID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await BookedService.getAllBookedsByUserID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteBooked = createAsyncThunk(
  'BOOKED/deleteBooked',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await BookedService.deleteBooked(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteBookedAndReturnAmount = createAsyncThunk(
  'BOOKED/deleteBookedAndReturnAmount',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await BookedService.deleteBooked(id);
      const book = await BookService.getBookByID(response.data.bookID);
      await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount + 1});
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBookedsForUser = createAsyncThunk(
  'BOOKED/getBookedsForUser',
  async (userID: string, {rejectWithValue}) => {
    try {
      return await usersBookeds(userID);

    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const allUsersAndBookeds = createAsyncThunk(
  'BOOKED/allUserAndBookeds',
  async (_, {rejectWithValue}) => {
    try {
      return await allUserBookedsAndIssueds();

    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const bookUsersAndBookeds = createAsyncThunk(
  'BOOKED/bookUsersAndBookeds',
  async (bookID: string, {rejectWithValue}) => {
    try {
      return await bookUserBookedsAndIssueds(bookID);

    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);
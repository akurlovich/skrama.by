import { createAsyncThunk } from "@reduxjs/toolkit";
import BookedService from "../../../services/BookedService";
import BookService from "../../../services/BookService";
import IssuedService from "../../../services/IssuedService";
import { IBookResponse } from "../../../types/IBookResponse";
import { IIssued } from "../../../types/IIssued";

export const addIssued = createAsyncThunk(
  'ISSUED/addIssued',
  async (issued: IIssued, {rejectWithValue}) => {
    try {
      const response = await IssuedService.addIssued(issued);
      const bookeds = await (await BookedService.getAllBookedsByBookID(issued.bookID)).data;
      const foundByUser = bookeds.find(booked => booked.userID === issued.userID);
      if (foundByUser) {
        await BookedService.deleteBooked(foundByUser?._id);
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getIssueds = createAsyncThunk(
  'ISSUED/getIssueds',
  async (_, {rejectWithValue}) => {
    try {
      return await (await IssuedService.getIssueds()).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllIssuedsByBookID = createAsyncThunk(
  'ISSUED/getAllIssuedsByBookID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await IssuedService.getAllIssuedsByBookID(id)).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllIssuedsByUserID = createAsyncThunk(
  'ISSUED/getAllIssuedsByUserID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await IssuedService.getAllIssuedsByUserID(id)).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteIssued = createAsyncThunk(
  'ISSUED/deleteIssued',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await IssuedService.deleteIssued(id)).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteIssuedAndReturnAmount = createAsyncThunk(
  'ISSUED/deleteIssuedAndReturnAmount',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await IssuedService.deleteIssued(id);
      const book = await BookService.getBookByID(response.data.bookID);
      await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount + 1});
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getIssuedsForUser = createAsyncThunk(
  'ISSUED/getIssuedsForUser',
  async (userID: string, {rejectWithValue}) => {
    try {
      const issueds = await (await IssuedService.getAllIssuedsByUserID(userID)).data;
      const userBooks = [] as IBookResponse[];
      for (let i = 0; i < issueds.length; i++) {
        let book = await (await BookService.getBookByID(issueds[i].bookID)).data;
        userBooks.push(book)
      };
      return userBooks;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);
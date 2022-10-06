import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookResponse } from "../../../types/IBookResponse";
import { IIssuedResponse } from "../../../types/IIssuedResponse";
import { addIssued, deleteIssued, deleteIssuedAndReturnAmount, getAllIssuedsByBookID, getAllIssuedsByUserID, getIssuedsForUser } from "./IssuedActionCreators";

interface IIssuedState {
  issued: IIssuedResponse,
  issuedsByBookID: IIssuedResponse[],
  issuedsByUserID: IIssuedResponse[],
  userIssuedBooks: IBookResponse[],
  isLoading: boolean,
  error: string,
};

const initialState: IIssuedState = {
  issued: {} as IIssuedResponse,
  issuedsByBookID: [],
  issuedsByUserID: [],
  userIssuedBooks: [],
  isLoading: false,
  error: '',
};

export const issuedSlice = createSlice({
  name: 'ISSUED',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addIssued.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addIssued.fulfilled.type]: (state, action: PayloadAction<IIssuedResponse>) => {
      state.isLoading = false;
      state.issued = action.payload;
      state.error = '';
    },
    [addIssued.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllIssuedsByBookID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllIssuedsByBookID.fulfilled.type]: (state, action: PayloadAction<IIssuedResponse[]>) => {
      state.isLoading = false;
      state.issuedsByBookID = action.payload;
      state.error = '';
    },
    [getAllIssuedsByBookID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllIssuedsByUserID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllIssuedsByUserID.fulfilled.type]: (state, action: PayloadAction<IIssuedResponse[]>) => {
      state.isLoading = false;
      state.issuedsByUserID = action.payload;
      state.error = '';
    },
    [getAllIssuedsByUserID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteIssued.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteIssued.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [deleteIssued.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteIssuedAndReturnAmount.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteIssuedAndReturnAmount.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [deleteIssuedAndReturnAmount.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getIssuedsForUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getIssuedsForUser.fulfilled.type]: (state, action: PayloadAction<IBookResponse[]>) => {
      state.isLoading = false;
      state.userIssuedBooks = action.payload;
      state.error = '';
    },
    [getIssuedsForUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default issuedSlice.reducer;
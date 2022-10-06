import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentResponse } from "../../../types/ICommentResponse";
import { addComment, getAllCommentByBookID, getComments, updateCommentByModerator } from "./CommentActionCreators";

interface ICommentState {
  comment: ICommentResponse,
  comments: ICommentResponse[],
  commentsByBookID: ICommentResponse[],
  isLoading: boolean,
  error: string,
};

const initialState: ICommentState = {
  comment: {} as ICommentResponse,
  comments: [],
  commentsByBookID: [],
  isLoading: false,
  error: '',
};

export const commentSlice = createSlice({
  name: 'COMMENT',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addComment.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled.type]: (state, action: PayloadAction<ICommentResponse>) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [addComment.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getComments.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getComments.fulfilled.type]: (state, action: PayloadAction<ICommentResponse[]>) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [getComments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllCommentByBookID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllCommentByBookID.fulfilled.type]: (state, action: PayloadAction<ICommentResponse[]>) => {
      state.isLoading = false;
      state.commentsByBookID = action.payload;
    },
    [getAllCommentByBookID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateCommentByModerator.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateCommentByModerator.fulfilled.type]: (state, action: PayloadAction<ICommentResponse>) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [updateCommentByModerator.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
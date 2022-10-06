import { createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "../../../services/CommentService";
import { IComment, ICommentUpdate } from "../../../types/IComment";

export const addComment = createAsyncThunk(
  'COMMENT/addComment',
  async (comment: IComment, {rejectWithValue}) => {
    try {
      return await (await commentService.addComment(comment)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getComments = createAsyncThunk(
  'COMMENT/getComments',
  async (_, {rejectWithValue}) => {
    try {
      return await (await commentService.getComments()).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllCommentByBookID = createAsyncThunk(
  'COMMENT/getAllCommentByBookID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await commentService.getAllCommentsByBookID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllCommentsByUserID = createAsyncThunk(
  'COMMENT/getAllCommentsByUserID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await commentService.getAllCommentsByUserID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteComment = createAsyncThunk(
  'COMMENT/deleteComment',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await commentService.deleteComment(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const updateCommentByModerator = createAsyncThunk(
  'COMMENT/updateCommentByModerator',
  async (newComment: ICommentUpdate, {rejectWithValue}) => {
    try {
      return await (await commentService.updateCommentByModerator(newComment)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

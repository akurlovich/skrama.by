import { createAsyncThunk } from "@reduxjs/toolkit";
import TypeService from "../../../services/TypeService";
import { IType } from "../../../types/IType";

export const addType = createAsyncThunk(
  'TYPE/addType',
  async (type: IType, {rejectWithValue}) => {
    try {
      return await (await TypeService.addType(type)).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getTypes = createAsyncThunk(
  'TYPE/getTypes',
  async (_, {rejectWithValue}) => {
    try {
      return await (await TypeService.getTypes()).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getTypeByID = createAsyncThunk(
  'TYPE/getTypeByID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await TypeService.getTypeByID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

// export const updateTypeAmountByID = createAsyncThunk(
//   'TYPE/updateTypeAmountByID',
//   async (newType: ITypeUpdate, {rejectWithValue}) => {
//     try {
//       return await (await TypeService.updateTypeAmountByID(newType)).data;
      
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// );

// export const getAllGenres = createAsyncThunk(
//   'TYPE/getAllGenres',
//   async (_, {rejectWithValue}) => {
//     try {
//       return await (await GenreService.getAllGenres()).data;      
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../../types/IUser";

export const fetchUsers = createAsyncThunk(
  'USER/fetchUsers',
  async (_, thunkAPI) => {
    try {
      return await (await axios.get<IUser[]>('http://localhost:4000/api/users')).data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue('Don"t get users')
    }
  }
);











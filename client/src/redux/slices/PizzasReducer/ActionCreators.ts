import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPizza } from "../../../types/IPizza";

interface ISortData {
  pageCount: number;
  category: string;
  sortBy: string;
  order: string;
  search: string;
}

export const fetchPizzas = createAsyncThunk(
  'PIZZA/fetchPizzas',
  async (sortData: ISortData, thunkAPI) => {
    try {
      // return await (await axios.get<IUser[]>('http://localhost:4000/api/users')).data;
      return await (await axios.get<IPizza[]>(`https://626d16545267c14d5677d9c2.mockapi.io/items?page=${sortData.pageCount}&limit=4&${sortData.category}&sortBy=${sortData.sortBy}&order=${sortData.order}${sortData.search}`)).data;
      // const res = await (await axios.get<IPizza[]>(`https://626d16545267c14d5677d9c2.mockapi.io/items?page=${sortData.pageCount}&limit=4&${sortData.category}&sortBy=${sortData.sortBy}&order=${sortData.order}${sortData.search}`)).data;
      // console.log(res);
      // return res;
      
    } catch (error) {
      return thunkAPI.rejectWithValue('Don"t get pizzas')
    }
  }
);











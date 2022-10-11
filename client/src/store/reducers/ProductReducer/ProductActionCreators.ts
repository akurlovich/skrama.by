import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../../services/ProductService";
import GenreService from "../../../services/GenreService";
import { IProduct } from "../../../types/IProduct";

export const addProduct = createAsyncThunk(
  'PRODUCT/addProduct',
  async (product: IProduct, {rejectWithValue}) => {
    try {
      return await (await ProductService.addProduct(product)).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getProducts = createAsyncThunk(
  'PRODUCT/getProducts',
  async (_, {rejectWithValue}) => {
    try {
      return await (await ProductService.getProducts()).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getProductByID = createAsyncThunk(
  'PRODUCT/getProductByID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await ProductService.getProductByID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

// export const updateProductAmountByID = createAsyncThunk(
//   'PRODUCT/updateProductAmountByID',
//   async (newProduct: IProductUpdate, {rejectWithValue}) => {
//     try {
//       return await (await ProductService.updateProductAmountByID(newProduct)).data;
      
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// );

// export const getAllGenres = createAsyncThunk(
//   'PRODUCT/getAllGenres',
//   async (_, {rejectWithValue}) => {
//     try {
//       return await (await GenreService.getAllGenres()).data;      
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// );
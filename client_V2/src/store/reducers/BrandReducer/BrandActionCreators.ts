import { createAsyncThunk } from "@reduxjs/toolkit";
import BrandService from "../../../services/BrandService";
import { IBrand } from "../../../types/IBrand";

export const addBrand = createAsyncThunk(
  'BRAND/addBrand',
  async (brand: IBrand, {rejectWithValue}) => {
    try {
      return await (await BrandService.addBrand(brand)).data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBrands = createAsyncThunk(
  'BRAND/getBrands',
  async (_, {rejectWithValue}) => {
    try {
      return await (await BrandService.getBrands()).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBrandByID = createAsyncThunk(
  'BRAND/getBrandByID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await BrandService.getBrandByID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

// export const updateBrandAmountByID = createAsyncThunk(
//   'BRAND/updateBrandAmountByID',
//   async (newBrand: IBrandUpdate, {rejectWithValue}) => {
//     try {
//       return await (await BrandService.updateBrandAmountByID(newBrand)).data;
      
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// );

// export const getAllGenres = createAsyncThunk(
//   'BRAND/getAllGenres',
//   async (_, {rejectWithValue}) => {
//     try {
//       return await (await GenreService.getAllGenres()).data;      
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// );
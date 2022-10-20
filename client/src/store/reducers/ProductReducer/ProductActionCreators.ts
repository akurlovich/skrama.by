import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductInfoService from "../../../services/ProductInfoService";
import ProductService from "../../../services/ProductService";
import { IProductInfo } from "../../../types/IProductInfo";
import { IProductInfoNew } from "../../../types/IProductInfoNew";
import { IProductInfoResponse } from "../../../types/IProductInfoResponse";

interface IProductAdd {
  product: FormData,
  productInfo: IProductInfoNew[],
}

export const addProduct = createAsyncThunk(
  'PRODUCT/addProduct',
  async (data: IProductAdd, {rejectWithValue}) => {
    console.log(data)
    try {
      // const newProduct = await (await ProductService.addProduct(data.product)).data;
      // const addInfo = async (array: IProductInfoNew[]) => {
      //   for (const item of array) {
      //     await ProductInfoService.addProductInfo({...item, productID: newProduct._id})
      //   }
      // }
      // await addInfo(data.productInfo);
      // // await ProductInfoService.addProductInfo({productInfo: data.productInfo, productID: newProduct._id});
      // return newProduct;
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

export const getAllProductsInfo = createAsyncThunk(
  'PRODUCT/getAllProductsInfo',
  async (_, {rejectWithValue}) => {
    try {
      return await (await ProductInfoService.getAllProductsInfo()).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getProductInfoByProductID = createAsyncThunk(
  'PRODUCT/getProductInfoByProductID',
  async (id: string, {rejectWithValue}) => {
    try {
      return await (await ProductInfoService.getProductsInfoByProductID(id)).data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const addProductInfoType = createAsyncThunk(
  'PRODUCT/addProductInfoType',
  async (productInfo: IProductInfoNew, {rejectWithValue}) => {
    console.log(productInfo)
    try {
      const newProductInfo = await (await ProductInfoService.addProductInfo({...productInfo, productID: productInfo.typeID, description: ''})).data;
      
      return newProductInfo;
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
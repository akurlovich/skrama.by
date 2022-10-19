import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IProductInfo } from "../types/IProductInfo";
import { IProductInfoResponse } from "../types/IProductInfoResponse";

export default class ProductInfoService {
  static async addProductInfo(product: IProductInfo): Promise<AxiosResponse<IProductInfoResponse>> {
    return serverApi.post<IProductInfoResponse>('/productinfo', product);
  };

  static async getProductsInfoByProductID(productID: string): Promise<AxiosResponse<IProductInfoResponse[]>> {
    return serverApi.get<IProductInfoResponse[]>(`/productinfos/${productID}`);
  };

  static async getProductInfoByID(id: string): Promise<AxiosResponse<IProductInfoResponse>> {
    return serverApi.get<IProductInfoResponse>(`/productinfo/${id}`);
  };

  static async getAllProductsInfo(): Promise<AxiosResponse<IProductInfoResponse[]>> {
    return serverApi.get<IProductInfoResponse[]>(`/productinfos`);
  };

  // static async updateProductAmountByID(newProduct: IProductUpdate): Promise<AxiosResponse<IProductResponse>> {
  //   return serverApi.put<IProductResponse>(`/product`, newProduct);
  // };
}
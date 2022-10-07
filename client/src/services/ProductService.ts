import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IProduct } from "../types/IProduct";
import { IProductResponse } from "../types/IProductResponse";
// import { IProduct, IProductUpdate } from "../types/IProduct";
// import { IProductResponse } from "../types/IProductResponse";

export default class ProductService {
  static async addProduct(product: IProduct): Promise<AxiosResponse<IProductResponse>> {
    return serverApi.post<IProductResponse>('/product', product);
  };

  static async getProducts(): Promise<AxiosResponse<IProductResponse[]>> {
    return serverApi.get<IProductResponse[]>('/products');
  };

  static async getProductByID(id: string): Promise<AxiosResponse<IProductResponse>> {
    return serverApi.get<IProductResponse>(`/product/${id}`);
  };

  // static async updateProductAmountByID(newProduct: IProductUpdate): Promise<AxiosResponse<IProductResponse>> {
  //   return serverApi.put<IProductResponse>(`/product`, newProduct);
  // };
}
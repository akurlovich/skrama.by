import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IBrand } from "../types/IBrand";
import { IBrandResponse } from "../types/IBrandResponse";

export default class BrandService {
  static async addBrand(brand: IBrand): Promise<AxiosResponse<IBrandResponse>> {
    return serverApi.post<IBrandResponse>('/brand', brand);
  };

  static async getBrands(): Promise<AxiosResponse<IBrandResponse[]>> {
    return serverApi.get<IBrandResponse[]>('/brands');
  };

  static async getBrandByID(id: string): Promise<AxiosResponse<IBrandResponse>> {
    return serverApi.get<IBrandResponse>(`/brand/${id}`);
  };

  // static async updateBrandAmountByID(newBrand: IBrandUpdate): Promise<AxiosResponse<IBrandResponse>> {
  //   return serverApi.put<IBrandResponse>(`/product`, newBrand);
  // };
}
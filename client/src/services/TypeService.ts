import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IType } from "../types/IType";
import { ITypeResponse } from "../types/ITypeResponse";

export default class TypeService {
  static async addType(type: IType): Promise<AxiosResponse<ITypeResponse>> {
    return serverApi.post<ITypeResponse>('/type', type);
  };

  static async getTypes(): Promise<AxiosResponse<ITypeResponse[]>> {
    return serverApi.get<ITypeResponse[]>('/types');
  };

  static async getTypeByID(id: string): Promise<AxiosResponse<ITypeResponse>> {
    return serverApi.get<ITypeResponse>(`/type/${id}`);
  };

  // static async updateTypeAmountByID(newType: ITypeUpdate): Promise<AxiosResponse<ITypeResponse>> {
  //   return serverApi.put<ITypeResponse>(`/product`, newType);
  // };
}
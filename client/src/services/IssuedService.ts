import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IIssued } from "../types/IIssued";
import { IIssuedResponse } from "../types/IIssuedResponse";

export default class IssuedService {
  static async addIssued(issued: IIssued): Promise<AxiosResponse<IIssuedResponse>> {
    return serverApi.post<IIssuedResponse>('/issued', issued);
  };

  static async getIssueds(): Promise<AxiosResponse<IIssuedResponse[]>> {
    return serverApi.get<IIssuedResponse[]>('/issueds')
  };

  static async getAllIssuedsByBookID(id: string): Promise<AxiosResponse<IIssuedResponse[]>> {
    return serverApi.get<IIssuedResponse[]>(`/issued/books/${id}`);
  };

  static async getAllIssuedsByUserID(id: string): Promise<AxiosResponse<IIssuedResponse[]>> {
    return serverApi.get<IIssuedResponse[]>(`/issued/users/${id}`);
  };

  static async deleteIssued(id: string): Promise<AxiosResponse<IIssuedResponse>> {
    return serverApi.delete<IIssuedResponse>(`/issued/${id}`);
  };

}
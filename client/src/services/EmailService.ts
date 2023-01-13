import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IEmailMessage } from "../types/IEmailMessageClient";
// import { IType } from "../types/IType";
// import { ITypeResponse } from "../types/ITypeResponse";

export default class EmailService {
  static async sendEmail(customerOrder: IEmailMessage): Promise<AxiosResponse<IEmailMessage>> {
    // console.log('sdfsdfs', customerName)
    return serverApi.post<IEmailMessage>('/emailnotification', customerOrder);
  };

  // static async getTypes(): Promise<AxiosResponse<ITypeResponse[]>> {
  //   return serverApi.get<ITypeResponse[]>('/types');
  // };

  // static async getTypeByID(id: string): Promise<AxiosResponse<ITypeResponse>> {
  //   return serverApi.get<ITypeResponse>(`/type/${id}`);
  // };

  // static async updateTypeAmountByID(newType: ITypeUpdate): Promise<AxiosResponse<ITypeResponse>> {
  //   return serverApi.put<ITypeResponse>(`/product`, newType);
  // };
}
import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IEmailMessage } from "../types/IEmailMessageClient";

export default class EmailService {
  static async sendEmail(customerOrder: IEmailMessage): Promise<AxiosResponse<IEmailMessage>> {
    // console.log('sdfsdfs', customerName)
    return serverApi.post<IEmailMessage>('/emailnotification', customerOrder);
  };

}
import { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/IAuthResponse";
import serverApi from '../http/index';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return serverApi.post<IAuthResponse>('/login', {email, password});
  };

  static async registration(email: string, password: string, profileImage: string): Promise<AxiosResponse<IAuthResponse>> {
    return serverApi.post<IAuthResponse>('/registration', {email, password, profileImage});
  };
  
  static async logout(): Promise<void> {
    return serverApi.post('/logout');
  }
}
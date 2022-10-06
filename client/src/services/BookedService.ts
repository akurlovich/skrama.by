import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IBooked } from "../types/IBooked";
import { IBookedResponse } from "../types/IBookedResponse";

export default class BookedService {
  static async addBooked(booked: IBooked): Promise<AxiosResponse<IBookedResponse>> {
    return serverApi.post<IBookedResponse>('/booked', booked);
  };

  static async getBookeds(): Promise<AxiosResponse<IBookedResponse[]>> {
    return serverApi.get<IBookedResponse[]>('/bookeds')
  };

  static async getAllBookedsByBookID(id: string): Promise<AxiosResponse<IBookedResponse[]>> {
    return serverApi.get<IBookedResponse[]>(`/booked/books/${id}`);
  };

  static async getAllBookedsByUserID(id: string): Promise<AxiosResponse<IBookedResponse[]>> {
    return serverApi.get<IBookedResponse[]>(`/booked/users/${id}`);
  };

  static async deleteBooked(id: string): Promise<AxiosResponse<IBookedResponse>> {
    return serverApi.delete<IBookedResponse>(`/booked/${id}`);
  };

}
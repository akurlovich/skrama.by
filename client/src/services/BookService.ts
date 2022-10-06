import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IBook, IBookUpdate } from "../types/IBook";
import { IBookResponse } from "../types/IBookResponse";

export default class BookService {
  static async addBook(book: IBook): Promise<AxiosResponse<IBookResponse>> {
    return serverApi.post<IBookResponse>('/books', book);
  };

  static async getBooks(): Promise<AxiosResponse<IBookResponse[]>> {
    return serverApi.get<IBookResponse[]>('/books')
  };

  static async getBookByID(id: string): Promise<AxiosResponse<IBookResponse>> {
    return serverApi.get<IBookResponse>(`/books/${id}`);
  };

  static async updateBookAmountByID(newBook: IBookUpdate): Promise<AxiosResponse<IBookResponse>> {
    return serverApi.put<IBookResponse>(`/books`, newBook);
  };
}
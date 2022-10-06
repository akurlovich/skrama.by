import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IGenreResponse } from "../types/IGenreResponse";

export default class GenreService {
  static async addGenre(genre: string): Promise<AxiosResponse<IGenreResponse>> {
    return serverApi.post<IGenreResponse>('/genres', genre);
  };

  static async getAllGenres(): Promise<AxiosResponse<IGenreResponse[]>> {
    return serverApi.get<IGenreResponse[]>('/genres')
  };

}
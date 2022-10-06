import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IComment, ICommentUpdate } from "../types/IComment";
import { ICommentResponse } from "../types/ICommentResponse";

export default class CommentService {
  static async addComment(comment: IComment): Promise<AxiosResponse<ICommentResponse>> {
    return serverApi.post<ICommentResponse>('/comment', comment);
  };

  static async getComments(): Promise<AxiosResponse<ICommentResponse[]>> {
    return serverApi.get<ICommentResponse[]>('/comments')
  };

  static async getAllCommentsByBookID(id: string): Promise<AxiosResponse<ICommentResponse[]>> {
    return serverApi.get<ICommentResponse[]>(`/comment/books/${id}`);
  };

  static async getAllCommentsByUserID(id: string): Promise<AxiosResponse<ICommentResponse[]>> {
    return serverApi.get<ICommentResponse[]>(`/comment/users/${id}`);
  };

  static async updateCommentByModerator(newComment: ICommentUpdate): Promise<AxiosResponse<ICommentResponse>> {
    return serverApi.put<ICommentResponse>(`/comment`, newComment);
  };

  static async deleteComment(id: string): Promise<AxiosResponse<ICommentResponse>> {
    return serverApi.delete<ICommentResponse>(`/comment/${id}`);
  };

}
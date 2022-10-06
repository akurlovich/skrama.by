export interface ICommentResponse {
  _id: string;
  userID: string;
  bookID: string;
  comment: string,
  createdAt: Date;
  updatedAt: Date;
}
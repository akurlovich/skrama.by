export interface IComment {
  userID: string,
  bookID: string,
  comment: string,
};

export interface ICommentUpdate {
  id: string,
  comment: string,
}
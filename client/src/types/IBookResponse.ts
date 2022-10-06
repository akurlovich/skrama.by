export interface IBookResponse {
  _id: string,
  title: string,
  author: string,
  year: number,
  genre: string[],
  description: string,
  coverImage: string,
  amount: number,
};
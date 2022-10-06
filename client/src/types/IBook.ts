export interface IBook {
  title: string,
  author: string,
  year: number,
  genre: string,
  description: string,
  coverImage: string,
  amount: number,
};

export interface IBookUpdate {
  id: string,
  amount: number,
}
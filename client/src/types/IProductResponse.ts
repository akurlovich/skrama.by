export interface IProductResponse extends Document {
  _id: string,
  name: string,
  price: number,
  rating: number,
  count: number,
  coverImage: string,
  typeID: string,
  brandID: string,
}
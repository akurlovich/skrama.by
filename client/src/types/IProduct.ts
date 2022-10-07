export interface IProduct extends Document {
  name: string,
  price: number,
  rating: number,
  count: number,
  coverImage: string,
  typeID: string,
  brandID: string,
}
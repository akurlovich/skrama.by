import { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string,
  price: number,
  rating: number,
  count: number,
  coverImage: string,
  typeID: Schema.Types.ObjectId,
  brandID: Schema.Types.ObjectId,
}
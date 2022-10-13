import { Document, Schema } from "mongoose";

export interface IProductColor extends Document {
  name: string,
  coverImage: string,
  typeID: Schema.Types.ObjectId,
  brandID: Schema.Types.ObjectId,
}
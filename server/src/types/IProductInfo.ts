import { Document, Schema } from "mongoose";

export interface IProductInfo extends Document {
  productID: Schema.Types.ObjectId,
  title: string,
  description: string,
}
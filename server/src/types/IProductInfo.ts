import { Document, Schema } from "mongoose";

export interface IProductInfo extends Document {
  title: string,
  description: string,
  productID: Schema.Types.ObjectId,
  typeID: Schema.Types.ObjectId,
}
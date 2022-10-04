import { Document, Schema } from "mongoose";

export interface IBasketProduct extends Document {
  productID: Schema.Types.ObjectId,
  basketID: Schema.Types.ObjectId,
}
import { Document, Schema } from "mongoose";

export interface IRating extends Document {
  userID: Schema.Types.ObjectId,
  productID: Schema.Types.ObjectId,
  rate: number,
}
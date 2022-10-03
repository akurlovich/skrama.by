import { Document, Schema } from "mongoose";

export interface IBasket extends Document {
  userID: Schema.Types.ObjectId,
}
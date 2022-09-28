import { Document, Schema } from "mongoose";

export interface IBooked extends Document {
  userID: Schema.Types.ObjectId,
  bookID: Schema.Types.ObjectId,
}
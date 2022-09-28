import { Document, Schema } from "mongoose";

export interface IIssued extends Document {
  userID: Schema.Types.ObjectId,
  bookID: Schema.Types.ObjectId,
}
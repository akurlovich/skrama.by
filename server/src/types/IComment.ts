import { Document, Schema } from "mongoose";

export interface IComment extends Document {
  userID: Schema.Types.ObjectId,
  bookID: Schema.Types.ObjectId,
  comment: string,
}
import { Document, Schema } from "mongoose";

export interface IToken extends Document {
  user: Schema.Types.ObjectId,
  refreshToken: string,
}
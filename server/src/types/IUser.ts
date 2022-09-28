import { Binary } from "mongodb";
import { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string,
  password: string,
  isBlocked: boolean,
  profileImage: string | Binary,
  role: Array<Schema.Types.ObjectId>,
}
import { Document } from "mongoose";

export interface IRole extends Document {
  value: string,
}
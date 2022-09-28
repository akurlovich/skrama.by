import { Document } from "mongoose";

export interface IGenre extends Document {
  value: string,
}
import { Document, Schema } from "mongoose";

export interface IDevice extends Document {
  type: string,
}
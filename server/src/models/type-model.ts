import { Schema, model } from "mongoose";
import { IType } from "../types/IType";

const TypeSchema: Schema = new Schema<IType>({
  name: {
    type: String,
    required: true,
  },
},
{ timestamps: true },
);

export default model<IType>('Type', TypeSchema);
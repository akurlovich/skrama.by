import { Schema, model } from "mongoose";
import { IBrand } from "../types/IBrand";

const BrandSchema: Schema = new Schema<IBrand>({
  name: {
    type: String,
    required: true,
  },
},
{ timestamps: true },
);

export default model<IBrand>('Brand', BrandSchema);
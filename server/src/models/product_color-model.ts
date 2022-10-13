import { Schema, model } from "mongoose";
import { IProductColor } from "../types/IProductColor";

const ProductColorSchema: Schema = new Schema<IProductColor>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  coverImage: {
    type: String,
    required: true,
    default: '',
  },
  typeID: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
    required: true,
  },
  brandID: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
},
{ timestamps: true },
);

export default model<IProductColor>('ProductColor', ProductColorSchema);
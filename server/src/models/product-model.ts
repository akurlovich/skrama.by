import { Schema, model } from "mongoose";
import { IProduct } from "../types/IProduct";

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  typeID: [{
    type: Schema.Types.ObjectId,
    ref: 'Type',
    required: true,
  }],
  brandID: [{
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  }],
},
{ timestamps: true },
);

export default model<IProduct>('Product', ProductSchema);
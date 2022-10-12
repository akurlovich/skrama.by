import { Schema, model } from "mongoose";
import { IProduct } from "../types/IProduct";

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
    default: 1,
  },
  // rating: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Rating',
  //   required: true,
  //   default: 0,
  // }],
  rating: {
    type: Number,
    required: true,
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

export default model<IProduct>('Product', ProductSchema);
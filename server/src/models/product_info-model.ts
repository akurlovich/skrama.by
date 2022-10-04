import { Schema, model } from "mongoose";
import { IProductInfo } from "../types/IProductInfo";

const ProductInfoSchema: Schema = new Schema<IProductInfo>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productID: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }],
},
{ timestamps: true },
);

export default model<IProductInfo>('ProductInfo', ProductInfoSchema);
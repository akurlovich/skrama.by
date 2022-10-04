import { Schema, model } from "mongoose";
import { IBasketProduct } from "../types/IBasketProduct";

const BasketProductSchema: Schema = new Schema<IBasketProduct>({
  productID: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }],
  basketID: [{
    type: Schema.Types.ObjectId,
    ref: 'Basket',
    required: true,
  }],
},
{ timestamps: true },
);

export default model<IBasketProduct>('BasketProduct', BasketProductSchema);
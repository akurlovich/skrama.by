import { Schema, model } from "mongoose";
import { IRating } from "../types/IRating";

const RatingSchema: Schema = new Schema<IRating>({
  productID: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }],
  userID: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  rate: {
    type: Number,
    required: true,
  },
},
{ timestamps: true },
);

export default model<IRating>('Rating', RatingSchema);
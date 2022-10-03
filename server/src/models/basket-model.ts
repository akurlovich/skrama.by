import { Schema, model } from "mongoose";
import { IBasket } from "../types/IBasket";

const BasketSchema: Schema = new Schema<IBasket>({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true },
);

export default model<IBasket>('Booked', BasketSchema);
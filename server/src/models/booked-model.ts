import { Schema, model } from "mongoose";
import { IBooked } from "../types/IBooked";

const BookedSchema: Schema = new Schema<IBooked>({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bookID: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
}, { timestamps: true },
);

export default model<IBooked>('Booked', BookedSchema);
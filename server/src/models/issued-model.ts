import { Schema, model } from "mongoose";
import { IIssued } from "../types/IIssued";

const IssuedSchema: Schema = new Schema<IIssued>({
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

export default model<IIssued>('Issued', IssuedSchema);
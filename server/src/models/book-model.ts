import { model, Schema } from "mongoose";
import { IBook } from "../types/IBook";

const BookSchema: Schema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: [{
    type: Schema.Types.ObjectId,
    ref: 'Genre',
    required: true,
  }],
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
},
{ timestamps: true },
);

export default model<IBook>('Book', BookSchema);
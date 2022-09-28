import { Schema, model } from "mongoose";
import { IComment } from "../types/IComment";

const CommentSchema: Schema = new Schema<IComment>({
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
  comment: {
    type: String,
    required: true,
  },
}, { timestamps: true },
);

export default model<IComment>('Comment', CommentSchema);
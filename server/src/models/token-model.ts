import { Schema, model } from "mongoose";
import { IToken } from "../types/IToken";

const TokenSchema: Schema = new Schema<IToken>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  refreshToken: {
    type: String,
    required: true,
  },
}, { timestamps: true },
);

export default model<IToken>('Token', TokenSchema);
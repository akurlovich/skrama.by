import { Schema, model } from "mongoose";
import { IGenre } from "../types/IGenre";

const GenreSchema: Schema = new Schema<IGenre>({
  value: {
    type: String,
    required: true,
    unique: true,
  },
}, {timestamps: true});

export default model<IGenre>('Genre', GenreSchema);
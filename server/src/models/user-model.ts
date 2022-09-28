import { Schema, model } from "mongoose";
import { IUser } from "../types/IUser";

const UserSchema: Schema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: '',
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  role: [{
    type: Schema.Types.ObjectId,
    ref: 'Role',
    default: [],
  }],
},
{ timestamps: true },
);

export default model<IUser>('User', UserSchema);
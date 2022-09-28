import { Schema, model } from "mongoose";
import { IRole } from "../types/IRole";

const RoleSchema: Schema = new Schema<IRole>({
  value: {
    type: String,
    required: true,
    unique: true,
  },
}, {timestamps: true});

export default model<IRole>('Role', RoleSchema);
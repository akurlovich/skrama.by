import { Schema, model } from "mongoose";
import { IDevice } from "../types/IDevice";

const DeviceSchema: Schema = new Schema<IDevice>({
  type: {
    type: String,
    required: true,
  },
},
{ timestamps: true },
);

export default model<IDevice>('Device', DeviceSchema);
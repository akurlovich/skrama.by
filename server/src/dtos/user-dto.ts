import { Binary } from "mongodb";
import { Schema } from "mongoose";
import { IUser } from "../types/IUser";

export default class UserDto {
  email: string;
  id: string;
  isBlocked: boolean;
  profileImage: string | Binary;
  role: Schema.Types.ObjectId[];

  constructor(model: IUser) {
    this.email = model.email;
    this.id = model._id;
    this.isBlocked = model.isBlocked;
    this.profileImage = model.profileImage;
    this.role = model.role;
  }
}
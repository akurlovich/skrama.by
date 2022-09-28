import { Binary } from "mongodb";
import { Document, Schema } from "mongoose";

export interface IBook extends Document {
  title: string,
  author: string,
  year: number,
  genre: Array<Schema.Types.ObjectId>,
  description: string,
  coverImage: string | Binary,
  amount: number,
};

export interface IBookDTO {
  _id: string,
  title: string,
  author: string,
  year: number,
  genre: string[],
  description: string,
  coverImage: string | Binary,
  amount: number,
};
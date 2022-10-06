import { IBookResponse } from "./IBookResponse";
import { IUser } from "./IUser";

export interface IUsersBookedsAndIssueds {
  user: IUser,
  userBookeds: IBookResponse[],
  userIssueds: IBookResponse[],
}
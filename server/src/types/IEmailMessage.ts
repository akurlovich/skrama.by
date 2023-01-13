import { ICartItem } from "./ICartItem";

export interface IEmailMessage {
  name: string,
  phone: string,
  email: string,
  address: string,
  items: ICartItem[],
}
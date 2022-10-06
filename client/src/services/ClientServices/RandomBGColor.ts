import { BOOKS_BG_COLORS } from "../../constants/user";

export const randomBGColor = () => {
  return Math.floor(Math.random() * BOOKS_BG_COLORS.length);
}
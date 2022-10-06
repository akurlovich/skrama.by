import { IBookResponse } from "../../types/IBookResponse";
import { IUsersBookedsAndIssueds } from "../../types/IUsersAndBookeds";
import BookedService from "../BookedService";
import BookService from "../BookService";
import UserService from "../UserService";
import IssuedService from '../IssuedService';

export const usersBookeds = async (userID: string) => {
  const bookeds = await (await BookedService.getAllBookedsByUserID(userID)).data;
  const userBooks = [] as IBookResponse[];

  for (let i = 0; i < bookeds.length; i++) {
    let book = await (await BookService.getBookByID(bookeds[i].bookID)).data;
    userBooks.push(book)
  };

  return userBooks;
};

export const usersIssueds = async (userID: string) => {
  const issueds = await (await IssuedService.getAllIssuedsByUserID(userID)).data;
  const userIssueds = [] as IBookResponse[];

  for (let i = 0; i < issueds.length; i++) {
    let book = await (await BookService.getBookByID(issueds[i].bookID)).data;
    userIssueds.push(book)
  };

  return userIssueds;
};

export const allUserBookedsAndIssueds = async () => {
  const allBookeds = await (await BookedService.getBookeds()).data;
  const allIssueds = await (await IssuedService.getIssueds()).data;
  const newUserID: string[] = [];
  const allUserBookeds: IUsersBookedsAndIssueds[] = [];

  for (let i = 0; i < allBookeds.length; i++) {
    if (!newUserID.includes(allBookeds[i].userID)) {
      newUserID.push(allBookeds[i].userID);
      const user = await (await UserService.getUserByID(allBookeds[i].userID)).data;
      const userBooksBookeds = await usersBookeds(allBookeds[i].userID);
      const userBooksIssueds = await usersIssueds(allBookeds[i].userID);
      allUserBookeds.push({user: user, userBookeds: userBooksBookeds, userIssueds: userBooksIssueds})
    }
  };

  for (let i = 0; i < allIssueds.length; i++) {
    if (!newUserID.includes(allIssueds[i].userID)) {
      newUserID.push(allIssueds[i].userID);
      const user = await (await UserService.getUserByID(allIssueds[i].userID)).data;
      const userBooksBookeds = await usersBookeds(allIssueds[i].userID);
      const userBooksIssueds = await usersIssueds(allIssueds[i].userID);
      allUserBookeds.push({user: user, userBookeds: userBooksBookeds, userIssueds: userBooksIssueds})
    }
  }

  return allUserBookeds;
};

export const bookUserBookedsAndIssueds = async (bookID: string) => {
  const allBookeds = await (await BookedService.getAllBookedsByBookID(bookID)).data;
  const allIssueds = await (await IssuedService.getAllIssuedsByBookID(bookID)).data;
  const newUserID: string[] = [];
  const allUserBookeds: IUsersBookedsAndIssueds[] = [];

  for (let i = 0; i < allBookeds.length; i++) {
    if (!newUserID.includes(allBookeds[i].userID)) {
      newUserID.push(allBookeds[i].userID);
      const user = await (await UserService.getUserByID(allBookeds[i].userID)).data;
      const userBooksBookeds = await usersBookeds(allBookeds[i].userID);
      const userBooksIssueds = await usersIssueds(allBookeds[i].userID);
      allUserBookeds.push({user: user, userBookeds: userBooksBookeds.filter(item => item._id === bookID), userIssueds: userBooksIssueds.filter(item => item._id === bookID)
      })
    }
  };

  for (let i = 0; i < allIssueds.length; i++) {
    if (!newUserID.includes(allIssueds[i].userID)) {
      newUserID.push(allIssueds[i].userID);
      const user = await (await UserService.getUserByID(allIssueds[i].userID)).data;
      const userBooksBookeds = await usersBookeds(allIssueds[i].userID);
      const userBooksIssueds = await usersIssueds(allIssueds[i].userID);
      allUserBookeds.push({user: user, userBookeds: userBooksBookeds.filter(item => item._id === bookID), userIssueds: userBooksIssueds.filter(item => item._id === bookID)
      })
    }
  };

  return allUserBookeds;
};
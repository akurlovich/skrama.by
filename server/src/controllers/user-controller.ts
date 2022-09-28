import {  NextFunction, Request, Response } from "express";
import userService from "../service/user-service";
// import { validationResult } from 'express-validator';
// import ApiError from "../exceptions/api-error";

class UserController {
 
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  };

};

export default new UserController();
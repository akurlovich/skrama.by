import { NextFunction, Request, Response } from "express";
import emailService from "../service/email-service";

class EmailController {
  async sendEmail(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log(req.body);
      // const { name } = req.body;
      const newEmail = await emailService.sendEmail(req.body);
      // console.log(newEmail);
      return res.json(newEmail);
    } catch (error) {
      next(error);
    }
  };

};

export default new EmailController;
import { NextFunction, Request, Response } from "express";
import typeService from "../service/type-service";

class TypeController {
  async addType(req: Request, res: Response, next: NextFunction) {
    try {
      const newType = await typeService.addType(req.body);
      return res.json(newType);
    } catch (error) {
      next(error);
    }
  };

  async getType(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const type = await typeService.getType(value);
      return res.json(type);
    } catch (error) {
      next(error);
    }
  };

  async getTypeByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const type = await typeService.getTypeByID(req.params.id);
      return res.json(type);
    } catch (error) {
      next(error);
    }
  };

  async getAllTypes(req: Request, res: Response, next: NextFunction) {
    try {
      const types = await typeService.getAllTypes();
      return res.json(types);
    } catch (error) {
      next(error);
    }
  };
};

export default new TypeController;
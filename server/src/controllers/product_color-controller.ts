import { NextFunction, Request, Response } from "express";
import product_colorService from "../service/product_color-service";
import { v4 as uuid } from 'uuid';
import path from 'path';

class ProductColorController {
  async addProductColor(req: Request, res: Response, next: NextFunction) {
    try {
      let fileName = uuid() + '.jpg';
      const { coverImage } = req.files;
      // @ts-ignore
      coverImage.mv(path.resolve(__dirname, '../..', 'static/product-color', fileName));
      const newProductColor = await product_colorService.addProductColor({...req.body, coverImage: fileName});
      return res.json(newProductColor);
    } catch (error) {
      next(error);
    }
  };

  async getProductColor(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const brand = await product_colorService.getProductColor(value);
      return res.json(brand);
    } catch (error) {
      next(error);
    }
  };

  async getProductColorByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const brand = await product_colorService.getProductColorByID(req.params.id);
      return res.json(brand);
    } catch (error) {
      next(error);
    }
  };

  async getAllProductColors(req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await product_colorService.getAllProductColors();
      return res.json(brands);
    } catch (error) {
      next(error);
    }
  };
};

export default new ProductColorController;
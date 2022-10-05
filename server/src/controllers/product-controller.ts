import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import path from 'path';
import productService from "../service/product-service";

class ProductController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      let fileName = uuid() + '.jpg';
      const { coverImage } = req.files;
      // @ts-ignore
      coverImage.mv(path.resolve(__dirname, '../..', 'static', fileName));
      const newProduct = await productService.addProduct({...req.body, coverImage: fileName});
      return res.json(newProduct);
    } catch (error) {
      next(error);
    }
  };

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const product = await productService.getProduct(value);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };

  async getProductByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const product = await productService.getProductByID(req.params.id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };

  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getAllProducts();
      return res.json(products);
    } catch (error) {
      next(error);
    }
  };
};

export default new ProductController;
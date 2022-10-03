import { NextFunction, Request, Response } from "express";
import productService from "../service/product-service";

class ProductController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct = await productService.addProduct(req.body);
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
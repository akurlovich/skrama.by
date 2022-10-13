import { NextFunction, Request, Response } from "express";
import product_infoService from "../service/product_info-service";
// import brandService from "../service/brand-service";

class ProductInfoController {
  async addProductInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const newProductInfo = await product_infoService.addProductInfo(req.body);
      return res.json(newProductInfo);
    } catch (error) {
      next(error);
    }
  };

  async getProductInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const brand = await product_infoService.getProductInfo(value);
      return res.json(brand);
    } catch (error) {
      next(error);
    }
  };

  async getProductInfoByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const brand = await product_infoService.getProductInfoByID(req.params.id);
      return res.json(brand);
    } catch (error) {
      next(error);
    }
  };

  async getAllProductInfos(req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await product_infoService.getAllProductInfo();
      return res.json(brands);
    } catch (error) {
      next(error);
    }
  };
};

export default new ProductInfoController;
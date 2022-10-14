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
      const { productID } = req.body;
      const productInfo = await product_infoService.getProductInfo(productID);
      return res.json(productInfo);
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

  async getAllProductInfoByProductID(req: Request<{ productID: string }>, res: Response, next: NextFunction) {
    try {
      const productInfo = await product_infoService.getAllProductInfoByProductID(req.params.productID);
      return res.json(productInfo);
    } catch (error) {
      next(error);
    }
  };
};

export default new ProductInfoController;
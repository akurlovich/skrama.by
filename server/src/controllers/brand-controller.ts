import { NextFunction, Request, Response } from "express";
import brandService from "../service/brand-service";

class BrandController {
  async addBrand(req: Request, res: Response, next: NextFunction) {
    try {
      const newBrand = await brandService.addBrand(req.body);
      return res.json(newBrand);
    } catch (error) {
      next(error);
    }
  };

  async getBrand(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const brand = await brandService.getBrand(value);
      return res.json(brand);
    } catch (error) {
      next(error);
    }
  };

  async getBrandByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const brand = await brandService.getBrandByID(req.params.id);
      return res.json(brand);
    } catch (error) {
      next(error);
    }
  };

  async getAllBrands(req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await brandService.getAllBrands();
      return res.json(brands);
    } catch (error) {
      next(error);
    }
  };
};

export default new BrandController;
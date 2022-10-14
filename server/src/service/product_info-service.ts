import product_infoModel from "../models/product_info-model";
import { IProductInfo } from "../types/IProductInfo";

class ProductInfoService {
  async addProductInfo(info: IProductInfo) {
    return await product_infoModel.create(info);
  };

  async getProductInfo(value: string) {
    return await product_infoModel.findOne({value});
  };

  async getProductInfoByID(id: string) {
    return await product_infoModel.findById(id);
  };

  async getAllProductInfo() {
    return await product_infoModel.find();
  };

  async getAllProductInfoByProductID(productID: string) {
    return await product_infoModel.find({productID});
  };
    
};

export default new ProductInfoService();
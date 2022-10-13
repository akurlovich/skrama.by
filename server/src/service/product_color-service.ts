import product_colorModel from "../models/product_color-model";
import { IProductColor } from "../types/IProductColor";


class ProductColorService {
  async addProductColor(color: IProductColor) {
    return await product_colorModel.create(color);
  };

  async getProductColor(value: string) {
    return await product_colorModel.findOne({value});
  };

  async getProductColorByID(id: string) {
    return await product_colorModel.findById(id);
  };

  async getAllProductColors() {
    return await product_colorModel.find();
  };
    
};

export default new ProductColorService();
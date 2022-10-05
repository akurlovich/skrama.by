import productModel from "../models/product-model"
import { IProduct } from "../types/IProduct";

class ProductService {
  async addProduct(product: IProduct) {
    return await productModel.create(product);
  };

  async getProduct(value: string) {
    return await productModel.findOne({value});
  };

  async getProductByID(id: string) {
    return await productModel.findById(id);
  };

  async getAllProducts() {
    return await productModel.find();
  };
    
};

export default new ProductService();
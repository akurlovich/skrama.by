import { Request } from "express";
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

  async getAllProducts(query: Request) {
    const { typeID, brandID } = query.query;
    if (!brandID && !typeID) {
      return await productModel.find();
    }
    if (brandID && !typeID) {
      return await productModel.find({brandID});
    }
    if (!brandID && typeID) {
      return await productModel.find({typeID});
    }
    if (brandID && typeID) {
      return await productModel.find({typeID, brandID});
    }
    
  };
    
};

export default new ProductService();
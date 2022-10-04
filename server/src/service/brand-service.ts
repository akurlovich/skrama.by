import brandModel from "../models/brand-model";

class BrandService {
  async addBrand(product: string) {
    return await brandModel.create(product);
  };

  async getBrand(value: string) {
    return await brandModel.findOne({value});
  };

  async getBrandByID(id: string) {
    return await brandModel.findById(id);
  };

  async getAllBrands() {
    return await brandModel.find();
  };
    
};

export default new BrandService();
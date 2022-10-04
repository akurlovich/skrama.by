import typeModel from "../models/type-model";

class TypeService {
  async addType(productType: string) {
    return await typeModel.create(productType);
  };

  async getType(value: string) {
    return await typeModel.findOne({value});
  };

  async getTypeByID(id: string) {
    return await typeModel.findById(id);
  };

  async getAllTypes() {
    return await typeModel.find();
  };
    
};

export default new TypeService();
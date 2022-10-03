import roleModel from "../models/role-model";
import { IRole } from "../types/IRole";

class RoleService {
  async addRole(role: IRole) {
    return await roleModel.create(role);
  };

  async getRole(value: string) {
    return await roleModel.findOne({value});
  };

  async getRoleByID(id: string) {
    return await roleModel.findById(id);
  };

  async getAllRoles() {
    return await roleModel.find();
  };
};

export default new RoleService();
import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IRole } from "../types/IRole";

export default class RoleService {
  static async getRoleByID(id: string): Promise<AxiosResponse<IRole>> {
    return serverApi.get<IRole>(`/role/${id}`)
  }
}
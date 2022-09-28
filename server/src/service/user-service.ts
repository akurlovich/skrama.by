// import UserModel from '../models/user-model';
// import bcrypt from 'bcrypt';
// import tokenService from './token-service';
// import UserDto from '../dtos/user-dto';
// import ApiError from '../exceptions/api-error';
// import tokenModel from '../models/token-model';
import userModel from '../models/user-model';
// import roleModel from '../models/role-model';
// import { DEFAULT_USER_ROLE } from '../constants/index';
// import config from '../common/config';
// import jwt from 'jsonwebtoken';

class UserService {
  async registration(email: string, password: string, profileImage: string) {
    
    const user = await userModel.create({email, password, profileImage});
  

    return user;
  };  

  async getAllUsers() {
    // return 'Hi Skrama!!!'
    return await userModel.find();
  };

  
}

export default new UserService();
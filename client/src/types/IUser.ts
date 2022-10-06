export interface IUser {
  email: string;
  id: string;
  isBlocked: boolean;
  profileImage: string;
  role: string[];
};

export interface IUserUpdateProfileImage {
  id: string;
  profileImage: string;
};

export interface IUserUpdateIsBlocked {
  id: string;
  isBlocked: boolean;
};
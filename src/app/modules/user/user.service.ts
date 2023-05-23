import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload); //User = class and user=instance
  await user.save(); // user+instance =built in instance method
  // user.fullName(); // we created custom instance method
  console.log(user.fullName());
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  console.log(admins);
  return admins;
};

/**
 * user =new User
 * user.fullName() //instance method
 *
 * ----------
 * class -> attach ->Method -> Directly call using class
 * User.getAdminUsers()  //clas
 */

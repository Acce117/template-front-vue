import { BaseController } from "@/common/classes/Controller";
import type { UserModel } from "../classes/user";
import type { IUser } from "../interfaces/user.interface";

class UserController extends BaseController<UserModel, IUser>('users'){}

const userController = new UserController();

export default userController;
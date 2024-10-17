import { BaseController } from "@/common/classes/Controller";
import type { UserModel } from "../classes/user";

class UserController extends BaseController<UserModel>('users'){}

const userController = new UserController();

export default userController;
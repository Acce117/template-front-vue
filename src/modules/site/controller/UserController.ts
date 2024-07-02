import { Controller } from "@/common/classes/Controller";
import type { User } from "../classes/user";

class UserController extends Controller<User>{
    readonly url: string = '';
}

const userController = new UserController();

export default userController;
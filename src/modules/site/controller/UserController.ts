import { Controller } from "@/common/classes/Controller";
import type { User } from "../classes/user";
import type { UseSendRequestResult } from "@/common/utils/useSendRequest";

class UserController extends Controller<User>{
    readonly url: string = '';
}

const userController = new UserController();

export default userController;
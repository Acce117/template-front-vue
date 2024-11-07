import { BaseController } from "@/common/classes/Controller";
import type { UserModel } from "../classes/user";
import type { SendRequestTools } from "@/common/utils/useSendRequest";
import { ref } from "vue";

const users = ref([
    {
        id: 1,
        username: 'Acce117',
        email: 'e.carraler117@gmail.com'
    }
]);
//TODO remove
let actualId = 1;

//To visualize
//TODO remove
class UserController extends BaseController<UserModel>('users'){
    constructor() {
        super()
    }
    /**
     * All CRUD functionalities can be removed since are generalized in BaseController
     * The functionalities implemented here work with a mock data used for visualization
     */

    //TODO remove, not necessary
    public createElement(data: UserModel): SendRequestTools {
        users.value.push({id: ++actualId, ...data});
        return { 
            error: ref(null),
            loading: ref(false),
            response: ref(null),
            sendRequest: () => {},
        };
    }

    //TODO remove, not necessary
    public delete(id: number | string): SendRequestTools {
        users.value = users.value.filter((e: { id: string | number; })=>e.id !== id)
        return { 
            error: ref(null),
            loading: ref(false),
            response: ref(null),
            sendRequest: () => {},
        };
    }

    //TODO remove, not necessary
    public getElements(params?: Object): SendRequestTools {
        return { 
            error: ref(null),
            loading: ref(false),
            response: users,
            sendRequest: () => {},
        };
    }

    //TODO remove, not necessary
    public update(id: number | string, data: UserModel): SendRequestTools {
        return { 
            error: ref(null),
            loading: ref(false),
            response: ref(null),
            sendRequest: () => {},
        };
    }
}

const userController = new UserController();

export default userController;
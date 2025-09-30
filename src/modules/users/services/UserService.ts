import { BaseService } from "@/common/classes/service";
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

export class UserService extends BaseService('users'){
    /**
     * All CRUD functionalities can be removed since are generalized in BaseService
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
        const user = users.value.find((user)=> user.id === id);
        
        if(user) {
            user.username = data.username;
            user.email = data.email;
        }

        return { 
            error: ref(null),
            loading: ref(false),
            response: ref(null),
            sendRequest: () => {},
        };
    }
}

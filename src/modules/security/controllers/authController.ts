import { reactive, toValue, type Ref } from "vue";
import type { AxiosError } from "axios";
import { useSendRequest, type SendRequestTools } from "@/common/utils/useSendRequest";
import TokenHandler from "@/common/utils/token-handler";
import type { UserCredentials } from "@/modules/security/interfaces/userCredentials";
import { userStore } from "@/common/store/user-store";

export class AuthController {
    credentials: UserCredentials;
    sendRequestTools: SendRequestTools;

    constructor(url: string) {
        this.credentials = reactive<UserCredentials>({
            username: '',
            password: '',
        });

        this.sendRequestTools = useSendRequest(
            url,
            {
                method: 'POST',
                data: toValue(this.credentials),
                lazy: true,
                cb: this.loginResHandler
            },
        );
    }

    private loginResHandler = (response: Ref<any>, error: Ref<AxiosError | null>) => {
        if (error.value) {
            //TODO handle error
        }
        else {
            //TODO handle response

            //default handle
            const user = userStore();
            TokenHandler.storeToken(response.value.token);
            user.$patch(response.value.user);
        }
    }
}

//change url if necessary
export const loginController = new AuthController('login');
export const registerController = new AuthController('register');
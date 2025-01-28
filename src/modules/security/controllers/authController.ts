import { reactive, toValue, type Ref } from "vue";
import type { AxiosError } from "axios";
import { useSendRequest, type SendRequestTools } from "@/common/utils/useSendRequest";
import TokenHandler from "@/common/utils/token-handler";
import type { UserCredentials } from "@/modules/security/interfaces/userCredentials";
import { userStore } from "@/common/store/user-store";

export class AuthController {
    credentials: UserCredentials;
    sendRequestTools: SendRequestTools;
    context: boolean = false;

    constructor(context: { getCredentials: Function, getUrl: Function }) {
        this.credentials = context.getCredentials();
        
        this.sendRequestTools = useSendRequest(
            context.getUrl(),
            {
                method: 'POST',
                data: (toValue(this.credentials) as UserCredentials),
                lazy: true,
                cb: this.loginResHandler
            },
        );

        this.context = true
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
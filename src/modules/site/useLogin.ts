import { reactive, toValue, type Ref } from "vue";
import { useSendRequest } from "@/common/utils/useSendRequest";
import type { AxiosError } from "axios";
import { userStore } from "./store/user-store";
import tokenHandler from "@/common/utils/token-handler";
import type {UserCredentials} from "@/modules/site/interfaces/userCredentials";
const loginResHandler = (response?: Ref<any>, error?: Ref<AxiosError | null>) => {
    if (error?.value) {
        //handle error
    }
    else {
        //handle response
        const user = userStore();
        tokenHandler.storeToken(response?.value.token);
        user.$patch(response?.value.user);
    }
}

export function useLogin() {
    const credentials = reactive<UserCredentials>({
        username: '',
        password: '',
    })

    const { loading, error, response, sendRequest } = useSendRequest(
        'login', //Change if necessary
        {
            method: 'POST',
            data: toValue(credentials),
            lazy: true,
            cb: loginResHandler
        },
    )

    return {
        credentials,
        loading,
        response,
        error,
        sendRequest: sendRequest as CallableFunction
    }
}
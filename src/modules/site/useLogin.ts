import { reactive, toValue, type Ref } from "vue";
import type { AxiosError } from "axios";
import { useSendRequest } from "@/common/utils/useSendRequest";
import TokenHandler from "@/common/utils/token-handler";
import type { UserCredentials } from "@/modules/site/interfaces/userCredentials";
import { userStore } from "./store/user-store";

const loginResHandler = (response?: Ref<any>, error?: Ref<AxiosError | null>) => {
    if (error?.value) {
        //handle error
    }
    else {
        //handle response
        const user = userStore();
        TokenHandler.storeToken(response?.value.token);
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
        sendRequest: sendRequest as CallableFunction,
    }
}
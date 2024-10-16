import { reactive, toValue, type Ref } from "vue";
import type { AxiosError } from "axios";
import { useSendRequest } from "@/common/utils/useSendRequest";
import TokenHandler from "@/common/utils/token-handler";
import type { UserCredentials } from "@/modules/security/interfaces/userCredentials";
import { userStore } from "@/common/store/user-store";

const loginResHandler = (response: Ref<any>, error: Ref<AxiosError | null>) => {
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

export function useAuth(url: string) {
    const credentials = reactive<UserCredentials>({
        username: '',
        password: '',
    })

    const { loading, error, response, sendRequest } = useSendRequest(
        url,
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
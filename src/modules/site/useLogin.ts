import { reactive, toValue, type Ref } from "vue";
import { useSendRequest } from "../../common/utils/useSendRequest";
import type { AxiosError } from "axios";

function loginResHandler(response?: Ref<any>, error?: Ref<AxiosError| null>){
    if(error?.value){
        //handle error
    }
    else {
        //handle response
    }
}

export function useLogin(){
    const credentials = reactive({
        user_name: '',
        password: '',
    })

    const { loading, error, response, sendRequest} = useSendRequest({
        url: '/login', //Change if necesary
        method: 'POST',
        data: toValue(credentials),
        immediate: false
    }, loginResHandler)

    return {
        credentials,
        loading,
        response,
        error, 
        sendRequest: sendRequest as CallableFunction
    }
}
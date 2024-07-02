import axios, { AxiosError, AxiosHeaders, type AxiosRequestConfig } from "axios";
import { ref, type Ref } from "vue";

interface RequestOptions {
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    data?: Object,
    auth_token?: string,
    lazy?: boolean,
    cb?: (response?: Ref<any>, error?: Ref<AxiosError | null>)=>void
}
export interface UseSendRequestResult {
    response: Ref<any>,
    error: Ref<AxiosError | null>,
    loading: Ref<boolean>,
    sendRequest?: CallableFunction
}

export function useSendRequest(
        url: string,
        requestOptions: RequestOptions,
    ): UseSendRequestResult {

    let response = ref();
    let loading = ref<boolean>(false);
    let error = ref<AxiosError | null>(null);

    function sendRequest() {

        const headers = new AxiosHeaders();

        if (requestOptions.auth_token)
            headers.Authorization = `Bearer ${requestOptions.auth_token}`;
        
        const config: AxiosRequestConfig = {
            headers,
            method: requestOptions.method || 'GET',
            url: `${import.meta.env.VITE_API_PATH}/${url}`,
        }

        if (requestOptions.data)
            !requestOptions.method || requestOptions.method === 'GET' ?
                config.params = requestOptions.data :
                config.data = requestOptions.data;

        axios(config)
            .then(res => {
                response.value = res.data
                error.value = null
            })
            .catch(err => {
                error.value = err
            })
            .finally(async () => {
                loading.value = false;
                if(requestOptions.cb) requestOptions.cb(response, error);
            });

        loading.value = true;
    }

    const result: UseSendRequestResult = {
        response,
        error,
        loading
    };

    !requestOptions.lazy ? sendRequest() : result.sendRequest = sendRequest;

    return result;
}
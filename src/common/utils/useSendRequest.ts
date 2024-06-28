import axios, { AxiosError, AxiosHeaders, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { ref, type Ref } from "vue";
import tokenHandler from "./token-handler";

interface RequestOptions {
    url: string
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    data?: Object,
    immediate?: boolean,
}

export interface UseSendRequestResult {
    response: Ref<any>,
    error: Ref<AxiosError | null>,
    loading: Ref<boolean>,
    sendRequest?: CallableFunction
}

export function useSendRequest(requestOptions: RequestOptions, cb = (response?: Ref<any>, error?: Ref<AxiosError | null>) => { }): UseSendRequestResult {
    let response = ref();
    let loading = ref<boolean>(false);
    let error = ref<AxiosError | null>(null);

    function sendRequest() {

        const config: AxiosRequestConfig = {
            headers: new AxiosHeaders(),
            method: requestOptions.method || 'GET',
            url: `${import.meta.env.VITE_API_PATH}/${requestOptions.url}`,
        }

        const token = tokenHandler.getToken();
        if (token) {
            if (config.headers) config.headers.Authorization = `Bearer ${token}`;
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
                cb();
            });

        loading.value = true;

    }

    const result: UseSendRequestResult = {
        response,
        error,
        loading
    };

    if (requestOptions.immediate || requestOptions.immediate === undefined)
        sendRequest();
    else
        result.sendRequest = sendRequest;
    return result;
}
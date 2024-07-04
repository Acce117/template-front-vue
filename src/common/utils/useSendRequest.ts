import axios, { AxiosError, AxiosHeaders, type AxiosRequestConfig } from "axios";
import { ref, type Ref } from "vue";

/**
 * Options object for request
 */
interface RequestOptions {
    /**
     * Method of the request
     */
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    /**
     * Data to be sent in the request
     */
    data?: Object,
    /**
     * Authorization token
     */
    auth_token?: string,
    /**
     * If the request is made immediately
     * in case of true value, a sendRequest function is returned
     * to be used when the request is going to be sent
     */
    lazy?: boolean,
    /**
     * Callback to handle response or to do anything once
     * the response is fulfilled
     * @param response reactive response object
     * @param error reactive response error
     */
    cb?: (response?: Ref<any>, error?: Ref<AxiosError | null>)=>void
}

export interface UseSendRequestResult {
    /**
     * Reactive response object, it gets the response value if the
     * request is successfully
     */
    response: Ref<any>,

    /**
     * Reactive error object, it gets the error value if the
     * request is failed
     */
    error: Ref<AxiosError | null>,

    /**
     * Reactive loading object, its value is true while the request
     * is still in process, it turns on false once the request ends
     */
    loading: Ref<boolean>,

    /**
     * @function sendRequest - function to manage when to do the request if
     * @RequestOptions.lazy == true
     */
    sendRequest?: CallableFunction
}

/**
 * Returns and UseSendRequestResult object to manage a request response
 *
 * @param url - where the request is going to be sent
 * @param options - options object for request
 *
 * @return UseSendRequestResult Object with reactive response, error and loading attributes
 * in case of @options.lazy == true, a sendRequest function is added
 */
export function useSendRequest(
        url: string,
        options: RequestOptions,
    ): UseSendRequestResult {

    let response = ref();
    let loading = ref<boolean>(false);
    let error = ref<AxiosError | null>(null);

    function sendRequest() {
        const headers = new AxiosHeaders();

        if (options.auth_token)
            headers.Authorization = `Bearer ${options.auth_token}`;
        
        const config: AxiosRequestConfig = {
            headers,
            method: options.method || 'GET',
            url: `${import.meta.env.VITE_API_PATH}/${url}`,
        }

        if (options.data)
            !options.method || options.method === 'GET' ?
                config.params = options.data :
                config.data = options.data;

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
                if(options.cb) options.cb(response, error);
            });

        loading.value = true;
    }

    const result: UseSendRequestResult = {
        response,
        error,
        loading
    };

    !options.lazy ? sendRequest() : result.sendRequest = sendRequest;

    return result;
}
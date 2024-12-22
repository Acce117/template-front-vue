import axiosIns from "@/plugins/axios";
import { AxiosError, AxiosHeaders, type AxiosRequestConfig } from "axios";
import { ref, type Ref } from "vue";

/**
 * Options object for request
 */
interface RequestOptions {
    headers?: AxiosHeaders,
    /**
     * Method of the request
     */
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT',
    /**
     * Data to be sent in the request
     */
    data?: Object,
    /**
     * Query params
     */
    query?: Object,
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
    cb?: (response: Ref<any>, error: Ref<AxiosError | null>) => void
}

export interface SendRequestTools {
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
    sendRequest: CallableFunction
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
export function useSendRequest<I>(
    url: string,
    options: RequestOptions,
): SendRequestTools {

    let response = ref();
    let loading = ref<boolean>(false);
    let error = ref<AxiosError | null>(null);

    const headers = new AxiosHeaders(options.headers);

    const config: AxiosRequestConfig = {
        headers,
        method: options.method || 'GET',
        url,
    }

    if (options.data) config.data = options.data;
    if (options.query) config.params = options.data;

    async function sendRequest() {
        loading.value = true;

        try {
            response.value = (await axiosIns<I>(config)).data;
            error.value = null    
        } catch (e: unknown) {
            error.value = e as AxiosError;
        }

        loading.value = false;
        if (options.cb) options.cb(response, error);
    }

    const result: SendRequestTools = {
        response,
        error,
        loading,
        sendRequest: sendRequest
    };

    if (!options.lazy) sendRequest();

    return result;
}
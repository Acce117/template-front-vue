import axiosIns from "@/plugins/axios";
import { AxiosError, AxiosHeaders, type AxiosRequestConfig } from "axios";
import { ref, type Ref } from "vue";

/**
 * Options object for request
 */
class RequestOptions {
    /**
     * Method of the request
     */
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' = 'GET';
    
    /**
     * Data to be sent in the request
     */
    data?: Object;

    /**
     * If the request is made immediately
     * in case of true value, a sendRequest function is returned
     * to be used when the request is going to be sent
     */
    lazy?: boolean;
    
    /**
     * Callback to handle response or to do anything once
     * the response is fulfilled
     * @param response reactive response object
     * @param error reactive response error
     */
    cb?: (response: Ref<any>, error: Ref<AxiosError | null>)=>void = () => {};

    retry?: { attempts: number, delay: number };
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

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    retry?: { attempts: number, delay: number }
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

    const optionsInstance = new RequestOptions();

    Object.assign(optionsInstance, options);
    
    function sendRequest() {
        const headers = new AxiosHeaders();
        
        const config: CustomAxiosRequestConfig = {
            headers,
            method: optionsInstance.method,
            url,
            retry: optionsInstance.retry
        }

        if (optionsInstance.data)
            optionsInstance.method === 'GET' ?
                config.params = optionsInstance.data :
                config.data = optionsInstance.data;

        axiosIns<I>(config)
            .then(res => {
                response.value = res.data
                error.value = null
            })
            .catch(err => {
                error.value = err
            })
            .finally(async () => {
                loading.value = false;
                optionsInstance.cb!(response, error);
            });
        
        loading.value = true;
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
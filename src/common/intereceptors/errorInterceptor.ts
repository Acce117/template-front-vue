import GlobalEventManager from "@/common/utils/globalEventManager";
import type { CustomAxiosRequestConfig } from "@/common/utils/useSendRequest";
import type { AxiosError, AxiosInstance } from "axios";

export function errorInterceptor(axiosIns: AxiosInstance) {
    return (error: AxiosError) => {
        const config: CustomAxiosRequestConfig = error.config || {};

        let result = null;
        if (!config.retry || !config.retry.attempts) {
            result = Promise.reject(error);

            GlobalEventManager.dispatch('show-toast', {
                severity: 'error', 
                summary: 'Error Message', 
                detail: error.message, 
                life: 3000
            })
        } else {
            config.retry.attempts -= 1

            const delayRetryRequest = new Promise<void>(
                (resolve) => setTimeout(() => resolve(), config.retry!.delay)
            )

            result = delayRetryRequest.then(() => axiosIns(config));
        }

        return result;
    }
}
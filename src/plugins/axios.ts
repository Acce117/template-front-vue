import TokenHandler from "@/common/utils/token-handler";
import type { CustomAxiosRequestConfig } from "@/common/utils/useSendRequest";
import axios from "axios";

const config: CustomAxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL,
    retry: { attempts: 2, delay: 1000 },
    //any other desired configuration,
}

const axiosIns = axios.create(config);

axiosIns.interceptors.request.use(( config ) => {
    const token = TokenHandler.getToken();

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

axiosIns.interceptors.response.use((response) => response, (error)=>{
    const { config } = error;

    if(!config.retry && config.retry.attempts) {
        return Promise.reject(error);
    }

    config.retry.attempts -= 1

    const delayRetryRequest = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, config.retry.delay || 1000)
    })

    return delayRetryRequest.then(() => axiosIns(config));
})

export default axiosIns;
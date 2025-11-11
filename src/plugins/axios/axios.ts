import type { CustomAxiosRequestConfig } from "@/common/utils/useSendRequest";
import axios from "axios";
import { addTokenInterceptor } from "../../common/intereceptors/addToken";
import { errorInterceptor } from "../../common/intereceptors/errorInterceptor";

const config: CustomAxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL,
    
    retry: { attempts: 2, delay: 5000 },
    //any other desired configuration,
}

const axiosIns = axios.create(config);

axiosIns.interceptors.request.use(addTokenInterceptor)

axiosIns.interceptors.response.use((response) => response, errorInterceptor(axiosIns));

export default axiosIns;
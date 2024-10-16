import TokenHandler from "@/common/utils/token-handler";
import axios from "axios";

const axiosIns = axios.create({
    baseURL: import.meta.env.VITE_API_URL
    //any other desired configuration
})

axiosIns.interceptors.request.use(( config ) => {
    const token = TokenHandler.getToken();

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default axiosIns;
import TokenHandler from "@/common/utils/token-handler";
import type { InternalAxiosRequestConfig } from "axios";

export function addTokenInterceptor( config: InternalAxiosRequestConfig ) {
    const token = TokenHandler.getToken();

    if(token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;
}
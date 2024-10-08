import type { RouteRecordRaw } from "vue-router";
import SiteLogin from "../views/SiteLogin.vue";

export function defineAuthRoutes(basePath: string = ''): RouteRecordRaw[] {
    return [
        {
            path: `${basePath}/login`,
            component: SiteLogin,
            name: 'login'
        },
        {
            path: `${basePath}/register`,
            component: SiteLogin,
            name: 'register'
        }
    ];
}

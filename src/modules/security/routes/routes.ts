import type { RouteRecordRaw } from "vue-router";
import SiteLogin from "../views/SiteLogin.vue";
import SiteRegister from "../views/SiteRegister.vue";

export function defineAuthRoutes(basePath: string = ''): RouteRecordRaw[] {
    return [
        {
            path: `${basePath}/login`,
            component: SiteLogin,
            name: 'login'
        },
        {
            path: `${basePath}/register`,
            component: SiteRegister,
            name: 'register'
        }
    ];
}

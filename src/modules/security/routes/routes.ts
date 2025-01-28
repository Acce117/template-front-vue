import type { RouteRecordRaw } from "vue-router";
import SiteLogin from "../views/SiteAuthView.vue";
import RestorePassword from "../views/RestorePassword.vue";
import { LoginContext } from "../contexts/login.context";
import { SignInContext } from "../contexts/signin.context";

export function defineAuthRoutes(basePath: string = ''): RouteRecordRaw[] {
    return [
        {
            path: `${basePath}/login`,
            component: SiteLogin,
            name: 'login',
            props: { context: LoginContext }
        },
        {
            path: `${basePath}/register`,
            component: SiteLogin,
            name: 'register',
            props: {context: SignInContext}
        },
        {
            path: `${basePath}/restore_password`,
            component: RestorePassword,
            name: 'restore_password'
        }
    ];
}

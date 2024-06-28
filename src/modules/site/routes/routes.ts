import type { RouteRecordRaw } from "vue-router";
import SiteLogin from "../views/SiteLogin.vue";


export const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: SiteLogin
    }
];
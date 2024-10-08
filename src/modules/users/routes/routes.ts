import type { RouteRecordRaw } from "vue-router";
import UserData from "../views/UserData.vue";

export function defineUserRoutes(basePath: string = ''): RouteRecordRaw[] {
    return [
        {
            path: `${basePath}/users`,
            component: UserData
        }
    ];
}

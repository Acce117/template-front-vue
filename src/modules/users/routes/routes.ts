import type { RouteRecordRaw } from "vue-router";
import Users from "../views/Users.vue";

export function defineUserRoutes(basePath: string = ''): RouteRecordRaw[] {
    return [
        {
            path: `${basePath}/users`,
            component: Users
        }
    ];
}

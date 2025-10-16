import type { RouteRecordRaw } from "vue-router";
import Users from "../views/Users.vue";

const routes: RouteRecordRaw[] = [
    {
        path: `users`,
        component: Users,
    }
];

export default {
    parent: 'dashboard',
    routes
};

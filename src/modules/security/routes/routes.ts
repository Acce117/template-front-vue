import SiteLogin from "../views/SiteAuthView.vue";
import RestorePassword from "../views/RestorePassword.vue";
import { LoginContext } from "../contexts/login.context";
import { SignInContext } from "../contexts/signin.context";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { 
        path: '/',
        redirect: 'login',
    },
    {
        path: `login`,
        component: SiteLogin,
        name: 'login',
        props: { context: new LoginContext() }
    },
    {
        path: `register`,
        component: SiteLogin,
        name: 'register',
        props: { context: new SignInContext() }
    },
    {
        path: `restore_password`,
        component: RestorePassword,
        name: 'restore_password'
    }
];

export default {
    parent: '/',
    routes
}
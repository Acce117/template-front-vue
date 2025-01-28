import { reactive } from "vue";
import type { UserCredentials } from "../interfaces/userCredentials";

export class LoginContext {
    static contextId: string = 'login';

    static contextName: string = 'auth.login.header'

    static redirect = { 
        url: '/register',
        message: 'auth.login.not_account',
    }

    static button = {
        message: 'auth.login.login'
    }

    static submitButton = {
        message: ''
    }

    static getCredentials() {
        return reactive<UserCredentials>({
            username: '',
            password: '',
        });
    }

    static getUrl() {
        return 'login';
    }
}

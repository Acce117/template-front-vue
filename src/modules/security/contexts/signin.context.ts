import { reactive } from "vue";
import type { UserCredentials } from "../interfaces/userCredentials";

export class SignInContext {
    static contextId: string = 'sign_in';

    static contextName: string = 'auth.register.header'

    static redirect = { 
        url: '/login',
        message: 'auth.register.account',
    }

    static button = {
        message: 'auth.register.register'
    }

    static getCredentials() {
        return reactive<UserCredentials>({
            username: '',
            password: '',
        });
    }

    static getUrl() {
        return 'sign_in';
    }
}

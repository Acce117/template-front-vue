import { reactive } from "vue";
import type { UserCredentials } from "../interfaces/userCredentials";

export class LoginContext {
    contextId: string = 'login';

    contextName: string = 'auth.login.header'

    redirect = { 
        url: '/register',
        message: 'auth.login.not_account',
    }

    button = {
        message: 'auth.login.login'
    }

    submitButton = {
        message: ''
    }

    getCredentials() {
        return reactive<UserCredentials>({
            username: '',
            password: '',
        });
    }

    getUrl() {
        return 'login';
    }
}

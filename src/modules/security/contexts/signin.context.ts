import { reactive } from "vue";
import type { UserCredentials } from "../interfaces/userCredentials";

export class SignInContext {
    contextId: string = 'sign_in';

    contextName: string = 'auth.register.header'

    redirect = { 
        url: '/login',
        message: 'auth.register.account',
    }

    button = {
        message: 'auth.register.register'
    }

    getCredentials() {
        return reactive<UserCredentials>({
            username: '',
            password: '',
        });
    }

    getUrl() {
        return 'sign_in';
    }
}

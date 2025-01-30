import * as yup from 'yup';
import { i18n } from '@/plugins/i18n';
import type { YupSchema } from 'vee-validate';
export class UserModel{
    constructor(
        public password: string,
        public username: string,
        public email: string,
    ) {}

    static getColumns () {
        return [
            {
                field: "username",
                header: i18n.global.t('users.username'),
            },
            {
                field: "email",
                header: i18n.global.t('users.email')
            }
        ];
    }

    static getSchema (scenario : string = 'create'): YupSchema {
        let username = yup.string().required();
        let email = yup.string().email();
        const password = yup.string().required()
        
        if (scenario === 'create') email = email.required()
        
        return yup.object({
            username,
            email,
            password
        });
    }
}
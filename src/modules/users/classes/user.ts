import * as yup from 'yup';
import { i18n } from '@/plugins/i18n';
import type { YupSchema } from 'vee-validate';

export interface IUser {
    username: string | yup.StringSchema;
    email: string | yup.StringSchema;
    password?: string | yup.StringSchema;
}
export class UserModel implements IUser{
    constructor(
        public username: string,
        public email: string,
        public password?: string,
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
        
        let schema: IUser = {
            username,
            email,
        }

        if (scenario === 'create'){ 
            email = email.required() ;
            schema = { ...schema, password: yup.string().required() }
        }

        return yup.object();
    }
}
import * as yup from 'yup';
import { i18n } from '@/plugins/i18n';
export class UserModel {
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

    static getSchema () {
        return yup.object({
            username: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        });
    }
}
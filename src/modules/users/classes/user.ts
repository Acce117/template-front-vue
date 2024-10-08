import type { IUser } from "../interfaces/user.interface";

export class UserModel implements IUser{
    constructor(
        public password: string,
        public username: string
    ) {}
}
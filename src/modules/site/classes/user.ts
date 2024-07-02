import type {UserCredentials} from "@/modules/site/interfaces/userCredentials";

export class User implements UserCredentials{
    constructor(
        public password: string,
        public username: string
    ) {}
}
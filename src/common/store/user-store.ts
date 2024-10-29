import { defineStore } from "pinia";

export interface UserInterface {
    id: number | string | null
    name: string | null,
    username: string | null,
    roles: Array<unknown>,
    permissions: Array<unknown>,
}

export const userStore = defineStore('user', {
    state: (): UserInterface => {

        const state: UserInterface = {
            id: null,
            name: null,
            username: null,
            roles: [],
            permissions: [],
        }

        return state;
    },
});
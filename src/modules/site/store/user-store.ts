import { defineStore } from "pinia";

export interface UserInterface {
    ci: string | null,
    name: string | null,
    username: string | null,
    role: [],
}

export const userStore = defineStore('user', {
    state: (): UserInterface => {

        const state: UserInterface = {
            ci: null,
            name: null,
            username: null,
            role: [],
        }

        return state;
    },
});
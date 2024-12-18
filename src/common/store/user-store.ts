import { i18n } from "@/plugins/i18n";
import { defineStore } from "pinia";
import type { MenuItem } from "primevue/menuitem";
import { useRouter } from "vue-router";

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

    actions: {
        options(): MenuItem[] {
            return [
                {
                    label: () => i18n.global.t('nav-options.log-out'),
                    route: () => { useRouter().push('/login') }
                }
            ]
        }
    }
});
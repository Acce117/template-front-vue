<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import type { MenuItem } from 'primevue/menuitem';
import Card from 'primevue/card';
import NavBar from '@/components/NavBar.vue';
import VAvatar from '@/components/VAvatar.vue';
import VMenu from '@/components/VMenu.vue';

const router = useRouter();

const items = ref<MenuItem[]>([
    {
        label: 'Options',
        items: [
            {
                label: 'Home',
                command: ()=>{ router.push('/') }
            },
            {
                label: 'Log out',
                command: ()=>{ router.push('/login') }
            }
        ]
    }
]);

function menuOptions(): MenuItem[] {
    return [
        {
            label: useI18n().t('management.users.title'),
            route: '/management/users'
        }
    ]
}
</script>

<template>
    <div id="dashboard">
        <section id="menu">
            <VMenu :model="menuOptions()" :title="$t('menu.header')"></VMenu>
        </section>
        <div id="workspace">
            <div>
                <NavBar>
                    <template #avatar>
                        <VAvatar :items="items"></VAvatar>
                    </template>
                </NavBar>
            </div>
            <Card>
                <template #content>
                    <RouterView></RouterView>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
#dashboard {
    display: flex;
    height: 98vh;
    justify-content: space-between;
}

section {
    display: flex;
    margin: 0px;
}

#menu {
    justify-content: center;
    width: 15%;
}

#workspace {
    justify-content: center;
    align-items: center;
    padding: 0 1%;
    width: 85%;
}

#workspace div {
    margin-bottom: 17px;
}
</style>
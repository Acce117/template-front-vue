<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import VMenu from '@/components/VMenu.vue';
import Card from 'primevue/card';
import type { MenuItem } from 'primevue/menuitem';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

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
            <VMenu :model="menuOptions()" :title="$t('menu.header')"</VMenu>
        </section>
        <div id="workspace">
            <div>
                <NavBar :title="$t('nav_bar.header')">
                    <template #router>
                        <RouterLink to="/">Home</RouterLink>
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
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import type { MenuItem } from 'primevue/menuitem';
import Card from 'primevue/card';
import NavBar from '@/components/nav-bar/Index.vue';
import VAvatar from '@/components/nav-bar/VAvatar.vue';
import VMenu from '@/components/VMenu.vue';
import { userStore } from '@/common/store/user-store';

const i18n = useI18n();
const router = useRouter();

const items = ref<MenuItem[]>([
    {
        label: () => i18n.t('nav-options.home'),
        command: () => { router.push('/') }
    },
    ...userStore().options()
]);

const menuOptions = ref<MenuItem[]>([
    {
        label: () => i18n.t('dashboard.users.title'),
        route: '/dashboard/users',
    }
]);
</script>

<template>
    <div class="flex h-screen w-screen">
        <section class="flex p-2">
            <VMenu :model="menuOptions" :title="$t('menu.header')"></VMenu>
        </section>
        <div class="flex flex-col w-100% p-2">
            <div class="mb-4">
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

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import type { MenuItem } from 'primevue/menuitem';
import NavBar from '@/common/components/nav-bar/Index.vue';
import VAvatar from '@/common/components/nav-bar/VAvatar.vue';
import { useI18n } from 'vue-i18n';
import { userStore } from '@/common/store/user-store';

const router = useRouter();
const i18n = useI18n();

const items = ref<MenuItem[]>([
    {
        label: () => i18n.t('nav-options.dashboard'),
        command: () => { router.push('/dashboard') }
    },
    ...userStore().options()
]);
</script>

<template>
    <header class="position-fixed position-top-none w-screen">
        <NavBar class="m-1">
            <template #avatar>
                <VAvatar :items="items"></VAvatar>
            </template>
        </NavBar>
    </header>
    <main class="w-screen p-2 pt-20">
        <h1>
            {{ $t('site.header') }}
        </h1>
        <RouterView></RouterView>
    </main>
    <footer>
        <p>footer</p>
    </footer>
</template>
